import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      baseball: true
    },
    mutations: {
        isBaseball(state){
            state.baseball = true;
        },
        isFitness(state){
            state.baseball = false;
        }
     }
  });

  export default store;
