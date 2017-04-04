import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
      path: 'add',
      component: resolve => require(['../components/Add'], resolve)
    }]
  }]
})
