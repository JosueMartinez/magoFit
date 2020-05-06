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
                    let whereTo = "";

                    if(to.query.baseball){
                        whereTo = 'isBaseball'
                    }else if(to.query.fitness){
                        whereTo = 'isFitness'
                    }else{
                        whereTo = store.state.baseball ? "isBaseball" : "isFitness";
                    }
                    
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
                path: '/programs', 
                name: 'Program', 
                component: () => import ("@/components/Program")
            }
        ]
    }
    
];

const router = new Router({routes: Routes});

export default router;