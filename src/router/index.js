import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/login')
    },
    {
      path: '/leftNavigation',
      name: 'leftNavigation',
      component: () => import("@/layout/leftNavigation"),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import("@/views/home/home")
        },
        {
          path: '/memberList',
          name: 'memberList',
          meta: ['会员列表'],
          component: () => import("@/views/member/memberList")
        },
        {
          path: '/memberExperience',
          name: 'memberExperience',
          meta: ['会员经验值'],
          component: () => import("@/views/member/memberExperience")
        },
      ]
    },
  ]
})
