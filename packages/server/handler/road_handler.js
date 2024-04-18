
const roadService = require('../service/road_service');

class RoadHandler {

    /**
     * 创建一条记录
     */
    static async createOne(req, res) {
        let params = req.body;
        let data = await roadService.createOne(params);
        console.log(data)
        return res.json({code: 0 , data: {id: data.id}});
    }
     /**
     * 查询所有
     */
    static async selectAll(req, res) {
        let data = await roadService.selectAll();
        console.log(data)
        return res.json({code: 0 , data});
    }
    /**
     * 根据ID查询
     */
    static async selectById(req, res) {
        let params = req.query;
        let data = await roadService.selectById(params);
        console.log(data)
        return res.json({code: 0 , data});
    }

    /**
     * 更新
     */
    static async updateOne(req, res) {
        let params = req.body;
        let data = await roadService.updateOne(params);
        console.log(data)
        return res.json({code: 0 , data});
    }
    /**
     * 删除
     */
    static async removeOne(req, res) {
        let params = req.query;
        let data = await roadService.removeOne(params);
        console.log(data)
        return res.json({code: 0 , data});
    }

}
module.exports = RoadHandler;
