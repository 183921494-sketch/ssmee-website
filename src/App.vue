<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<style>
/* 全局CSS变量 - 品牌色系 */
:root {
  --color-primary: #1A3A5C;     /* 深蓝 - 主色 */
  --color-gold: #C9A96E;         /* 金色 - 强调色 */
  --color-teal: #0D7D8A;         /* 青色 - 数据色 */
  --color-orange: #E8702A;       /* 橙色 - 警示色 */
  --color-bg: #FAFBFC;           /* 背景色 */
  --color-text: #1A1A1A;         /* 正文色 */
  --color-text-light: #666666;    /* 浅色文字 */
  --color-border: #E5E7EB;       /* 边框色 */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
}

/* 字体族 */
body {
  font-family: 'Inter', 'Noto Sans SC', 'Noto Sans RU', -apple-system, sans-serif;
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}

/* 重置 */
*, *::before, *::after {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font: inherit;
}

/* 通用容器 */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 通用按钮 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}
.btn-primary:hover {
  background: #0F2A4A;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-gold {
  background: var(--color-gold);
  color: white;
}
.btn-gold:hover {
  background: #B8945A;
  transform: translateY(-1px);
}

/* 区块标题 */
.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0 0 12px;
}

.section-title p {
  font-size: 1rem;
  color: var(--color-text-light);
  margin: 0;
}

/* 响应式断点 */
@media (max-width: 767px) {
  .container {
    padding: 0 16px;
  }
  .section-title h2 {
    font-size: 1.5rem;
  }
}
</style>