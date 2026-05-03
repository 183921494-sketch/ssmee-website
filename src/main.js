import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
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

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')