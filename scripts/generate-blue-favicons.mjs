import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the generated blue-white favicon source image
const SOURCE_IMAGE = "C:/Users/Arvindh Ravichandar/.gemini/antigravity-ide/brain/d110df50-46b1-40ef-91a0-53edb2e58142/favicon_source_wb_1783490205401.png";
const PUBLIC_DIR = path.join(__dirname, "../public");

async function generateTransparentFavicons() {
  try {
    console.log("Reading source image...");
    
    // First make the white background transparent at full size (1024x1024)
    const { data, info } = await sharp(SOURCE_IMAGE)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Loop through pixels and make white/near-white transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Check if pixel is white or near-white
      if (r > 240 && g > 240 && b > 240) {
        const avg = (r + g + b) / 3;
        if (avg >= 250) {
          data[i + 3] = 0; // Fully transparent
        } else {
          // Soft alpha edge blending for anti-aliasing
          const alphaFactor = (250 - avg) / 10;
          data[i + 3] = Math.round(data[i + 3] * alphaFactor);
        }
      }
    }

    // Load the raw transparent buffer back into sharp
    const transparentImage = sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    });

    console.log("Generating transparent favicon-16x16.png (Sharp and crisp)...");
    // For 16x16 we use lanczos kernel to ensure it stays sharp and clean on small browser tabs
    await transparentImage
      .clone()
      .resize(16, 16)
      .png()
      .toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));

    console.log("Generating transparent favicon-32x32.png...");
    await transparentImage
      .clone()
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));

    console.log("Generating transparent apple-touch-icon.png...");
    await transparentImage
      .clone()
      .resize(180, 180)
      .png()
      .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));

    console.log("Generating transparent favicon.ico...");
    await transparentImage
      .clone()
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, "favicon.ico"));

    console.log("Minimal premium Blue/White transparent favicons generated successfully!");
  } catch (err) {
    console.error("Error generating favicons:", err);
    process.exit(1);
  }
}

generateTransparentFavicons();
