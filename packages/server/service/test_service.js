class TestService {

    static getDetail() {
        // let requestId = uuid();
        let data = require("../mock/userinfo.json");
        return data;
    }
   
}
module.exports = TestService;
