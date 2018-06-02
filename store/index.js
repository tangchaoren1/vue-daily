import Vue from 'vue';
import Vuex from 'vuex';
import user from './user.js';
import count from './count.js';

Vue.use(Vuex);
const store = new Vuex.Store({
     modules: {
        user,
        count
     }
})

export default store;
