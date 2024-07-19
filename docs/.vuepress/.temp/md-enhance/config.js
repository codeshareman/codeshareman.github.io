import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.38_typescript@5.5.3_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0_vrn27a5v6whb3commfpddwltg4/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.min.css";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.3_vuep_ida2zn7jqwvc2s6idrjxg7dpba/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
