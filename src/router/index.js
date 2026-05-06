import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '时时美纸巾 - 高端生活用纸OEM制造商 | 出口俄罗斯·东南亚',
      description: '时时美（SSMEE）专注高端生活用纸OEM/ODM定制20年。自有工厂50000㎡，出口俄罗斯、东南亚、中东15+国家。抽纸、悬挂式抽纸，无荧光剂、无香精、可湿水，MOQ 500起，7-15天交货。免费寄样。'
    }
  },
  {
    path: '/en',
    component: () => import('../views/Home.vue'),
    meta: {
      lang: 'en',
      title: 'Ssmee Tissue - Premium Tissue OEM Manufacturer | Export to Russia, SE Asia',
      description: 'Ssmee (SSMEE), 20 years of premium tissue OEM/ODM manufacturing. Own factory 50,000㎡, exporting to Russia, SE Asia, Middle East 15+ countries. Facial tissue, bottom-drawer tissue, no fluorescent agent, MOQ 500, 7-15 days delivery. Free samples available.'
    }
  },
  {
    path: '/ru',
    component: () => import('../views/Home.vue'),
    meta: {
      lang: 'ru',
      title: 'Ssmee — Производитель премиум салфеток OEM | Экспорт в Россию, ЮВА',
      description: 'Ssmee (SSMEE) — 20 лет производства премиум салфеток OEM/ODM. Собственный завод 50 000 м², экспорт в Россию, Юго-Восточную Азию, Ближний Восток. Салфетки, подвесные салфетки, без флуоресцента, МОQ 500, доставка 7-15 дней.'
    }
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
    meta: {
      title: '产品中心 - 时时美',
      description: '时时美产品中心：奔跑系列抽纸（10包/提，5层，压花工艺）、悬挂式抽纸（400抽/提，底部易抽取）。全部无荧光剂、无香精、无添加、可湿水，支持品牌定制。'
    }
  },
  {
    path: '/products/tissue',
    component: () => import('../views/TissueDetail.vue'),
    meta: {
      title: '时时美奔跑系列抽纸 - 10包/提 | 5层 | 出口品质',
      description: '时时美奔跑系列抽纸，5层加厚，155×180mm，压花工艺，无荧光剂，无香精，无添加，可湿水。MOQ 500提，FOB报价，出口俄罗斯、东南亚首选。免费样品。'
    }
  },
  {
    path: '/products/bottom-drawer',
    component: () => import('../views/BottomDrawerDetail.vue'),
    meta: {
      title: '时时美悬挂式抽纸 - 400抽/提 | 底部易抽取 | 商用家用手纸',
      description: '时时美悬挂式抽纸，底部易抽取设计，5层加厚，155×175mm，400抽/提。压花工艺，无荧光剂，无香精，可湿水。适合家庭、办公、公共场所，支持品牌定制。'
    }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我们 - 时时美纸巾 | 20年专注高端生活用纸',
      description: '时时美创立于2006年，位于广东东莞，专业从事生活用纸研发、生产、销售。现代化生产基地50000㎡，多条全自动生产线，年产能5000+吨，出口俄罗斯、东南亚、中东15+国家。'
    }
  },
  {
    path: '/certification',
    component: () => import('../views/Certification.vue'),
    meta: {
      title: '资质证书 - 时时美 | ISO9001/FDA/CE/卫生许可证',
      description: '时时美持有ISO9001质量管理体系认证、FDA认证、CE认证，以及完整食品相关产品生产许可证（卫生许可证中英俄三语版）。产品通过第三方权威检测，品质有保障。'
    }
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: '联系我们 - 时时美 | 纸巾OEM定制询盘',
      description: '联系时时美（SSMEE）：电话+86 153-7773-1411，邮箱183921494@qq.com，微信soonyetclub。地址广东东莞市中堂镇。支持抽纸、悬挂式抽纸OEM定制，在线询盘免费寄样。'
    }
  },
  {
    path: '/cooperation',
    component: () => import('../views/Cooperation.vue'),
    meta: {
      title: '招商加盟 - 时时美 | 纸巾OEM区域代理/批发/品牌定制',
      description: '时时美招商加盟：源头工厂一手货源，三种合作模式（区域代理/批发经销/品牌定制）。ISO认证出口品质，20年出口经验，免费样品支持。MOQ 500起，欢迎洽谈合作。'
    }
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

router.afterEach((to) => {
  document.title = to.meta.title || 'Ssmee 时时美'
  // 动态更新 meta description
  const desc = to.meta.description
  if (desc) {
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', desc)

    // 同时更新 OG description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', desc)
  }
})

export default router
