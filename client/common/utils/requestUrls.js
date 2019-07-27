/**
 * Created by uct
 * 请求地址
 */
'use strict';
const WebserverPrefix = '/webserver';
const URL = {
    LOGOUT: `${WebserverPrefix}/logout`,//登出
    GET_USERINFO: `${WebserverPrefix}/userinfo`,
    GET_HEADER_DOM:`${WebserverPrefix}/show/header`,//得到头部的Dom片段
    GET_UPLOAD_CONFIG:`${WebserverPrefix}/uploadconfig`,//得到手动上传配置信息
};

export default URL;
