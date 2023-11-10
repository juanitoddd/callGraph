import type { FastifyInstance } from "fastify";
import path from "path";
import fs from "fs/promises";
import { glob, globSync, globStream, globStreamSync, Glob } from "glob";

//joining path of directory
const dir = path.join(process.cwd(), "../scripts/");
const dirAbs = "/home/juan/dev/23dev_env/23universal/src/app";

const walk = async (dir, filelist = []) => {
  const files = await fs.readdir(dir);

  for (let file of files) {
    const filepath = path.join(dir, file);
    const stat = await fs.stat(filepath);

    if (stat.isDirectory()) {
      filelist = await walk(filepath, filelist);
    } else {
      if (file.includes("component.ts")) filelist.push(`${dir}/${file}`);
      // if (file.includes(".ts")) filelist.push(file);
    }
  }

  return filelist;
};

export default async (fastify: FastifyInstance) => {
  fastify.get("/", {}, async function (req, res) {
    const files = await walk(dirAbs);
    console.log("🚀 ~ tsfiles:", files);
    return { statusCode: 200 };
  });
};
