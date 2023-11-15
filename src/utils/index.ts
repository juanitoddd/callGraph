import path from "path";
import fs from "fs/promises";

export const scanDir = async (
  dir: string,
  filelist: string[] = [],
  match: string = ".ts"
) => {
  const files = await fs.readdir(dir);

  for (let file of files) {
    const filepath = path.join(dir, file);
    const stat = await fs.stat(filepath);

    if (stat.isDirectory()) {
      filelist = await scanDir(filepath, filelist);
    } else {
      if (file.includes(match)) filelist.push(`${dir}/${file}`);
      // if (file.includes(".ts")) filelist.push(file);
    }
  }

  return filelist;
};

export const readPackageJson = async (_dirRoot: string) => {
  var pjson = require(path.join(_dirRoot, "package.json"));
  return pjson;
};
