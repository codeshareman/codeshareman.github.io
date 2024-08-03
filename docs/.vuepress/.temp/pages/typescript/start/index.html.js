import comp from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/typescript/start/index.html.vue"
const data = JSON.parse("{\"path\":\"/typescript/start/\",\"title\":\"file\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"file\",\"author\":\"Teemo.zzz\",\"createTime\":\"2024/08/02 21:53:33\",\"permalink\":\"/typescript/start/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"notes/node.js/file.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10000,\"name\":\"notes\"},{\"id\":\"056523\",\"sort\":10001,\"name\":\"node.js\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
