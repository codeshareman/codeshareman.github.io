import {
  definePlumeNotesConfig,
  definePlumeNotesItemConfig,
} from "vuepress-theme-plume";

export const TypescriptNoteConfig = definePlumeNotesItemConfig({
  dir: "typescript",
  link: "/typescript/",
  text: "Typescript",
  sidebar: [
    {
      text: "简介",
      icon: "mdi:language-typescript",
      items: ["intro", "file", "interface"],
    },
  ],
});

export default definePlumeNotesConfig({
  dir: "/notes/",
  link: "/",
  notes: [TypescriptNoteConfig],
});
