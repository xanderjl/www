import fs from "fs";
import path from "path";

export const getFileAsBase64String = (string: string) => {
  const filePath = path.join(process.cwd(), string);
  const bitmap = fs.readFileSync(filePath);
  const base64String = bitmap.toString("base64");

  return base64String;
};
