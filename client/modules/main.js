import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import routes from './routers';
import * as d3 from "d3";
import 'assets/css/main.less';
import VirtualList from 'vue-virtual-list-v3';
import VueQuillEditor from 'common/utils/vue-quill-text-editor.esm.js';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'assets/css/vue-quill-text-editor.esm.css';



window.d3 = d3;

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
const myApp = createApp({
    el: '#app-wrapper',
});

myApp.use(router);
myApp.use(VirtualList);
myApp.use(VueQuillEditor);

myApp.use(ElementPlus);

myApp.mount("#app-wrapper");
