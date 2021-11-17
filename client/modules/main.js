import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import routes from './routers';
import * as d3 from "d3";
import 'assets/css/main.less';

window.d3 = d3;

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const myApp = createApp({
    el: '#app-wrapper',
});

myApp.use(router);

myApp.mount("#app-wrapper");
