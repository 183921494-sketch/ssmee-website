<template>
  <div class="products-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ t('products.title') }}</h1>
        <p>{{ t('products.subtitle') }}</p>
      </div>
    </div>
    <div class="container" style="padding: 60px 20px;">
      <div class="product-list">
        <!-- 抽纸 -->
        <div class="product-row">
          <div class="product-img">
            <img src="/images/tissue-pack.jpg" alt="抽纸系列" />
          </div>
          <div class="product-detail">
            <span class="tag">🔥 热销</span>
            <h2>{{ t('products.tissue.name') }}</h2>
            <p class="spec">{{ t('products.tissue.spec') }}</p>
            <p class="desc">{{ t('products.tissue.desc') }}</p>
            <router-link to="/products/tissue" class="btn btn-primary">查看详情</router-link>
          </div>
        </div>
        <!-- 底部挂抽 -->
        <div class="product-row reverse">
          <div class="product-img">
            <img src="/images/bottom-drawer.jpg" alt="底部挂抽系列" />
          </div>
          <div class="product-detail">
            <span class="tag">⭐ 热门</span>
            <h2>{{ t('products.bottomDrawer.name') }}</h2>
            <p class="spec">{{ t('products.bottomDrawer.spec') }}</p>
            <p class="desc">{{ t('products.bottomDrawer.desc') }}</p>
            <router-link to="/products/bottom-drawer" class="btn btn-primary">查看详情</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1A3A5C 0%, #0F2A4A 100%);
  color: white;
  padding: 100px 0 60px;
  text-align: center;
}
.page-header h1 { font-size: 2.2rem; margin: 0 0 12px; }
.page-header p { font-size: 1rem; opacity: 0.8; margin: 0; }

.product-list { display: flex; flex-direction: column; gap: 60px; }
.product-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
}
.product-row.reverse { direction: rtl; }
.product-row.reverse > * { direction: ltr; }
.product-img { height: 360px; overflow: hidden; }
.product-img img { width: 100%; height: 100%; object-fit: cover; }
.product-detail { padding: 40px; }
.tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(200,169,110,0.15);
  color: var(--color-gold);
  margin-bottom: 12px;
}
.product-detail h2 { font-size: 1.8rem; color: var(--color-primary); margin: 0 0 10px; }
.product-detail .spec { font-size: 0.9rem; color: var(--color-gold); font-weight: 600; margin: 0 0 16px; }
.product-detail .desc { font-size: 0.95rem; color: var(--color-text-light); line-height: 1.7; margin: 0 0 24px; }

@media (max-width: 767px) {
  .product-row, .product-row.reverse { grid-template-columns: 1fr; direction: ltr; }
  .product-img { height: 240px; }
  .product-detail { padding: 24px; }
}
</style>