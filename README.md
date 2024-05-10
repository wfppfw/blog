## Setup
###1.部署 
####1.1 打包 yarn run gergen
####1.2 
    ```
    cd .output/public
    open
    ```

# pnpm

pnpm dlx nuxi init demo
pnpm install --shamefully-hoist

````

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
pnpm dev -o
````

## 配置

1.集成 eslint

```bash
pnpm i eslint eslint-plugin-vue --save-dev
pnpm install @typescript-eslint/parser --save-dev
pnpm install @typescript-eslint/eslint-plugin --save-dev
```

创建配置文件： .eslintrc.js 或 .eslintrc.json
创建忽略文件：.eslintignore

2.集成 prettier

```bash
pnpm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

创建配置文件： prettier.config.js 或 .prettierrc.js

### 1.

新建 scr 目录
app.vue 文件移入到 src 目录下
同时修改配置文件 nuxt.config.ts：

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
});
```

###

Nuxt 使用两个目录来处理像 stylesheets, fonts 或 images 这样的资产。
public/目录内容原样提供给服务器根目录。 （直接使用 url） 或者改用 static 文件夹
assets/目录按惯例包含你想要构建工具(Vite 或 webpack)处理的每个资产。

注册在 plugins 下顶层 ts，无需在 nuxt.config.ts 下注册

### 小玩意

1.动态标签 title 2.鼠标 cursor 样式 3.个性化 404 页面 4.自定义右键菜单（移动端长按显示,滚动页面时定位）：切换主题 ,刷新页面 5.双击特效：彩色小球 6.页面过渡动画 loding 7.字体库 8.自定义网页滚动条(自定义右键菜单显示禁止滚动)，滚动条适应主题模式切换 9.自定义顶部进度条 10.回到顶部按钮(样式 cat) 11.自定义响应式 nav 12.live2d 猫猫缓存(nginx 取消 no-cache) localStroage 13.动态设置 title,keyword description 等 seo 关键词（文章标题，内容简介）14.blog 编辑器，写文章编辑器 codemirror，预览文章 marked 解析 md，权限发布 ,pdf 导出(fs,path，安装读取 md)，v-html 的 xss 预防 15 页面 切换动画效果 16.常见文件(目录)操作增删改查（权限控制）;17.自定义修改简单评论系统 18.顶部 loading 加载进度条<NuxtLoadingIndicator />,
Aniya 动画加载 19.顶部毛玻璃效果模糊背景 20.模态框显示菜单内容,21.自定义组件 tooltip,Message 20.about about 页面man,nes.css

###

切换主题 @nuxt/color-mode
内容管理@nuxt/content
聊天 @huntersofbook/chatwoot-nuxt

## 以下 hooks 为内部集成的 API，不需要手动 import 导入即可使用；

```js
//读取使用nuxt.config.js配置
const runtimeConfig = useRuntimeConfig();
//读取appconfig.js
const appConfig = useAppConfig();
```

nuxt 引入 arco-design:

```bash

import '@arco-design/web-vue/dist/arco.css';
```

### css

pnpm install -D tailwindcss @types/tailwindcss

h3 的 hook 调用

### 简易 json 编辑器实现

1. 检验是否为有效 json (JSON.parse 方法是否成功执行)
2. json 字符转树形，树形转普通字符串
