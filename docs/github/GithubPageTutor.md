 
# Github Pages

1. 新建仓库``blog``

2. 设置GithubPages源

   ``Settings->Pages->Source`` 选择源和目录，如``gh-pages`` 分支，根目录/root ，``Save``。 **Theme Chooser**可选。

   刷新一下就可以看到GithubPages地址了 ：

    Your site is published at https://threelambs.github.io/blog/

3. 设置`Personal access tokens`.  注意复制一下，放到Secrets token

4. 添加secrets  `Settings->Secrets-> Actions secrets ` 

   添加token，名称（随意填），如：`ACCESS_TOKEN`，值：粘贴之前复制的`Personal access tokens`。

   使用 格式 `secrets.名称`  secrets.`ACCESS_TOKEN`

5. 使用[VuePress](https://vuepress.vuejs.org/zh/)创建博客，请参考官方文档

```
# package.json
{
  "devDependencies": {
    "vuepress": "^1.8.2"
  },
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

```
#.vuepress/config.js 
module.exports = {
    title: '三只小羊',
    description: 'test blogs',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' }, 
          { text: 'Github Pages 教程', link: '/github/GithubPageTutor' },
        ]
      },
     base:'/blog/', 
  }
```

> 注意`设置base路径`: `/blog/`
>
> 我的地址为https://threelambs.github.io/blog/  根目录`/`指向https://threelambs.github.io 
>
> 如果你的Github Pages目录是根目录，可以不用设置

6. 创建工作流

```
# ci.yml
name: GitHub Actions Build and Deploy 
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2  #使用此action签出当前仓库代码
        with:
          persist-credentials: false

      - name: Install and Build 🔧 # 使用yarn安装依赖&编译 （命令参考VuePress文档）
        run: |
          yarn install
          yarn docs:build
  
      - name: Deploy    #部署到gh-pages分支
        uses: JamesIves/github-pages-deploy-action@4.1.7
        with: 
          token: ${{ secrets.ACCESS_TOKEN }} 
          folder: docs/.vuepress/dist  #源目录 （yarn docs:build编译的目标文件夹）
          branch: gh-pages # 部署目标分支
```

> ``branch: gh-pages ``  和上面第二步配置对应
>
> token: ${{ secrets.``ACCESS_TOKEN ``}}   

提交代码，等待工作流自动编译部署，访问：https://threelambs.github.io/blog/

