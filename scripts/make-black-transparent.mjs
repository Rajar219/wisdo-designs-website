import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_IMAGE = path.join(__dirname, "../public/new logo 1.0.png");
const OUTPUT_IMAGE = path.join(__dirname, "../public/logo-transparent.png");

async function makeTransparent() {
  try {
    const image = sharp(SOURCE_IMAGE);
    const { width, height } = await image.metadata();
    
    if (!width || !height) {
      throw new Error("Could not load image metadata");
    }

    // Don't resize aggressively, keep it high quality
    console.log(`Processing image to make black background transparent (${width}x${height})...`);
    
    const { data, info } = await sharp(SOURCE_IMAGE)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Loop through pixels and make black/near-black transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Check if pixel is black or near-black
      if (r < 15 && g < 15 && b < 15) {
        const avg = (r + g + b) / 3;
        if (avg <= 5) {
          data[i + 3] = 0; // Fully transparent
        } else {
          // Fade alpha from 0 to 255 between avg=5 and avg=15
          const alphaFactor = (avg - 5) / 10;
          data[i + 3] = Math.round(255 * alphaFactor);
        }
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(OUTPUT_IMAGE);
    
    // Also copy it to logo new.png to keep them in sync
    await sharp(OUTPUT_IMAGE).toFile(path.join(__dirname, "../public/logo new.png"));

    console.log("Transparent logo generated successfully!");
  } catch (err) {
    console.error("Error making transparent:", err);
    process.exit(1);
  }
}

makeTransparent();
