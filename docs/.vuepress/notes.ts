import {
  definePlumeNotesConfig,
  definePlumeNotesItemConfig,
} from "vuepress-theme-plume";

const typescriptNotes = definePlumeNotesItemConfig({
  dir: "typescript",
  link: "/typescript/",
  text: "Typescript",
  sidebar: [
    {
      text: "简介",
      icon: "mdi:language-typescript",
      items: ["foo", "file", 'interface'],
    },
  ],
});

export default definePlumeNotesConfig({
  dir: "/notes/",
  link: "/",
  notes: [typescriptNotes],
});

