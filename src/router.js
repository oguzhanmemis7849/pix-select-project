import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home';
import Video from './views/Video';


const routes = [
    {   name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Video',
        path: '/video',
        component: Video
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;