/**
 * 路由封装，基于 express-validator 组件 https://github.com/ctavan/express-validator
 * 其中 express-validator 中封装了validator.js （https://github.com/chriso/validator.js）实现了里面的所有方法
 * 组件中一般使用 Check 来校验请求参数，如：
 * 
 * check('page').isInt().not().isEmpty() , 
 * 
 * 这一句校验了Page参数，是否是整形、非空（not()方法定义的是下一个调用的取反，也就是isEmpty()的取反，就是非空）
 * 
 * 在Express的回调中用 validationResult 来捕获参数校验中出现的错误，如：
 * 
 *  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: `参数校验不通过：${JSON.stringify(errors.mapped())}` });
    }
 * 
 * 通过validationResult(req)取到校验的结果，如果没有错，就是 errors.isEmpty() 为True
 * 
 * sanitize也是用于校验请求参数，与Check不同的是，它是把相应的入参转换成合格的值，如：
 * 
 * sanitize('keyword').escape()
 * 
 * 这一句校验了关键字的入参，替换 <, >, &, ', " 和 / 为 HTML entities
 * 
 * 除此之外，还可以自定义参数校验，如:
 * 
 * check('email').custom(value => {
      return findUserByEmail(value).then(user => {
        throw new Error('this email is already in use');
      })
    }),
 * 
 * 更多详细的Api请参阅上述Git地址。
 * uct 2018-01-04
 * 
 * **/
'use strict';
const fs = require("fs");
const path = require("path");
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const expressValidator = require('express-validator');


class BaseRouter{

    /**
     * 拦截请求添加参数校验
     * @param {*} app Express上下文
     */
    static interceptorHttp(app){

        const routers = BaseRouter._getRouters();

        app.use(expressValidator({}));

        routers.forEach((item,index)=>{
            BaseRouter._dispatchHttp(app,item);
        })
    }

    /**
     * 分发请求和参数校验规则
     * @param {*} app Express上下文
     * @param {*} config 路由详情
     */
    static _dispatchHttp(app,config){
        let method = config.method || "get";
        app[method](config.path, config.params, (req, res, next) => {
                //参数校验，如果有异常就抛出。
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({ errors: `参数校验不通过：${JSON.stringify(errors.mapped())}` });
                }
                if (!config.handler || typeof config.handler !== "function") {
                    throw new Error("path: " + config.path + " method: " + config.method || "GET " + " handler must be function");
                }

                /* for (const [key, value] of Object.entries(req.query)) {//解码参数
                    if(typeof req.query[key] === 'string' ){
                        req.query[key] = BaseRouter._doHtmlUnEncode(value);
                    }
                } */
              
                config.handler(req, res, next);

          });
    }

    static _doHtmlUnEncode(sStr){
        if (sStr == '' || sStr == null || sStr == 'null') {
            return sStr;
        } else {
            sStr = sStr.toString();
        }
        sStr = sStr.replace(/&amp;/g,"&");
        sStr = sStr.replace(/&gt;/g,">");
        sStr = sStr.replace(/&lt;/g,"<");
        sStr = sStr.replace(/&quot;/g,'"');
        sStr = sStr.replace(/&#39;/g,"'");
        return sStr;
    }

    /**
     * 得到当前目录下的所有路由
     */
    static _getRouters(){
        let routers = [];
        const routerPath = "./";
        fs.readdirSync(path.join(__dirname, routerPath)).filter(file => file.indexOf(".") !== 0).forEach(file => {
            let router = require(path.join(__dirname, routerPath, file));

            if (router && router.routers && file !== 'index.js') {
                let env = process.env.NODE_ENV;
                if (env !== 'local') {
                    if (file != 'local_router.js') {
                        routers = routers.concat(router.routers);
                    }
                } else {
                    routers = routers.concat(router.routers);
                }

            }

        });
        return routers;
    }

   
}

module.exports = BaseRouter;