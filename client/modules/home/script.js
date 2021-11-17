import HttpHelper from "common/utils/axios_helper.js";
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const data = reactive({
            id: "5d42ac3d9c149c38248c8199"
        });
        const router = useRouter();
        const selectById = async () => {
            await HttpHelper.axiosGet("/detail/selectById",{id: data.id});
        };

        onMounted(() => {
            d3.select('body');
            selectById();
        });

        const toDetail = () => {
            router.push('/detail');
        };

        return {
            data,
            selectById,
            toDetail
        };
    }
};