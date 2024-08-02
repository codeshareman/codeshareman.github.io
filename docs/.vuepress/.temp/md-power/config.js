import { defineClientConfig } from 'vuepress/client'
import '@internal/md-power/icons.css'
import Bilibili from '/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.80_typescript@5.5.3_vuepress@2.0.0-rc.14_@vuepress+bundler-_hsa6frg2i3zoggwk2ouvyzeafy/node_modules/vuepress-plugin-md-power/lib/client/components/Bilibili.vue'
import CanIUse from '/Users/codeshareman/Documents/ME/GitHub/learn-algo/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.80_typescript@5.5.3_vuepress@2.0.0-rc.14_@vuepress+bundler-_hsa6frg2i3zoggwk2ouvyzeafy/node_modules/vuepress-plugin-md-power/lib/client/components/CanIUse.vue'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('VideoBilibili', Bilibili)
    app.component('CanIUseViewer', CanIUse)
  }
})
