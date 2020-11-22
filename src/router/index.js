import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from '@/components/views/MainMenu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    }
  ]
})