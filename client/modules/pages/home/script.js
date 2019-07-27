import HttpHelper from "common/utils/axios_helper.js";

export default {
    components: { // 依赖组件
       
    },
    data() { // 本页面数据
        return {
           
        };
    },
    created() { // 生命周期中，组件被创建后调用
        this.getDetail();
    },
    mounted() { 
        
    },
    methods: { // 这里写本页面自定义方法
        async getDetail() {
            let data = await HttpHelper.axiosPost("/detail/getdetail");
            console.log(data.user.name);

        }
    }
};