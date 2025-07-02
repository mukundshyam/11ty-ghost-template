import fs from 'fs';
import path from 'path';

const imagesDir = "./src/images";
const captionsFile = "./src/_data/captions.json";

let existingCaptions = {};
if (fs.existsSync(captionsFile)) {
  const data = fs.readFileSync(captionsFile);
  existingCaptions = JSON.parse(data);
}

const files = fs.readdirSync(imagesDir);

const imageFiles = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp", ".svg"].includes(ext);
});

imageFiles.forEach(file => {
  if (!existingCaptions[file]) {
    existingCaptions[file] = "";
  }
});

fs.writeFileSync(captionsFile, JSON.stringify(existingCaptions, null, 2));
console.log(`✅ captions.json updated with ${imageFiles.length} image(s).`);