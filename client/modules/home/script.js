/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import HttpHelper from "common/utils/axios_helper.js";
export default {
    components: { // 依赖组件
       
    },
    data() { // 本页面数据
        return {
            id: "5d42ac3d9c149c38248c8199",
        };
    },
    mounted() { 
        
    },
    methods: { // 这里写本页面自定义方法
        async getDetail() {
            let data = await HttpHelper.axiosPost("/detail/getdetail");
            // console.log(data.user.name);
        },
        async createOne() {
            let data = await HttpHelper.axiosPost("/detail/createOne",{title:"test title", desc: "this is test desc"});
            this.id = data.id;
            // console.log(`createOne ${JSON.stringify(data)}`);
        },
        async selectById() {
            let data = await HttpHelper.axiosGet("/detail/selectById",{id: this.id});
            // console.log(`selectById ${JSON.stringify(data)}`);
        },
        async updateOne() {
            let data = await HttpHelper.axiosPost("/detail/updateOne",{id: this.id, title:"kwkw", desc: "change desc"});
            // console.log(`updateOne ${JSON.stringify(data)}`);
        },
        async removeOne() {
            // eslint-disable-next-line no-unused-vars
            let data = await HttpHelper.axiosGet("/detail/removeOne",{id: this.id});
            // console.log(`removeOne ${JSON.stringify(data)}`);
        },
    },
    created() { // 生命周期中，组件被创建后调用
        // this.getDetail();
        let d3test = d3.select('body');
        // console.log(d3test);
        // this.createOne();
        this.selectById();
        // this.updateOne();
        // this.removeOne();
    },
};