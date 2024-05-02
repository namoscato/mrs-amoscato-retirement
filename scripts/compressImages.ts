import { readdir } from "fs/promises";
import pLimit from "p-limit";
import { join } from "path";
import tinify from "tinify";

const API_KEY = process.env.TINIFY_API_KEY;
const DIRECTORY_PATH = join(__dirname, "..", "public", "images", "portraits");
const CONCURRENCY = 5;

if (!API_KEY) {
  throw new Error("TINIFY_API_KEY is not set");
}

tinify.key = API_KEY;

compressImages();

async function compressImages() {
  console.log(`Reading files from: ${DIRECTORY_PATH}`);
  const files = await readdir(DIRECTORY_PATH);

  const limit = pLimit(CONCURRENCY);

  const promises = files.map((file) => {
    if (!file.endsWith(".jpg")) {
      return;
    }

    return limit(() => {
      console.log(`Compressing: ${file}`);
      const path = join(DIRECTORY_PATH, file);
      const source = tinify.fromFile(path);

      return source.toFile(path);
    });
  });

  await Promise.all(promises);
}
