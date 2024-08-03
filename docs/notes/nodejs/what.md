---
title: Node.js是什么?
author: Teemo.zzz
createTime: 2024/08/03 12:49:07
permalink: /nodejs/what/
outline:
  - 3
  - 4
---

### 简介

Node.js 是一个开源、跨平台的 JavaScript 运行时环境。它是几乎适用于任何类型项目的流行工具！

Node.js 在浏览器外部运行 V8 JavaScript 引擎，这是 Google Chrome 的核心。这使得 Node.js 具有非常高的性能。

Node.js 应用程序在单个进程中运行，无需为每个请求创建新线程。 Node.js 在其标准库中提供了一组异步 I/O 原语，可防止 JavaScript 代码阻塞，并且通常 Node.js 中的库是使用非阻塞范例编写的，这使得阻塞行为成为例外而不是常态。

当 Node.js 执行 I/O 操作（例如从网络读取、访问数据库或文件系统）时，Node.js 不会阻塞线程并浪费 CPU 周期等待，而是会在响应返回时恢复操作。

这使得 Node.js 能够通过单个服务器处理数千个并发连接，而 ​​ 不会引入管理线程并发的负担，而管理线程并发可能是错误的重要来源。

Node.js 具有独特的优势，因为数百万为浏览器编写 JavaScript 的前端开发人员现在除了客户端代码之外还可以编写服务器端代码，而无需学习完全不同的语言。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为您不必等待所有用户更新其浏览器 - 您负责通过更改 Node.js 版本来决定使用哪个 ECMAScript 版本，您还可以通过运行带有标志的 Node.js 来启用特定的实验性功能。

### 应用程序示例

::: code-tabs
@tab js

```js{4} whitespace
// @filename: server.js
const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

@tab ts

```js{4} whitespace
// @filename: server.ts
const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

:::

要运行此代码片段，请将其保存为 server.js 文件并在终端中运行 node server.js 。

此代码首先包含 Node.js http 模块。

Node.js 拥有出色的标准库，包括一流的网络支持。

http 的 createServer()方法创建一个新的 HTTP 服务器并返回它。

服务器设置为侦听指定的端口和主机名。当服务器准备就绪时，将调用回调函数，在本例中通知我们服务器正在运行。

每当收到新请求时，都会调用 request 事件，并提供两个对象：请求（ http.IncomingMessage 对象）和响应（ http.ServerResponse 对象）。

这两个对象对于处理 HTTP 调用至关重要。

第一个提供请求详细信息。在这个简单的示例中，未使用它，但您可以访问请求标头和请求数据。

第二个用于将数据返回给调用者。