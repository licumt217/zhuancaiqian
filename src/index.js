/**
 * Created by liqiang on 2017/5/21.
 */
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import App from './App.vue'
import router from './routers'

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
