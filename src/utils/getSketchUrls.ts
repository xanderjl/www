import fs from "fs/promises";
import { cwd } from "process";

export const getSketchSlugs = async () => {
  const files = await fs.readdir(`${cwd()}/src/pages/sketches`);
  const filteredFiles = files.filter(file => file !== "index.astro");
  const slugs = filteredFiles.map(file => file.replace(".astro", ""));

  return slugs;
};
