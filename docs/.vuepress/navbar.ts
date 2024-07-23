import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  {
    text: "学习笔记",
    icon: "icon-park-outline:guide-board",
    link: "/notes/",
    activeMatch: "^/guide/",
  },
  {
    text: "博客",
    link: "/blog/",
    icon: "material-symbols:article-outline",
    activeMatch: "^/(blog|article)/",
  },
]);
