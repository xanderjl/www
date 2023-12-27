import type { PathLike } from "fs";
import fs from "fs/promises";
import { cwd } from "process";


export const getSketchSlugs = async (path?: PathLike) => {
  const files = await fs.readdir( path ?? `${cwd()}/src/pages/sketches`);
  const filteredFiles = files.filter((file) => file !== "index.astro");
  const slugs = filteredFiles.map((file) => file.replace(".astro", ""));

  return slugs;
};
