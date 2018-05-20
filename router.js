import Vue from 'vue';
import VueRouter from 'vue-router';
import local from './components/local.vue';
import tadayNews from './components/tadayNews.vue';
// import view2 from './components/view2.vue';
// import view3 from './components/view3.vue';
Vue.use(VueRouter);
const routes = [
    // {path: '/local', component: local, 
    // children:[
    //    {name:'nav2', path:'view2', component: view2},
    //    {name:'nav3', path:'view3', component: view3}
    // ]},
    {path: '/taday', component: local, 
    children:[
       {name:'tadayNews', path:'tadayNews', component: tadayNews },
    ]}
]
export const router = new VueRouter({
    routes
})



