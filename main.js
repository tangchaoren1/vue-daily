import Vue from 'vue';
import App from './app.vue';
import { router } from './router.js';
import store from './store';
// import iview from 'iview';
import './style.css';
// import 'iview/dist/styles/iview.css';
// Vue.use(iview);


new Vue({
    el: "#app",
    router,
    store,
    render: h => {
        return h(App)
    }
})