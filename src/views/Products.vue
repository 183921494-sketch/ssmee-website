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
        <router-link to="/products/tissue" class="product-row">
          <div class="product-img">
            <img src="/images/tissue-pack.jpg" loading="lazy" decoding="async" :alt="t('products.tissue.name')" />
          </div>
          <div class="product-detail">
            <span class="tag hot">{{ t('home.hot') }}</span>
            <h2>{{ t('products.tissue.name') }}</h2>
            <p class="spec">{{ t('products.tissue.spec') }}</p>
            <p class="desc">{{ t('products.tissue.desc') }}</p>
          </div>
        </router-link>
        <!-- 底部挂抽 -->
        <router-link to="/products/bottom-drawer" class="product-row reverse">
          <div class="product-img">
            <img src="/images/bottom-drawer.jpg" loading="lazy" decoding="async" :alt="t('products.bottomDrawer.name')" />
          </div>
          <div class="product-detail">
            <span class="tag popular">{{ t('home.popular') }}</span>
            <h2>{{ t('products.bottomDrawer.name') }}</h2>
            <p class="spec">{{ t('products.bottomDrawer.spec') }}</p>
            <p class="desc">{{ t('products.bottomDrawer.desc') }}</p>
          </div>
        </router-link>
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
  background: linear-gradient(135deg, #2B4D1A 0%, #1B3509 100%);
  color: white;
  padding: 100px 0 60px;
  text-align: center;
}
.page-header h1 { font-size: 2.2rem; margin: 0 0 12px; font-weight: 700; }
.page-header p { font-size: 1rem; opacity: 0.8; margin: 0; }

.product-list { display: flex; flex-direction: column; gap: 60px; }
.product-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  border: 1px solid #D5DFCC;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 16px rgba(43,77,26,0.06);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
}
.product-row:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(43,77,26,0.15);
}
.product-row.reverse { direction: rtl; }
.product-row.reverse > * { direction: ltr; }
.product-img {
  background: #F7F9F4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-height: 400px;
}
.product-img img {
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
}
.product-detail { padding: 40px; }
.tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 12px;
}
.tag.hot {
  background: linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 100%);
  color: white;
}
.tag.popular {
  background: linear-gradient(135deg, #C9A96E 0%, #B8966A 100%);
  color: white;
}
.product-detail h2 { font-size: 1.8rem; color: #2B4D1A; margin: 0 0 10px; font-weight: 700; }
.product-detail .spec { font-size: 0.9rem; color: #C9A96E; font-weight: 600; margin: 0 0 16px; }
.product-detail .desc { font-size: 0.95rem; color: #6B7280; line-height: 1.7; margin: 0 0 24px; }
.btn-primary {
  background: linear-gradient(135deg, #C9A96E 0%, #B8966A 100%);
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,169,110,0.4);
}

@media (max-width: 767px) {
  .product-row, .product-row.reverse { grid-template-columns: 1fr; direction: ltr; }
  .product-img { min-height: 280px; padding: 24px; }
  .product-detail { padding: 24px; }
}
</style>
