import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

const routes = [
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
          title: '首页',
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
          title: '文章',
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
  routes
})

export default router