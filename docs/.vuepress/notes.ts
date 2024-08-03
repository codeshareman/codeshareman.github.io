import {
  definePlumeNotesConfig,
  definePlumeNotesItemConfig,
} from "vuepress-theme-plume";
import { noteConfig } from "./themes/models/note";

const { nodejs, typescript } = noteConfig;

export const NodeJsNoteConfig = definePlumeNotesItemConfig({
  dir: "nodejs",
  link: '/nodejs/',
  text: nodejs.name,
  sidebar: [
    {
      text: "Get Started",
      icon: "mdi:nodejs",
      collapsed: false,
      items: [
        {
          text: "Node.js是什么?",
          target: "../notes/nodejs/intro.md",
          link: "/nodejs/what/",
        },
        {
          text: "为什么要使用Node.js",
          target: "../notes/nodejs/file.md",
          link: "/nodejs/why/",
        },
        {
          text: "学习资源",
          target: "../notes/nodejs/resource.md",
          link: "/nodejs/resource/",
        },
      ],
    },
  ],
});

export default definePlumeNotesConfig({
  dir: "/notes/",
  link: "/",
  notes: [NodeJsNoteConfig],
});
