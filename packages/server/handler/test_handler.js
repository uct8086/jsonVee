
const testService = require('../service/test_service.js');

class TestHandler {
    /**
     * 获取详细信息
     */
    static async getDetail(req, res) {
        try{
            let data =  await testService.getDetail();
            res.json(data);
        } catch (e) {
            res.end("error ")
        }
       
    }

}
module.exports = TestHandler;
