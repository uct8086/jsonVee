'use strict';

const RoadHandler = require('../handler/road_handler');
const TestHandler = require('../handler/test_handler');
const { check } = require('express-validator');

module.exports = {
    routers: [
        {
            path: "/api/detail/getdetail",
            handler: TestHandler.getDetail,
            method: 'post',
            params: []
        },
        {
            path: "/api/detail/createOne",
            handler: RoadHandler.createOne,
            method: 'post',
            params: [
                check('title').not().isEmpty() ,
                check('desc').not().isEmpty(),
            ]
        },
        {
            path: '/api/detail/selectAll',
            handler: RoadHandler.selectAll,
            method: "get",
            params: []
        },
        {
            path: '/api/detail/selectById',
            handler: RoadHandler.selectById,
            method: "get",
            params: [
                check('id').not().isEmpty()
            ]
        },
        {
            path: '/api/detail/updateOne',
            handler: RoadHandler.updateOne,
            method: "post",
            params: [
                check('id').not().isEmpty(),
                check('title').not().isEmpty() ,
                check('desc').not().isEmpty(),
            ]
        },
        {
            path: '/api/detail/removeOne',
            handler: RoadHandler.removeOne,
            method: "get",
            params: [
                check('id').not().isEmpty(),
            ]
        },

    ]
};
