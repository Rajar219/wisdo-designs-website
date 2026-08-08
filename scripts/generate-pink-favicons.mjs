import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_IMAGE = path.join(__dirname, "../public/logo-transparent.png");
const PUBLIC_DIR = path.join(__dirname, "../public");
const APP_DIR = path.join(__dirname, "../app");

async function extractIconAndGenerateFavicons() {
  try {
    console.log("Analyzing logo-transparent.png to extract the pink/purple W icon...");
    
    // Load metadata
    const image = sharp(SOURCE_IMAGE);
    const { width, height } = await image.metadata();
    
    // Get raw pixel data
    const { data } = await image
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Count non-transparent pixels in each row
    const rowCounts = new Array(height).fill(0);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const alpha = data[idx + 3];
        if (alpha > 10) { // Non-transparent pixel
          rowCounts[y]++;
        }
      }
    }

    // Find the first row with pixels (start of the logo symbol)
    let iconStartRow = 0;
    for (let y = 0; y < height; y++) {
      if (rowCounts[y] > 0) {
        iconStartRow = y;
        break;
      }
    }

    // Find the separator row (a row of zero or very few pixels between symbol and text)
    // The separator is usually around the middle of the height (between 40% and 70%)
    let separatorRow = Math.round(height * 0.6);
    let minDensity = width;
    
    for (let y = Math.round(height * 0.45); y < Math.round(height * 0.7); y++) {
      if (rowCounts[y] < minDensity) {
        minDensity = rowCounts[y];
        separatorRow = y;
      }
    }

    const croppedHeight = separatorRow - iconStartRow;
    console.log(`Image Metadata: ${width}x${height}`);
    console.log(`Icon rows detected: start=${iconStartRow}, end=${separatorRow}, height=${croppedHeight}`);

    // Ensure values are within boundaries
    const safeLeft = 0;
    const safeTop = Math.max(0, iconStartRow);
    const safeWidth = width;
    const safeHeight = Math.min(height - safeTop, croppedHeight);

    console.log(`Safe extract area: left=${safeLeft}, top=${safeTop}, width=${safeWidth}, height=${safeHeight}`);

    // Crop to the symbol vertical region
    const croppedBuffer = await sharp(SOURCE_IMAGE)
      .extract({
        left: safeLeft,
        top: safeTop,
        width: safeWidth,
        height: safeHeight
      })
      .toBuffer();

    const croppedIcon = await sharp(croppedBuffer)
      .trim()
      .toBuffer();

    console.log("Extracted clean pink logo symbol. Generating favicons...");

    // Write the transparent pink favicons
    await sharp(croppedIcon)
      .resize(16, 16)
      .png()
      .toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));

    await sharp(croppedIcon)
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));

    await sharp(croppedIcon)
      .resize(180, 180)
      .png()
      .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));

    await sharp(croppedIcon)
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, "favicon.ico"));

    // Also overwrite the App folder's favicon.ico for Next.js precedence
    await sharp(croppedIcon)
      .resize(32, 32)
      .png()
      .toFile(path.join(APP_DIR, "favicon.ico"));

    console.log("Original Pink/Purple transparent favicons generated successfully!");
  } catch (error) {
    console.error("Error extracting icon or generating favicons:", error);
    process.exit(1);
  }
}

extractIconAndGenerateFavicons();
