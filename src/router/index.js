import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Routes = [
    {
        path: '/', 
        name: 'Home', 
        component: () => import ("@/components/Home")
    },
    { 
        path: '/about', 
        name: 'About', 
        component: () => import ("@/components/About") 
    },
    { 
        path: '/services', 
        name: 'Services', 
        component: () => import ("@/components/Services")
    }
];

const router = new Router({routes: Routes});

export default router;