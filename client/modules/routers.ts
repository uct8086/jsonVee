/**
 * @description 客户端路由
 * @author uct8086
 */
import homePanel from 'modules/home/index.vue';
import detailPanel from 'modules/detail/index.vue';
import pageNotFound from 'components/pageNotFound.vue';

const routes = [
    { path: `/`, component: homePanel },
    {
        path: `/detail`,
        component: detailPanel,
    },
    { path: '/:pathMatch(.*)*', component: pageNotFound }
];

export default routes;