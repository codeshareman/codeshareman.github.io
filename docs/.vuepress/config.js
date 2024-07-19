import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  locales: {
    "/": {
      title: "Teemo.zzz",
      lang: "zh-CN",
    },
    "/en/": {
      title: "Teemo.zzz",
      lang: "en-US",
    },
  },
  theme: plumeTheme({
    profile: {
      name: "Teemo.zzz",
      description: "a handsome boy",
      circle: true,
    },
    navbar: [
      {
        text: "学习笔记",
        icon: "icon-park-outline:guide-board",
        // link: '/guide/intro/',
        link: "/typescript/e04agzbj/",
        activeMatch: "^/guide/",
      },
      {
        text: "博客",
        link: "/blog/",
        icon: "material-symbols:article-outline",
        activeMatch: "^/(blog|article)/",
      },
      {
        text: "案例",
        link: "/demos/",
        icon: "map:wind-surfing",
      },
    ],
    notes: {
      dir: "/notes/", // 声明所有笔记的目录
      link: "/", // 声明所有笔记默认的链接前缀， 默认为 '/'
      notes: [
        {
          dir: "typescript", // 声明笔记的目录，相对于 `notes.dir`
          link: "/typescript/", // 声明笔记的链接前缀
          text: "Typescript",
          sidebar: [
            // 配置侧边栏
            {
              text: "简介",
              icon: "mdi:language-typescript", // 侧边栏图标
              items: ["foo", "file"], // 简化写法，主题会自动补全为 `foo.md`
            },
          ],
        },
        {
          dir: "rust",
          link: "/rust/",
          sidebar: [{ text: "简介", items: ["foo"] }],
        },
      ],
    },
  }),
  bundler: viteBundler(),
});
