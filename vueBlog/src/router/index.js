import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/dashboard'),
        meta: {
          title: '文章',
          noPublicBottom: true,
          noNavbar: true,
          noSideWidget: true
        }
      },
      {
        path: 'interview',
        name: 'interview',
        component: () => import('../views/interview'),
        meta: {
          title: '面试',
          noPublicBottom: true,
          noNavbar: true,
          noSideWidget: true
        }
      },
      {
        path: 'studay',
        name: 'studay',
        component: () => import('../views/studay'),
        meta: {
          title: '学习',
          noPublicBottom: true,
          noNavbar: true,
          noSideWidget: true
        }
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('../views/article'),
        meta: {
          title: '记事',
          noPublicBottom: true,
          noNavbar: true,
          noSideWidget: true
        }
      },
      {
        path: 'life',
        name: 'life',
        component: () => import('../views/life'),
        meta: {
          title: '生活',
          noPublicBottom: true,
          noNavbar: true,
          noSideWidget: true
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/about'),
        meta: {
          title: '自述',
          noPublicBottom: true,
          noNavbar: true,
          noSideWidget: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export default router