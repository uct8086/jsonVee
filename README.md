# jsonVee

一个高效的前后端集成框架，基于Vite、Vue、Webpack和Node.js。一键启动，开箱即用。

An efficient front-end and back-end integration framework based on Vite, Vue, Webpack, and Node.js. One click start, ready to use out of the box.

## 更新 

- 2024-04-18 `重大更新`

1. 采用monoRepo框架来重构
2. 前端在 `packages/client` 中，并采用Vite重构，更快，依赖更简单
3. 服务端在 `packages/server` 中，升级了express，更高效，更易维护

- 2022-05-27

1. 添加TypeScript支持，并新建typescript分支

- 2022-04-06

1. 添加element-plus支持
2. 修复已知Bug

- 2021-11-17

1. 升级Webpack，从Webpack4升级到最新的Webpack5
2. 调整打包逻辑，移除老代码
3. 更新依赖包，到最新版本
4. 切换到Vue3.0，欢迎大家尝鲜。
## 运行与调试

1. 安装依赖(也可以安装 lerna 来管理多个包，这里为了方便，直接安装所有包的依赖)

```bash
# 在项目根目录运行

pnpm install
```
2. 安装MongoDB

- MongoDB 预编译二进制包下载地址：https://www.mongodb.com/download-center/community

3. 基本运行项目 

    3.0 一次性启动前后端
    ```bash
    # 在项目根目录运行

    pnpm start

    ```

    3.1 启动服务端
    ```bash
    cd packages/server

    npm run server
    ```
    3.2 启动前端
    ```bash
    cd packages/client

    npm run start
    ```
4. 发布
```bash
cd packages/client

npm run build
```
此时会执行webpack的构建，目标文件会放到public目录

## 目录

--- `/project`   
-------- `/packages`   // monorepo包管理  
-------------- `/client `       
-------------------- `/assets `   // 资源文件目录，存放图片、样式、字体等   
-------------------- `/common `   // 公共脚本，存放一些工具函数，工具类   
-------------------- `/components `   // 存放抽象后的公司Vue组件   
-------------------- `/modules `   // 主要页面逻辑以模块的形式分开   
-------------------------------- `/home `   // 页面，一个页面一个目录   
-------------------------------- `/detail `   // 页面，一个页面一个目录  
-------------------- `/main.js `   // 项目中的主函数   
-------------------- `/routers.js `   // 项目路由    
-------------- `/server `       
-------------------- `/config `   // 服务端的一些配置文件   
-------------------- `/handler `   // 处理前端的请求   
-------------------- `/middleware `   // 中间件   
-------------------- `/mock `   // 本地Mock数据   
-------------------- `/router `   // 路由  
-------------------- `/service `   // 对Handler的进一步封装    


## 关于

[Vue 3.x 文档](https://v3.cn.vuejs.org/)

[Node.js 文档](http://nodejs.cn/)    

[Express 框架学习](https://github.com/expressjs/express)


## 注意事项

因为是新的版本，所以要求Node.js更新到版本20及以上。可以用Nvm来进行Node.js多版本管理。