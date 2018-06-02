import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './page/store.vue';
Vue.use(VueRouter);
const routes = [
    {path: '/store', component: store}
]
export const router = new VueRouter({
    routes
})



