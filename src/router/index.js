import { createRouter, createWebHistory } from 'vue-router'

// 路由配置
const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: { title: '高端纸巾 OEM/ODM 制造商 - 时时美 Ssmee' }
  },
  {
    path: '/en',
    component: () => import('../views/Home.vue'),
    meta: { lang: 'en', title: 'Premium Tissue OEM/ODM Manufacturer - Ssmee' }
  },
  {
    path: '/ru',
    component: () => import('../views/Home.vue'),
    meta: { lang: 'ru', title: 'Производитель премиум салфеток OEM/ODM - Ssmee' }
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
    meta: { title: '产品中心 - 时时美' }
  },
  {
    path: '/products/tissue',
    component: () => import('../views/TissueDetail.vue'),
    meta: { title: '抽纸系列 - 时时美' }
  },
  {
    path: '/products/bottom-drawer',
    component: () => import('../views/BottomDrawerDetail.vue'),
    meta: { title: '底部挂抽系列 - 时时美' }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: { title: '关于我们 - 时时美' }
  },
  {
    path: '/certification',
    component: () => import('../views/Certification.vue'),
    meta: { title: '资质证书 - 时时美' }
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue'),
    meta: { title: '联系我们 - 时时美' }
  },
  {
    path: '/cooperation',
    component: () => import('../views/Cooperation.vue'),
    meta: { title: '招商加盟 - 时时美' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

// 动态标题
router.afterEach((to) => {
  const baseTitle = 'Ssmee 时时美'
  document.title = to.meta.title || baseTitle
})

export default router