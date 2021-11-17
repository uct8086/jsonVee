import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import * as d3 from "d3";
import 'assets/css/main.less';

Vue.use(VueRouter);

window.d3 = d3;

Vue.prototype.$http = window.$http;
Vue.prototype.$bus = new Vue();
const router = new VueRouter({
    mode: 'history',
    routes: routes.routes
});

new Vue({
    router
}).$mount(`#app-wrapper`); 