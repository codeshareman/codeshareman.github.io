import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import { getFileTree } from "../utils/fs";


interface NoteCategoryInfo {
  name: string;
  createTime: Date;
  updateTime: Date;
}

const __filename = fileURLToPath(import.meta.url);
const dirPath = path.resolve(__filename, "../../../notes");

export const getNotesTree = async () => {
  const fileTree = await getFileTree(dirPath);
  return fileTree;
};

export const getNoteCategory = async (path: string) => {
  try {
    const files = await fs.readdir(path);
    const categories: NoteCategoryInfo[] = [];
    for (let file of files) {
      const filePath = `${path}/${file}`;
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        categories.push({
          name: file,
          createTime: stat.ctime,
          updateTime: stat.atime,
        });
      }
    }
    return categories;
  } catch (err) {
    return [];
  }
};

export const getNoteMetaInfo = () => {};
