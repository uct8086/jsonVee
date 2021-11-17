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
        async selectById() {
            await HttpHelper.axiosGet("/detail/selectById",{id: this.id});
            // console.log(`selectById ${JSON.stringify(data)}`);
        },
    },
    created() { // 生命周期中，组件被创建后调用
        // this.getDetail();
        d3.select('body');
        // console.log(d3test);
        // this.createOne();
        this.selectById();
        // this.updateOne();
        // this.removeOne();
    },
};