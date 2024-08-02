import { defineClientConfig } from "vuepress/client";
import ChartJS from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.38_typescript@5.5.3_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0_vrn27a5v6whb3commfpddwltg4/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.min.css";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/reveal.js@5.1.0/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.51_chart.js@4.4.3_katex@0.16.11_markdown-it@14.1.0_reveal_kjosgt6zxardtyodkirbomq3kq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
