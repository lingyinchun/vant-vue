/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/login',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: { title: '登录', keepAlive: false, isHideTab: true }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register'),
        meta: { title: '注册会员', keepAlive: false, isHideTab: true }
      },
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/views/home/category'),
        meta: { title: '分类', keepAlive: false }
      },
      {
        path: '/cartPage',
        name: 'cartPage',
        component: () => import('@/views/home/cartPage'),
        meta: { title: '购物车', keepAlive: false }
      },
      {
        path: '/userContent',
        name: 'userContent',
        component: () => import('@/views/home/userContent'),
        meta: { title: '我', keepAlive: false }
      },
      {
        path: '*',
        component: () => import('@/views/404'),
        meta: { title: '404', keepAlive: false }
      }
    ]
  }
]
