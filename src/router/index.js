import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index'

Vue.use(Router);

const Routes = [
    {
        path: '/', 
        name: 'Entry', 
        component: () => import ("@/components/Entry")
    },
    {
        path: '/app',
        component: () => import ("@/components/Master"),
        children: [
            {
                path: '/home', 
                name: 'Home', 
                component: () => import ("@/components/Home"),
                beforeEnter: (to, from, next) => {
                    console.log(to.query.baseball)
                    let whereTo = to.query.baseball ? 'isBaseball' : 'isFitness';
                    console.log(whereTo)
                    store.commit(whereTo);
                    next();
                }
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
        ]
    }
    
];

const router = new Router({routes: Routes});

export default router;