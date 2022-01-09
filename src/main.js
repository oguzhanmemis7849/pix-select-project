import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import html2canvas from 'html2canvas';


const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(html2canvas);