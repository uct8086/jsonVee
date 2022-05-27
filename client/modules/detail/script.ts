// import HttpHelper from "common/utils/axios_helper";
import { reactive, onMounted } from 'vue';
import * as d3 from 'd3';

export default {
    setup() {
        const data = reactive({
            id: "5d42ac3d9c149c38248c8199"
        });
        const selectById = async () => {
            // await HttpHelper.axiosGet("/detail/selectById", {id: data.id});
        };

        onMounted(() => {
            const res = d3.select('body');
            console.log(res);
            selectById();
        });

        return {
            data,
            selectById,
        };
    }
};