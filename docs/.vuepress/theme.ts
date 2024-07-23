import process from "node:process";
import { plumeTheme } from "vuepress-theme-plume";
import type { Theme } from "vuepress";
import plumeConfig from "./plume.config";

export const theme: Theme = plumeTheme({
  hostname: process.env.SITE_HOST || "https://codeshareman.github.io",
  plugins: {
    comment: {
      provider: "Giscus",
      comment: true,
      repo: "codeshareman/codeshareman.github.io",
      repoId: "R_kgDOMXZ_7w",
      category: "General",
      categoryId: "DIC_kwDOMXZ_784Cg-04",
      mapping: "title",
      reactionsEnabled: true,
      inputPosition: "top",
      darkTheme: "dark_protanopia",
      lightTheme: "light_protanopia",
      lazyLoading: true,
    },
    markdownEnhance: {
      chart: true,
      demo: true,
      revealJs: true,
    },
    markdownPower: {
      bilibili: true,
      caniuse: true,
    },
  },
  ...plumeConfig,
});
