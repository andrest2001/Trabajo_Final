
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




// import Vue from 'vue'
// import VueFormulate from '@braid/vue-formulate'

// Vue.use(VueFormulate)


createApp(App).use(store).use(router).mount('#app')
