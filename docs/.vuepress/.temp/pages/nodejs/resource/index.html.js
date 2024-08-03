import comp from "/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/nodejs/resource/index.html.vue"
const data = JSON.parse("{\"path\":\"/nodejs/resource/\",\"title\":\"resource\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"resource\",\"author\":\"Teemo.zzz\",\"createTime\":\"2024/08/03 13:45:42\",\"permalink\":\"/nodejs/resource/\",\"outline\":[1,2],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"notes/nodejs/resource.md\"}")
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
