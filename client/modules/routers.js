/**
 * @description 客户端路由
 * @author uct8086
 */
import homePanel from './home/index.vue';
import threePanel from './threeJs/index.vue';
import pageNotFound from 'components/pageNotFound.vue';

const routes = [
    { path: `/`, component: homePanel },
    {
        path: `/threejs`,
        component: threePanel,
    },
    { path: '/:pathMatch(.*)*', component: pageNotFound }
];

export default routes;