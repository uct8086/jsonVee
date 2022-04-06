# jsonVee
An efficient front-end integration framework，Based on Node.js, Vue, Webpack.

- clone项目到本地之后，到主目录执行`npm install`安装npm依赖


## 更新 

- 2022-04-06

1. 添加element-plus支持
2. 修复已知Bug

- 2021-11-17

1. 升级Webpack，从Webpack4升级到最新的Webpack5
2. 调整打包逻辑，移除老代码
3. 更新依赖包，到最新版本
4. 切换到Vue3.0，欢迎大家尝鲜。
### 运行与调试

1. 安装MongoDB

- MongoDB 预编译二进制包下载地址：https://www.mongodb.com/download-center/community

2. 基本运行项目 

    1.1 启动服务端
    ```bash
    npm run server
    ```
    1.2 启动前端
    ```bash
    npm run start
    ```
3. 发布
```bash
npm run build
```
此时会执行webpack的构建，目标文件会放到public目录

## 目录

--- `/project`   
-------- `/build`   // 打包相关逻辑，一般不用动   
-------- `/config`  // 环境配置文件，本地环境和生产环境   
-------- `/public `   // 生产环境打包完后，就可以把这个目录发布到服务器   
-------- `/client `       
-------------- `/assets `   // 资源文件目录，存放图片、样式、字体等   
-------------- `/common `   // 公共脚本，存放一些工具函数，工具类   
-------------- `/components `   // 存放抽象后的公司Vue组件   
-------------- `/modules `   // 主要页面逻辑以模块的形式分开   
-------------------------- `/home `   // 页面，一个页面一个目录   
-------------------------- `/detail `   // 页面，一个页面一个目录    
-------------------------- `/main.js `   // 项目中的主函数   
-------------------------- `/routers.js `   // 项目路由  
-------- `/server `       
-------------- `/config `   // 服务端的一些配置文件   
-------------- `/handler `   // 处理前端的请求   
-------------- `/middleware `   // 中间件   
-------------- `/mock `   // 本地Mock数据   
-------------- `/router `   // 路由  
-------------- `/service `   // 对Handler的进一步封装    


## 关于

[Vue 2.x 文档](https://vuejs.bootcss.com/)   

[Vue 3.x 文档](https://v3.cn.vuejs.org/)

[Node.js 文档](http://nodejs.cn/)    

[Express 框架学习](https://github.com/expressjs/express)


## 注意事项

因为是新的版本，所以要求Node.js更新到版本16及以上。可以用Nvm来进行Node.js多版本管理。