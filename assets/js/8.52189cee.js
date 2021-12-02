(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{394:function(e,s,t){"use strict";t.r(s);var n=t(54),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[e._v("#")]),e._v(" Github Pages")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("新建仓库"),t("code",[e._v("blog")])])]),e._v(" "),t("li",[t("p",[e._v("设置GithubPages源")]),e._v(" "),t("p",[t("code",[e._v("Settings->Pages->Source")]),e._v(" 选择源和目录，如"),t("code",[e._v("gh-pages")]),e._v(" 分支，根目录/root ，"),t("code",[e._v("Save")]),e._v("。 "),t("strong",[e._v("Theme Chooser")]),e._v("可选。")]),e._v(" "),t("p",[e._v("刷新一下就可以看到GithubPages地址了 ：")]),e._v(" "),t("p",[e._v("Your site is published at https://threelambs.github.io/blog/")])]),e._v(" "),t("li",[t("p",[e._v("设置"),t("code",[e._v("Personal access tokens")]),e._v(".  注意复制一下，放到Secrets token")])]),e._v(" "),t("li",[t("p",[e._v("添加secrets  "),t("code",[e._v("Settings->Secrets-> Actions secrets")])]),e._v(" "),t("p",[e._v("添加token，名称（随意填），如："),t("code",[e._v("ACCESS_TOKEN")]),e._v("，值：粘贴之前复制的"),t("code",[e._v("Personal access tokens")]),e._v("。")]),e._v(" "),t("p",[e._v("使用 格式 "),t("code",[e._v("secrets.名称")]),e._v("  secrets."),t("code",[e._v("ACCESS_TOKEN")])])]),e._v(" "),t("li",[t("p",[e._v("使用"),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),t("OutboundLink")],1),e._v("创建博客，请参考官方文档")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# package.json\n{\n  "devDependencies": {\n    "vuepress": "^1.8.2"\n  },\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#.vuepress/config.js \nmodule.exports = {\n    title: '三只小羊',\n    description: 'test blogs',\n    themeConfig: {\n        nav: [\n          { text: 'Home', link: '/' }, \n          { text: 'Github Pages 教程', link: '/github/GithubPageTutor' },\n        ]\n      },\n     base:'/blog/', \n  }\n")])])]),t("blockquote",[t("p",[e._v("注意"),t("code",[e._v("设置base路径")]),e._v(": "),t("code",[e._v("/blog/")])]),e._v(" "),t("p",[e._v("我的地址为https://threelambs.github.io/blog/  根目录"),t("code",[e._v("/")]),e._v("指向https://threelambs.github.io")]),e._v(" "),t("p",[e._v("如果你的Github Pages目录是根目录，可以不用设置")])]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("创建工作流")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# ci.yml\nname: GitHub Actions Build and Deploy \non:\n  push:\n    branches:\n      - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2  #使用此action签出当前仓库代码\n        with:\n          persist-credentials: false\n\n      - name: Install and Build 🔧 # 使用yarn安装依赖&编译 （命令参考VuePress文档）\n        run: |\n          yarn install\n          yarn docs:build\n  \n      - name: Deploy    #部署到gh-pages分支\n        uses: JamesIves/github-pages-deploy-action@4.1.7\n        with: \n          token: ${{ secrets.ACCESS_TOKEN }} \n          folder: docs/.vuepress/dist  #源目录 （yarn docs:build编译的目标文件夹）\n          branch: gh-pages # 部署目标分支\n")])])]),t("blockquote",[t("p",[t("code",[e._v("branch: gh-pages")]),e._v("  和上面第二步配置对应")]),e._v(" "),t("p",[e._v("token: ${{ secrets."),t("code",[e._v("ACCESS_TOKEN")]),e._v("}}")])]),e._v(" "),t("p",[e._v("提交代码，等待工作流自动编译部署，访问：https://threelambs.github.io/blog/")])])}),[],!1,null,null,null);s.default=a.exports}}]);