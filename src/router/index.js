import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

 const router = new Router({
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
          meta: {breadcrumb: ['会员列表'], auth: 'asf'},
          component: () => import("@/views/member/memberList")
        },
        {
          path: '/memberExperience',
          name: 'memberExperience',
          meta: {breadcrumb: ['会员经验值']},
          component: () => import("@/views/member/memberExperience")
        },
        {
          path: '/authority',
          name: 'authority',
          meta: {
            breadcrumb: ["权限页面"],
            authorization: true
          },
          component: () => import("@/views/authority/authority")
        },{
          path: '/error',
          name: 'error',
          meta: {
            breadcrumb: ['错误页面']
          },
          component: () => import("@/components/error/error")
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.authorization) {
    next({
        path: '/error'
    })
  } else {
      next()
  }
})

export default router