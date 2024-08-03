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

type NoteCategory = "nodejs" | "typescript";

export const noteConfig: { [K in NoteCategory]: NoteCategoryMeta } = {
  nodejs: {
    name: "NodeJs",
    title: "Learn NodeJs",
    link: "/nodejs/what/",
    imgLink: "/nodejs.png",
    author: "Teemo.zzz",
    sidebars: [],
  },
  // typescript: {
  //   name: "typescript",
  //   title: "Learn Typescript",
  //   link: "/typescript/intro/",
  //   imgLink: "/typescript.png",
  //   author: "Teemo.zzz",
  //   sidebars: [],
  // },
};

const noteConfigs = [noteConfig.nodejs];

export function getNoteCategory(configs: NoteCategoryMeta[] = noteConfigs) {
  return noteConfigs.map(({ sidebars, ...categories }) => categories);
}
