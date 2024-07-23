import { defineClientConfig } from "vuepress/client";
import NoteList from "./themes/components/NoteList.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("NoteList", NoteList);
  },
});
