export const redirects = JSON.parse("{\"/get-started.html\":\"/article/y6xmens9/\",\"/notes/nodejs/resource.html\":\"/nodejs/resource/\",\"/notes/nodejs/what.html\":\"/nodejs/what/\",\"/notes/nodejs/why.html\":\"/nodejs/why/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/y6xmens9/", { loader: () => import(/* webpackChunkName: "article_y6xmens9_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/article/y6xmens9/index.html.js"), meta: {"title":"文章标题"} }],
  ["/notes/", { loader: () => import(/* webpackChunkName: "notes_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/notes/index.html.js"), meta: {"title":"Gallery"} }],
  ["/nodejs/resource/", { loader: () => import(/* webpackChunkName: "nodejs_resource_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/nodejs/resource/index.html.js"), meta: {"title":"resource"} }],
  ["/nodejs/what/", { loader: () => import(/* webpackChunkName: "nodejs_what_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/nodejs/what/index.html.js"), meta: {"title":"Node.js是什么?"} }],
  ["/nodejs/why/", { loader: () => import(/* webpackChunkName: "nodejs_why_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/nodejs/why/index.html.js"), meta: {"title":"为什么要使用Node.js"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/en/blog/", { loader: () => import(/* webpackChunkName: "en_blog_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/en/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/en/blog/tags/", { loader: () => import(/* webpackChunkName: "en_blog_tags_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/en/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/en/blog/archives/", { loader: () => import(/* webpackChunkName: "en_blog_archives_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/en/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/en/blog/categories/", { loader: () => import(/* webpackChunkName: "en_blog_categories_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/en/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/codeshareman/Documents/ME/GitHub/learn-algo/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
