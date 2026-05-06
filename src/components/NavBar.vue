<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="/images/ssmee-logo.png" alt="Ssmee" width="36" height="36" />
        <span class="logo-text">Ssmee</span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="nav-links desktop-only">
        <router-link to="/">{{ t('nav.home') }}</router-link>
        <router-link to="/products">{{ t('nav.products') }}</router-link>
        <router-link to="/about">{{ t('nav.about') }}</router-link>
        <router-link to="/certification">{{ t('nav.certification') }}</router-link>
        <router-link to="/contact">{{ t('nav.contact') }}</router-link>
        <router-link to="/cooperation" class="nav-cta">{{ t('nav.cooperation') }}</router-link>
      </nav>

      <!-- Language Switcher -->
      <div class="lang-switch desktop-only">
        <button
          v-for="lang in ['zh','en','ru']"
          :key="lang"
          :class="{ active: locale === lang }"
          @click="switchLang(lang)"
        >{{ lang.toUpperCase() }}</button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn mobile-only" @click="menuOpen = !menuOpen">
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="menuOpen" class="mobile-menu">
        <router-link to="/" @click="menuOpen = false">{{ t('nav.home') }}</router-link>
        <router-link to="/products" @click="menuOpen = false">{{ t('nav.products') }}</router-link>
        <router-link to="/about" @click="menuOpen = false">{{ t('nav.about') }}</router-link>
        <router-link to="/certification" @click="menuOpen = false">{{ t('nav.certification') }}</router-link>
        <router-link to="/contact" @click="menuOpen = false">{{ t('nav.contact') }}</router-link>
        <router-link to="/cooperation" @click="menuOpen = false">{{ t('nav.cooperation') }}</router-link>
        <div class="mobile-lang">
          <button v-for="lang in ['zh','en','ru']" :key="lang" :class="{ active: locale === lang }" @click="switchLang(lang)">{{ lang.toUpperCase() }}</button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()

const isScrolled = ref(false)
const menuOpen = ref(false)

function switchLang(lang) {
  locale.value = lang
  const pathMap = { zh: '/', en: '/en', ru: '/ru' }
  router.push(pathMap[lang])
  menuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // 初始化语言路由
  const path = route.path
  if (path.startsWith('/en')) locale.value = 'en'
  else if (path.startsWith('/ru')) locale.value = 'ru'
  else locale.value = 'zh'
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
  border-color: var(--color-border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text);
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-links a:hover {
  color: var(--color-primary);
  background: rgba(43,77,26,0.06);
}

.nav-links a.router-link-active {
  color: var(--color-primary);
  font-weight: 600;
}

.nav-cta {
  background: transparent !important;
  color: var(--color-text) !important;
  padding: 8px 16px !important;
  border-radius: 6px !important;
}

.nav-cta:hover {
  background: var(--color-gold) !important;
  color: white !important;
  transform: translateY(-1px);
}

.nav-cta.router-link-active {
  background: var(--color-gold) !important;
  color: white !important;
}

.lang-switch {
  display: flex;
  gap: 4px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 4px;
}

.lang-switch button {
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 5px;
  color: var(--color-text-light);
  transition: all 0.2s;
}

.lang-switch button:hover {
  background: rgba(43,77,26,0.06);
  color: var(--color-primary);
}

.lang-switch button.active {
  background: var(--color-primary);
  color: white;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
}

.mobile-menu-btn span,
.mobile-menu-btn span::before,
.mobile-menu-btn span::after {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-primary);
  transition: all 0.3s ease;
  position: relative;
}

.mobile-menu-btn span::before,
.mobile-menu-btn span::after {
  content: '';
  position: absolute;
}

.mobile-menu-btn span::before { top: -7px; }
.mobile-menu-btn span::after { top: 7px; }

.mobile-menu-btn span.open { background: transparent; }
.mobile-menu-btn span.open::before { transform: rotate(45deg); top: 0; }
.mobile-menu-btn span.open::after { transform: rotate(-45deg); top: 0; }

/* Mobile Menu */
.mobile-menu {
  display: flex;
  flex-direction: column;
  padding: 16px 20px 24px;
  background: white;
  border-top: 1px solid var(--color-border);
}

.mobile-menu a {
  padding: 14px 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}

.mobile-menu a:last-of-type {
  border-bottom: none;
}

.mobile-lang {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.mobile-lang button {
  flex: 1;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
}

.mobile-lang button.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* Responsive */
.desktop-only { display: flex; }
.mobile-only { display: none; }

@media (max-width: 767px) {
  .desktop-only { display: none; }
  .mobile-only { display: flex; }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 500px;
}

/* 占位，给导航固定定位留出空间 */
.main-content {
  padding-top: 72px;
}
</style>