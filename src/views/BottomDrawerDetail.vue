<template>
  <div class="detail-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/products">{{ t('nav.products') }}</router-link>
          <span> / </span>
          <span>{{ t('products.bottomDrawer.name') }}</span>
        </div>
        <h1>{{ t('products.bottomDrawer.name') }}</h1>
        <p class="spec-tag">{{ t('products.bottomDrawer.spec') }}</p>
      </div>
    </div>

    <div class="container" style="padding: 60px 20px;">
      <div class="detail-grid">
        <div class="detail-gallery">
          <div class="main-img">
            <img :src="activeImg || '/images/bottom-drawer.jpg'" :alt="t('products.bottomDrawer.name')" />
          </div>
          <div class="thumb-list">
            <img v-for="(src, i) in thumbs" :key="i" :src="src" :class="{ active: activeImg === src }" @click="activeImg = src" />
          </div>
        </div>

        <div class="detail-info">
          <h2>{{ t('products.bottomDrawer.name') }}</h2>
          <p class="price-label">{{ t('detail.priceLabel') }}</p>
          <div class="attrs">
            <div class="attr"><span class="key">{{ t('detail.spec') }}</span><span class="val">400抽/提 | 1箱10提 | 5层 | 155×175mm</span></div>
            <div class="attr"><span class="key">{{ t('detail.process') }}</span><span class="val">{{ t('detail.embossed') }}</span></div>
            <div class="attr"><span class="key">{{ t('detail.material') }}</span><span class="val">100% {{ t('detail.virginPulp') }}</span></div>
            <div class="attr"><span class="key">{{ t('detail.features') }}</span><span class="val">{{ t('detail.noFluorescent') }} | {{ t('detail.noFragrance') }} | {{ t('detail.noAdditives') }} | {{ t('detail.waterResistant') }}</span></div>
            <div class="attr"><span class="key">MOQ</span><span class="val">500 {{ t('detail.cartons') }}</span></div>
            <div class="attr"><span class="key">{{ t('detail.leadTime') }}</span><span class="val">7-15 {{ t('detail.days') }}</span></div>
          </div>
          <div class="desc-text">
            <p>{{ t('products.bottomDrawer.desc') }}</p>
            <p>{{ t('detail.bottomDrawerScenarios') }}</p>
          </div>
          <router-link to="/contact" class="btn btn-primary full-width">{{ t('detail.inquiryNow') }}</router-link>
          <div class="trust-badges">
            <span>✅ {{ t('detail.foodSafetyCert') }}</span>
            <span>✅ FDA {{ t('detail.compliant') }}</span>
            <span>✅ {{ t('detail.freeSamples') }}</span>
          </div>
        </div>
      </div>

      <div class="spec-table">
        <h3>{{ t('detail.specParams') }}</h3>
        <table>
          <tbody>
            <tr><td>{{ t('detail.productName') }}</td><td>{{ t('products.bottomDrawer.name') }}</td></tr>
            <tr><td>{{ t('detail.spec') }}</td><td>155×175mm | 5层 | {{ t('detail.embossed') }}</td></tr>
            <tr><td>{{ t('detail.packaging') }}</td><td>400抽/提 | 1箱10提</td></tr>
            <tr><td>{{ t('detail.material') }}</td><td>100% {{ t('detail.virginPulp') }}，{{ t('detail.noRecycled') }}</td></tr>
            <tr><td>{{ t('detail.process') }}</td><td>{{ t('detail.embossed') }}</td></tr>
            <tr><td>{{ t('detail.features') }}</td><td>{{ t('detail.noFluorescent') }}、{{ t('detail.noFragrance') }}、{{ t('detail.noAdditives') }}、{{ t('detail.waterResistant') }}</td></tr>
            <tr><td>MOQ</td><td>500箱</td></tr>
            <tr><td>{{ t('detail.leadTime') }}</td><td>7-15 {{ t('detail.days') }}</td></tr>
            <tr><td>{{ t('detail.certification') }}</td><td>ISO9001 / FDA / CE</td></tr>
            <tr><td>{{ t('detail.payment') }}</td><td>T/T, L/C, Western Union</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const thumbs = ['/images/bottom-drawer.jpg', '/images/factory-3.jpg', '/images/factory-4.jpg']
const activeImg = ref(null)
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1A3A5C, #0F2A4A);
  color: white;
  padding: 100px 0 60px;
}
.breadcrumb { font-size: 0.85rem; opacity: 0.7; margin-bottom: 16px; }
.breadcrumb a { color: white; opacity: 0.8; }
.page-header h1 { font-size: 2rem; margin: 0 0 10px; font-weight: 700; }
.spec-tag { font-size: 0.9rem; color: #C9A96E; margin: 0; }

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}
.main-img {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  background: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.main-img img {
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
}
.thumb-list { display: flex; gap: 12px; }
.thumb-list img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}
.thumb-list img.active, .thumb-list img:hover { border-color: #C9A96E; }

.detail-info h2 { font-size: 1.8rem; color: #1A3A5C; margin: 0 0 12px; font-weight: 700; }
.price-label { font-size: 1rem; color: #C9A96E; font-weight: 600; margin: 0 0 24px; }
.attrs { border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden; margin-bottom: 20px; }
.attr {
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid #E5E7EB;
}
.attr:last-child { border-bottom: none; }
.attr .key { width: 100px; font-size: 0.85rem; color: #6B7280; flex-shrink: 0; }
.attr .val { font-size: 0.9rem; font-weight: 500; }
.desc-text { margin-bottom: 24px; }
.desc-text p { font-size: 0.9rem; color: #6B7280; line-height: 1.7; margin: 0 0 8px; }
.full-width { width: 100%; justify-content: center; margin-bottom: 20px; }
.trust-badges { display: flex; gap: 16px; flex-wrap: wrap; }
.trust-badges span { font-size: 0.85rem; color: #6B7280; }

.spec-table { background: white; border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden; }
.spec-table h3 { padding: 20px 24px; margin: 0; font-size: 1.1rem; color: #1A3A5C; border-bottom: 1px solid #E5E7EB; font-weight: 700; }
.spec-table table { width: 100%; border-collapse: collapse; }
.spec-table td { padding: 14px 24px; font-size: 0.9rem; border-bottom: 1px solid #E5E7EB; }
.spec-table tr:last-child td { border-bottom: none; }
.spec-table td:first-child { width: 180px; color: #6B7280; font-weight: 500; background: #fafbfc; }

.btn-primary {
  background: linear-gradient(135deg, #C9A96E 0%, #B8966A 100%);
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,169,110,0.4);
}

@media (max-width: 1024px) { .detail-grid { grid-template-columns: 1fr; gap: 32px; } }
@media (max-width: 767px) { .main-img { padding: 24px; } .spec-table td { padding: 12px 16px; } }
</style>
