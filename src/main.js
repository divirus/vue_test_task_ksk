import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex);

Vue.config.productionTip = false

const store =  new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
  },
  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    }
  },
});

new Vue({
  router,
  store: store,
  render : h => h( App ),
}).$mount('#app')
