export const sidebar = {"/en/":{},"/":{"/nodejs/":{"items":[{"text":"Get Started","icon":"mdi:nodejs","collapsed":false,"items":[{"text":"Node.js是什么?","target":"../notes/nodejs/intro.md","link":"/nodejs/what/"},{"text":"为什么要使用Node.js","target":"../notes/nodejs/file.md","link":"/nodejs/why/"},{"text":"学习资源","target":"../notes/nodejs/resource.md","link":"/nodejs/resource/"}]}],"prefix":"/notes/nodejs/"}},"__auto__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
