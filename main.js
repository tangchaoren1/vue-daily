import Vue from 'vue';
import App from './app.vue';
// import iview from 'iview';
import './style.css';
// import 'iview/dist/styles/iview.css';
// Vue.use(iview);

new Vue({
    el: "#app",
    render: h => {
        return h(App)
    }
})