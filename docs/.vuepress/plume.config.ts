import { defineThemeConfig } from "vuepress-theme-plume";
import navBarConfig from "./navbar";
import notesConfig from "./notes";

export const USER_PROFILE = {
  name: "Teemo.zzz",
  description: "a handsome boy",
  circle: true,
};

export default defineThemeConfig({
  profile: USER_PROFILE,
  locales: {
    "/": {
      notes: notesConfig,
      navbar: navBarConfig,
    },
    "/en/": {},
  },
  footer: {
    message: "",
    copyright: `Copyright © 2024-present ${USER_PROFILE.name}`,
  },
});
