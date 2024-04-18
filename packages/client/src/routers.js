/**
 * @description 客户端路由
 * @author uct8086
 */
import homePanel from './modules/home/index.vue';
import detailPanel from './modules/detail/index.vue';
import pageNotFound from './components/pageNotFound.vue';
// router.js
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    { path: `/`, component: homePanel },
    {
        path: `/detail`,
        component: detailPanel,
    },
    { path: '/:pathMatch(.*)*', component: pageNotFound }
];

// 创建router实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

