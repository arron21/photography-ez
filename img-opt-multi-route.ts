import { Image } from "https://deno.land/x/imagescript@1.2.15/mod.ts";
import { join } from "https://deno.land/std@0.220.0/path/mod.ts";
import { expandGlob } from "https://deno.land/std@0.220.0/fs/mod.ts";
import { Img } from "./types.ts";

const imgQuality = 70;
const thumbWidth = 300;
const inputDir = join(Deno.cwd(), "static", "gallery");
const outputDirFull = join(Deno.cwd(), "static", "gallery");

const outputDir = join(Deno.cwd(), "static", "gallery-opt");

const inputDirs = [];
for await (const file of expandGlob("{routes}/**/gallery")) {
  if (file.isDirectory) {
    inputDirs.push(file.path);
  }
}

console.log(inputDirs);


/**
 * Optimizes the images in the inputDir directory and saves them to the outputDir directory
 * writes the optimized images metadata to a images.ts file in the outputDir directory
 */
async function optimizeImages(galleryDir: string) {
  const galleryDirOpt = galleryDir+'-opt';
  // const galleryDirOpt = '/static/gallery-opt';
  const staticGalleryDir = '/static/gallery/';
  const staticGalleryDirOptimized = '/static/gallery-opt/';

  const files = [];

  try {
    Deno.removeSync(galleryDirOpt, { recursive: true });
    Deno.mkdirSync(galleryDirOpt);
  } catch {
    Deno.mkdirSync(galleryDirOpt);
    
  }

  /**
   * Remove and recreate the /static/gallery directory
   */
  // join(Deno.cwd(), "static", "gallery-opt");
  // try {
  //   Deno.removeSync(staticGalleryDirOptimized, { recursive: true });
  //   Deno.mkdirSync(staticGalleryDirOptimized);
  // } catch {
  //   Deno.mkdirSync(staticGalleryDirOptimized);
  // }

  for await (const dirEntry of Deno.readDir(galleryDir)) {
    if (dirEntry.isFile) {
      files.push(dirEntry.name);
    }
  }

  const images = files.filter((file) =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  );

  const imagesMetaDataArr: Img[]  = [];
  for (const img of images) {

    const inputBuffer = await Deno.readFile(`${galleryDir}/${img}`);
    const image = await Image.decode(inputBuffer);
    const outputImg = await image.encodeJPEG(70);
    await Deno.writeFile(`${outputDirFull}/${img}`, outputImg);


    const imgData = await optimizeImgForWeb(
      `${galleryDir}/${img}`,
      `${outputDir}/${img}`,
      70,
      img,
    );
    imagesMetaDataArr.push(imgData);
  }

  const content = `export const images = ${JSON.stringify(imagesMetaDataArr)}`;
  await Deno.writeTextFile(galleryDirOpt + "/images.ts", content);
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
  inputPath: string,
  outputPath: string,
  quality = imgQuality,
  fileName: string,
): Promise<Img> {
  
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
  // } catch (error) {
  //   console.error(`Error converting ${inputPath} to Optimized file:`, error);
  // }
}

if (import.meta.main) {
  console.log(`Optimizing images please wait...`);
  const t0 = performance.now();
  for(let dir of inputDirs){
    await optimizeImages(dir);
  }
  // await optimizeImages();
  const t1 = performance.now();
  // console.log(
  //   `Optimized ${imagesObjsArr.length} images in ${t1 - t0} milliseconds.`,
  // );
  console.log(
    `Optimized images in ${t1 - t0} milliseconds.`,
  );
}
