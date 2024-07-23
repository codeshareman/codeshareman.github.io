export const themeData = {"locales":{"/en/":{"selectLanguageName":"English","selectLanguageText":"Languages","appearanceText":"Appearance","lightModeSwitchTitle":"Switch to light theme","darkModeSwitchTitle":"Switch to dark theme","editLinkText":"Edit this page","contributorsText":"Contributors","lastUpdated":{"text":"Last Updated"},"encryptButtonText":"Confirm","encryptPlaceholder":"Enter password","encryptGlobalText":"Only password can access this site","encryptPageText":"Only password can access this page","footer":{"message":"","copyright":"Copyright © 2024-present Teemo.zzz"},"profile":{"name":"Teemo.zzz","description":"a handsome boy","circle":true},"navbar":[{"text":"Home","link":"/en/"},{"text":"Blog","link":"/en/blog/"},{"text":"Tags","link":"/en/blog/tags/"},{"text":"Archives","link":"/en/blog/archives/"}]},"/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdated":{"text":"最后更新于"},"notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":{"message":"","copyright":"Copyright © 2024-present Teemo.zzz"},"profile":{"name":"Teemo.zzz","description":"a handsome boy","circle":true},"navbar":[{"text":"学习笔记","icon":"icon-park-outline:guide-board","link":"/notes/","activeMatch":"^/guide/"},{"text":"博客","link":"/blog/","icon":"material-symbols:article-outline","activeMatch":"^/(blog|article)/"}]}},"appearance":true,"blog":{"link":"/blog/","pagination":{"perPage":15},"tags":true,"archives":true,"categories":true,"tagsLink":"/blog/tags/","archivesLink":"/blog/archives/","categoriesLink":"/blog/categories/"},"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"editLink":true,"contributors":true,"footer":{"message":"","copyright":"Copyright © 2024-present Teemo.zzz"},"profile":{"name":"Teemo.zzz","description":"a handsome boy","circle":true}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
