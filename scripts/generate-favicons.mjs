import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_IMAGE = path.join(__dirname, "../public/logo-transparent.png");
const PUBLIC_DIR = path.join(__dirname, "../public");

async function generateFavicons() {
  try {
    console.log("Generating favicon-16x16.png...");
    await sharp(SOURCE_IMAGE)
      .resize(16, 16)
      .toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));

    console.log("Generating favicon-32x32.png...");
    await sharp(SOURCE_IMAGE)
      .resize(32, 32)
      .toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));

    console.log("Generating apple-touch-icon.png...");
    await sharp(SOURCE_IMAGE)
      .resize(180, 180)
      .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));

    console.log("Generating favicon.ico...");
    await sharp(SOURCE_IMAGE)
      .resize(32, 32)
      .toFile(path.join(PUBLIC_DIR, "favicon.ico"));

    console.log("Generating logo-optimized.png...");
    await sharp(SOURCE_IMAGE)
      .resize(400) // 400px width, auto-height to preserve aspect ratio
      .toFile(path.join(PUBLIC_DIR, "logo-optimized.png"));

    console.log("Favicons and optimized logo generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
    process.exit(1);
  }
}

generateFavicons();
