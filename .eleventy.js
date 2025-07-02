import fs from 'fs';
import path from 'path';

export default async function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addCollection("photoGallery", () => {
        const dir = "src/images";
        const allFiles = fs.readdirSync(dir);
        const imageFiles = allFiles.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return['.jpg', '.jpeg', '.png', '.svg', '.webp'].includes(ext);
        });
        return imageFiles.map(file => ({
            url: `/images/${file}`,
            filename: file
        }));
    });
};

export const config = 
{    
    dir: 
    {
        input: "src",
        output: "_site",
        templateFormats: ["html", "liquid"]
    }
};
