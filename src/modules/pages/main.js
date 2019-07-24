import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import 'assets/pages/css/main.scss';

Vue.use(VueRouter);

Vue.prototype.$http = window.$http;
Vue.prototype.$bus = new Vue();
const router = new VueRouter({
    mode: 'history',
    routes: routes.routes
});

new Vue({
    router
}).$mount(`#app-wrapper`);