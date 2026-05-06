import { createRouter, createWebHistory } from 'vue-router'

// 所有路由（无前缀版本，用于zh默认）
const makeRoutes = (prefix = '') => [
  {
    path: prefix === '' ? '/' : `/${prefix}`,
    component: () => import('../views/Home.vue'),
    meta: { lang: prefix || 'zh', title: prefix === 'en' ? 'Premium Tissue Manufacturer - Ssmee' : prefix === 'ru' ? 'Производитель премиум бумажной продукции - Ssmee' : '高端纸巾制造商 - 时时美 Ssmee' }
  },
  {
    path: `${prefix ? '/' + prefix : ''}/products`,
    component: () => import('../views/Products.vue'),
    meta: { lang: prefix || 'zh', title: '产品中心 - 时时美 Ssmee' }
  },
  {
    path: `${prefix ? '/' + prefix : ''}/products/tissue`,
    component: () => import('../views/TissueDetail.vue'),
    meta: { lang: prefix || 'zh', title: '抽纸系列 - 时时美 Ssmee' }
  },
  {
    path: `${prefix ? '/' + prefix : ''}/products/bottom-drawer`,
    component: () => import('../views/BottomDrawerDetail.vue'),
    meta: { lang: prefix || 'zh', title: '底部挂抽系列 - 时时美 Ssmee' }
  },
  {
    path: `${prefix ? '/' + prefix : ''}/about`,
    component: () => import('../views/About.vue'),
    meta: { lang: prefix || 'zh', title: '关于我们 - 时时美 Ssmee' }
  },
  {
    path: `${prefix ? '/' + prefix : ''}/certification`,
    component: () => import('../views/Certification.vue'),
    meta: { lang: prefix || 'zh', title: '资质证书 - 时时美 Ssmee' }
  },
  {
    path: `${prefix ? '/' + prefix : ''}/contact`,
    component: () => import('../views/Contact.vue'),
    meta: { lang: prefix || 'zh', title: '联系我们 - 时时美 Ssmee' }
  },
  {
    path: `${prefix ? '/' + prefix : ''}/cooperation`,
    component: () => import('../views/Cooperation.vue'),
    meta: { lang: prefix || 'zh', title: '招商加盟 - 时时美 Ssmee' }
  },
]

// 合并所有语言路由
const routes = [
  ...makeRoutes(''),
  ...makeRoutes('en'),
  ...makeRoutes('ru'),
  // 404 fallback
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

// 动态标题 + 动态meta
router.afterEach((to) => {
  document.title = to.meta.title || 'Ssmee 时时美'
  // 更新html lang属性
  const lang = to.meta.lang || 'zh'
  document.documentElement.lang = lang === 'en' ? 'en' : lang === 'ru' ? 'ru' : 'zh-CN'
})

export default router
