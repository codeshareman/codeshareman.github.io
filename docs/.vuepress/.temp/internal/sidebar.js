export const sidebar = {"/en/":{},"/":{"/typescript/":{"items":[{"text":"简介","icon":"mdi:language-typescript","items":["foo","file"]}],"prefix":"/notes/typescript/"},"/rust/":{"items":[{"text":"简介","items":["foo"]}],"prefix":"/notes/rust/"}},"__auto__":{}}

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
