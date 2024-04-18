import { createApp } from 'vue';
import router from './routers';
import './assets/css/main.less';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue'

createApp(App).mount('#app')

const myApp = createApp(App);

myApp.use(router);

myApp.use(ElementPlus);

myApp.mount("#app-wrapper");
