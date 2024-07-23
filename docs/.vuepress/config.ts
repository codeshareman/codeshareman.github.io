import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { USER_PROFILE } from "./plume.config";
import { theme } from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  locales: {
    "/": {
      title: USER_PROFILE.name,
      lang: "zh-CN",
    },
    "/en/": {
      title: "Teemo.zzz",
      lang: "en-US",
    },
  },
  theme,
  bundler: viteBundler(),
});
