import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout';

export const constantRoutes = [
	{
	  path: '/login',
	  component: () => import('@/views/login/login'),
	  hidden: true
	},
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [{
			path: 'home',
			name: 'Home',
			component: () => import('@/views/home/home'),
			meta: { title: '首页', icon: 'dashboard' }
		}]
	},
	{
		path: '/example',
		component: Layout,
		redirect: '/example/table',
		name: 'Example',
		meta: { title: 'Example', icon: 'example' },
		children: [
		  {
			path: 'table',
			name: 'Table',
			component: () => import('@/views/member/memberExperience'),
			meta: { title: 'Table', icon: 'table' }
		  },
		  {
			path: 'tree',
			name: 'Tree',
			component: () => import('@/views/member/memberList'),
			meta: { title: 'Tree', icon: 'tree' }
		  }
		]
	  },
]
  
const createRouter = () => new Router({
// mode: 'history', // require service support
scrollBehavior: () => ({ y: 0 }),
routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

const whiteList = ['/login'] 
router.beforeEach(async(to, from, next) => {
  const hasToken = localStorage.getItem("token");
  if (hasToken) {
	if (to.path === '/login') {
		next({ path: '/' })
	} else {
		next()
	}
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
		console.log(to.path)
		next(`/login?redirect=${to.path}`)
    }
  }
})


export default router