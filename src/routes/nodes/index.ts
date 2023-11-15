import type { FastifyInstance } from "fastify";
import path from "path";
import fs from "fs/promises";
import { readPackageJson, scanDir } from "../../utils";

//joining path of directory
const dir = path.join(process.cwd(), "../scripts/");
const dirRoot = "/home/juan/dev/23dev_env/";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", {}, async function (req, res) {
    const dir = path.join(dirRoot, "src", "app");
    const pkg = await readPackageJson(path.join(dirRoot, "23universal"));
    const universal = await scanDir(
      path.join(dirRoot, "23universal", "src", "app"),
      [],
      "component.ts"
    );
    // console.log("🚀 ~ tsfiles:", files);
    return { statusCode: 200 };
  });
};
