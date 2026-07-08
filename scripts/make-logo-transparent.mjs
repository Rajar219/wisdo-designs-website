import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_IMAGE = path.join(__dirname, "../public/logo.png");
const OUTPUT_IMAGE = path.join(__dirname, "../public/logo-transparent.png");

async function makeTransparent() {
  try {
    const image = sharp(SOURCE_IMAGE);
    const { width, height } = await image.metadata();
    
    if (!width || !height) {
      throw new Error("Could not load image metadata");
    }

    // Resize to a sensible width for web use
    const resizedWidth = 600;
    const resizedHeight = Math.round((height / width) * resizedWidth);
    
    console.log(`Processing image to make background transparent (${resizedWidth}x${resizedHeight})...`);
    
    const { data, info } = await sharp(SOURCE_IMAGE)
      .resize(resizedWidth, resizedHeight)
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
        // Linear fade for anti-aliasing edges to prevent white halos
        const avg = (r + g + b) / 3;
        if (avg >= 250) {
          data[i + 3] = 0; // Fully transparent
        } else {
          // Fade alpha from 255 to 0 between avg=240 and avg=250
          const alphaFactor = (250 - avg) / 10;
          data[i + 3] = Math.round(data[i + 3] * alphaFactor);
        }
      }
    }

    await sharp(data, {
      raw: {
        width: resizedWidth,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(OUTPUT_IMAGE);

    console.log("Transparent logo generated successfully at public/logo-transparent.png!");
  } catch (err) {
    console.error("Error making transparent:", err);
    process.exit(1);
  }
}

makeTransparent();
