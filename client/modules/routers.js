/**
 * @description 客户端路由
 * @author tang
 */
import homePanel from './home/index.vue';
import detailPanel from './detail/index.vue';
import pageNotFound from 'components/pageNotFound.vue';

const routes = {
    routes: [
        { path: `/`, component: homePanel },
        {
            path: `/detail`,
            component: detailPanel,
        },
        { path: '*', component: pageNotFound }
    ]
};

export default routes;