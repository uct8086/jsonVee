/**
 * Axios HttpHelper created by uncletang on 2017-12-29
 */
import axios from 'axios';
const createAxiosRequest = Symbol('createAxiosRequest');
const axiosRequest = Symbol('axiosRequest');

axios.interceptors.request.use(function (config) {//请求拦截
    if(window.ActiveXObject || 'ActiveXObject' in window){//兼容IE下加哈西值，每次都重新請求
        let params = config.params || {};
        params.hash = Math.random(15);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {//响应拦截
    /* //未登录就跳转到登录页面
    if( (Object.is(response.config.url,url.GET_USERINFO) || Object.is(response.config.url,url.GET_HEADER_DOM))
    && Object.is(response.data.code,constParams.PermissionCode.DENY) ){
        window.location.href = url.LOGOUT;
    } */
    return response;
}, function (error) {
    return Promise.reject(error);
});

const defaultOpts = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'content-type': 'application/json',
    },
    timeout: 60 * 1000,
    withCredentials: true,
}; 

export default class HttpHelper{
    
    static axiosGet(url,params = {},timeout,callback){
        return this[createAxiosRequest]({ method: 'get', url, params, timeout, callback });
    }


    static axiosPost(url,data = {},timeout,callback){
        return this[createAxiosRequest]({ method: 'post', url, data, timeout, callback });
    }

    static [createAxiosRequest](opts) {
        if(!opts.timeout || (typeof opts.timeout !== 'number')){
            delete opts.timeout;
        }
        const callback = opts.callback;
        delete opts.callback;
        opts = Object.assign({}, defaultOpts, opts);
        if(typeof callback === 'function'){
            return this[axiosRequest](opts).then(callback());
        }else{
            return this[axiosRequest](opts);
        }
    }

    static [axiosRequest](opts){//私有方法

        return new Promise((resolve,reject) => {

            axios(opts).then(function (response) {
                if(response.data.code === 0){
                    return resolve(response.data.data);
                } else{
                    return resolve('pageNotFound');
                }
            })
                .catch(function (error) {
                    if (error.response) {//发出了请求并且服务响应了状态码
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                        return reject(`发出了请求并且服务响应了状态码 : ${error.response.status}`);
                    } else if (error.request) {//发出了请求但是没有接收到响应
                        // console.log(error.request);
                        return reject(`发出了请求但是没有接收到响应 : ${error.request}`);
                    } else {//在发送请求的时候出现了一些错误
                        // console.log('Error', error.message);
                        return reject(`其他异常：${error.message}`);
                    }
                });
        });
    }
}