import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const safeLogsRouter: RouteConfig = {
  path: '/safelogs',
  component: Layout,
  redirect: '/safelogs/list',
  meta: {
    title: 'safelogs',
    icon: 'example'
  },
  children: [
    {
      path: 'login',
      component: () => import('@/views/safelogs/loginlogs.vue'),
      name: 'LoginLog',
      meta: {
        title: 'loginLog',
        icon: 'list'
      }
    },
    {
      path: 'access',
      component: () => import('@/views/safelogs/accesslogs.vue'),
      name: 'AccessLog',
      meta: {
        title: 'accessLog',
        icon: 'list'
      }
    },
    {
      path: 'operating',
      component: () => import('@/views/safelogs/optlogs.vue'),
      name: 'OperatingLog',
      meta: {
        title: 'operatingLog',
        icon: 'list'
      }
    }
  ]
}

export default safeLogsRouter
