import fs from "node:fs/promises";

export const getFileTree = async (path: string) => {
  const readDir = async (path: string) => {
    try {
      const files = await fs.readdir(path);
      let fileTree: any[] = [];
      for (let file of files) {
        const filePath = `${path}/${file}`;
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) {
          const children = await readDir(filePath);
          fileTree.push({
            name: file,
            createTime: stats.ctime,
            updateTime: stats.atime,
            type: "dir",
            children,
          });
        } else {
          fileTree.push({
            name: file,
            createTime: stats.ctime,
            updateTime: stats.atime,
            type: "file",
          });
        }
      }
      return fileTree;
    } catch (err) {
      console.log("🚀 ~ readDir ~ err:", err);
      return [];
    }
  };
  return readDir(path);
};
