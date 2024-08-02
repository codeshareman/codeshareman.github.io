import { SidebarItem } from "vuepress-theme-plume";
import typescriptPng from "../../public/typescript.png";

interface SidebarItemMeta extends SidebarItem {}

export interface NoteCategoryMeta {
  name: string;
  title: string;
  link: string;
  imgLink?: string;
  createTime?: Date;
  updateTime?: Date;
  subTitle?: string;
  author: string;
  sidebars: SidebarItemMeta[];
}

const noteConfigs: NoteCategoryMeta[] = [
  {
    name: "typescript",
    title: "Typescript",
    link: "/typescript/intro/",
    imgLink: "/typescript.png",
    author: "Teemo.zzz",
    updateTime: new Date(),
    sidebars: [],
  },
  {
    name: "NodeJs",
    title: "NodeJs",
    link: "/node.js/",
    imgLink: "/nodejs.png",
    author: "Teemo.zzz",
    updateTime: new Date(),
    sidebars: [],
  },
];

export function getNoteCategory(configs: NoteCategoryMeta[] = noteConfigs) {
  return noteConfigs.map(({ sidebars, ...categories }) => categories);
}
