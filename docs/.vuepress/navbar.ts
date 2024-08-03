import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  {
    text: "Gallery",
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
