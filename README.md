# jsonVee
An efficient front-end integration framework，Based on Node.js, Vue, Webpack.

- clone项目到本地之后，到主目录执行`npm install`安装npm依赖

### 运行与调试

1. 基本运行项目 
```bash
 npm run start
```
2. 发布
```bash
npm run build
```
此时会执行webpack的构建，目标文件会放到dist目录

## 目录

--- `/project`   
-------- `/build`   // 打包相关逻辑，一般不用动   
-------- `/config`  // 环境配置文件，本地环境和生产环境   
-------- `/dist `   // 生产环境打包完后，就可以把这个目录发布到服务器   
-------- `/src `       
-------------- `/assets `   // 资源文件目录，存放图片、样式、字体等   
-------------- `/common `   // 公共脚本，存放一些工具函数，工具类   
-------------- `/components `   // 存放抽象后的公司Vue组件   
-------------- `/modules `   // 主要页面逻辑以模块的形式分开   
-------------------- `/pages `   // 一个模块名（可以支持多个模块，类似一个小项目）   
-------------------------- `/home `   // 页面，一个页面一个目录   
-------------------------- `/detail `   // 页面，一个页面一个目录    
-------------------------- `/main.js `   // 项目中的主函数   
-------------------------- `/routers.js `   // 项目路由  

## 关于

[Vue.js 文档](https://vuejs.bootcss.com/)   

[Node.js 文档](http://nodejs.cn/)    

[Express 框架学习](https://github.com/expressjs/express)


## 编辑不易，赏个水钱


<img alt="Follow me on Twitter" src="https://raw.githubusercontent.com/uct8086/jsonVee/master/afb.jpg" height="150" width="150"/>