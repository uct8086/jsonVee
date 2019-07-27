'use strict';

const SysHandler = require('../handler/sys_handler');
const { check } = require('express-validator/check');

module.exports = {
    routers: [
        {
            path: "/detail/getdetail",
            handler: SysHandler.getDetail,
            method: 'post',
            params: [
                // check('id').isInt().not().isEmpty() ,
                // check('redo').optional() ,
                // check('studyType').not().isEmpty() ,
            ]
        },
        // {
        //     path: '/detail/test',
        //     handler: SysStudy.test,
        //     method: "get",
        //     params: []
        // }

    ]
};
