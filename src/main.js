import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import mainWindow from './components/mainWindow.vue';
import work from './components/work.vue';
import contact from "@/components/contact";
import about from "@/components/about";


const router = new VueRouter({
  routes: [
    { path: '/', component: mainWindow },
    { path: '/work', component: work },
    {path: '/contact', component: contact},
    {path: '/about', component: about }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


Vue.config.productionTip = false