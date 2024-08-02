import express from "express";
import { createServer as createViteServer } from "vite";

async function createServer() {
  const app = express();

  // 以中间件模式创建 Vite 服务器
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom", // 不引入 Vite 默认的 HTML 处理中间件
  });

  // 将 Vite 的 connect 实例作为中间件使用
  app.use(vite.middlewares);

  // 捕获所有路由并处理响应
  app.use("*", async (req, res) => {});
}

createServer();
