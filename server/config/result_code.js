module.exports = {
    //业务相关错误定义
    BUSINESS: {
        PARAMS: {
            errcode: 121001,
            errmsg: '请求参数出错'
        },
        AUTHERROR: {
            errcode: 123002,
            errmsg: '手机号已绑定其他微信'
        },
        NO_SYS_AUTH: {
            errcode: 123003,
            errmsg: '无系统权限'
        },
        MOBILE_VERIFY: {
            errcode: 123004,
            errmsg: '验证码错误'
        },
    },
    PermissionCode: {
        DENY: 124001,
        DENY_OTHER_DEVICE: 124002,
        DENY_HOSPITAL: 124003,
        PERMISSION_DENY:124317,
    },
    LoginStatusCode:{
        NOT_LOGIN:124060,//未登录
        LOGIN_ERROR:124061,//登录异常
        KICKED:101,//被踢了
        NO_PERMISSION:124062,//没有权限
    },
    /**
     * 数据库错误
     */
    DB: {
        NOT_FOUND: {
            errcode: 124004,
            errmsg: '没有找到数据'
        },
        CREATE_POOL_ERROR: {
            errcode: 124005,
            errmsg: '创建数据库连接池失败'
        },
        UPDATE_ERROR: {
            errcode: 124006,
            errmsg: '更新数据失败'
        }
    },
    SYSTEM: {
        DB_DATA_ERROR: {
            errcode: 126000,
            errmsg: '数据错误'
        },
        HTTP_ERROR: {
            errcode: 126001,
            errmsg: '网络请求失败'
        }
    },

}