import { Image } from "https://deno.land/x/imagescript@1.2.15/mod.ts";
import { join } from "https://deno.land/std@0.220.0/path/mod.ts";

const imgQuality = 70;
const thumbWidth = 300;
const inputDir = join(Deno.cwd(), "static", "gallery");
const outputDir = join(Deno.cwd(), "static", "gallery-opt");

const imagesObjsArr = [];

/**
 * Optimizes the images in the inputDir directory and saves them to the outputDir directory
 * writes the optimized images metadata to a images.ts file in the outputDir directory
 */
async function optimizeImages() {
  const files = [];

  for await (const dirEntry of Deno.readDir(inputDir)) {
    if (dirEntry.isFile) {
      files.push(dirEntry.name);
    }
  }

  const images = files.filter((file) =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  );
  for (let img of images) {
    const imgData = await optimizeImgForWeb(
      `${inputDir}/${img}`,
      `${outputDir}/${img}`,
      70,
      img,
    );
    imagesObjsArr.push(imgData);
  }

  const content = `export const images = ${JSON.stringify(imagesObjsArr)}`;
  await Deno.writeTextFile(outputDir + "/images.ts", content);
}

/**
 * Optimizes an image for the web in jpg format
 * @param {*} inputPath
 * @param {*} outputPath
 * @param {*} quality
 * @param {*} fileName
 * @returns JSON object with image metadata
 */
async function optimizeImgForWeb(
  inputPath,
  outputPath,
  quality = imgQuality,
  fileName,
) {
  try {
    // Read the input file
    const inputBuffer = await Deno.readFile(inputPath);

    // Decode the image
    const image = await Image.decode(inputBuffer);
    const widthFull = image.width;
    const heightFull = image.height;

    image.resize(thumbWidth, Image.RESIZE_AUTO);

    const outputImg = await image.encodeJPEG(quality);

    await Deno.writeFile(outputPath, outputImg);

    const obj = {
      name: fileName,
      widthFull,
      heightFull,
      width: image.width,
      height: image.height,
    };

    return obj;
  } catch (error) {
    console.error(`Error converting ${inputPath} to Optimized file:`, error);
  }
}

if (import.meta.main) {
  console.log(`Optimizing images please wait...`);
  const t0 = performance.now();
  await optimizeImages();
  const t1 = performance.now();
  console.log(
    `Optimized ${imagesObjsArr.length} images in ${t1 - t0} milliseconds.`,
  );
}
