import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router/index.js'

// 语言包
import zh from './lang/zh.json'
import en from './lang/en.json'
import ru from './lang/ru.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: { zh, en, ru }
})

// 根据URL路径自动切换语言
function detectLang(path) {
  if (path.startsWith('/en')) return 'en'
  if (path.startsWith('/ru')) return 'ru'
  return 'zh'
}

// 路由守卫：切换语言
router.beforeEach((to) => {
  const lang = detectLang(to.path)
  if (i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
