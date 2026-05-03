<template>
  <div class="detail-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/products">产品中心</router-link>
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
          <p class="price-label">面议 / FOB报价</p>
          <div class="attrs">
            <div class="attr"><span class="key">规格</span><span class="val">400抽/提 | 2000张 | 5层</span></div>
            <div class="attr"><span class="key">材质</span><span class="val">100% 原生木浆</span></div>
            <div class="attr"><span class="key">尺寸</span><span class="val">140mm×200mm（大尺寸）</span></div>
            <div class="attr"><span class="key">层数</span><span class="val">5层加厚加宽</span></div>
            <div class="attr"><span class="key">包装</span><span class="val">纸箱整箱出货</span></div>
            <div class="attr"><span class="key">MOQ</span><span class="val">300 箱</span></div>
            <div class="attr"><span class="key">交期</span><span class="val">10-20 天</span></div>
          </div>
          <div class="desc-text">
            <p>{{ t('products.bottomDrawer.desc') }}</p>
            <p>适用场景：家庭洗手间、办公楼、公共场所、酒店浴室、餐厅厨房。</p>
          </div>
          <router-link to="/contact" class="btn btn-primary full-width">立即询价</router-link>
          <div class="trust-badges">
            <span>✅ ISO9001认证</span>
            <span>✅ FDA合规</span>
            <span>✅ 免费样品</span>
          </div>
        </div>
      </div>

      <div class="spec-table">
        <h3>产品规格参数</h3>
        <table>
          <tbody>
            <tr><td>产品名称</td><td>底部挂抽系列 / Bottom-Drawer Tissue</td></tr>
            <tr><td>品牌</td><td>OEM / ODM 支持</td></tr>
            <tr><td>材质</td><td>100% 原生木浆，无再生浆</td></tr>
            <tr><td>层数</td><td>5层（可定制4/5/6层）</td></tr>
            <tr><td>单张尺寸</td><td>140×200 mm（大尺寸加宽）</td></tr>
            <tr><td>每提张数</td><td>400抽/提（约2000层/提）</td></tr>
            <tr><td>装箱规格</td><td>可协商（建议24提/箱）</td></tr>
            <tr><td>起订量</td><td>300箱起订</td></tr>
            <tr><td>认证</td><td>ISO9001 / FDA / CE</td></tr>
            <tr><td>付款方式</td><td>T/T, L/C, Western Union</td></tr>
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
const thumbs = ['/images/bottom-drawer.jpg', '/images/bottom-detail1.jpg', '/images/bottom-detail2.jpg']
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
.page-header h1 { font-size: 2rem; margin: 0 0 10px; }
.spec-tag { font-size: 0.9rem; color: var(--color-gold); margin: 0; }

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}
.main-img {
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 16px;
  height: 400px;
  background: #f5f7fa;
}
.main-img img { width: 100%; height: 100%; object-fit: cover; }
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
.thumb-list img.active, .thumb-list img:hover { border-color: var(--color-gold); }

.detail-info h2 { font-size: 1.8rem; color: var(--color-primary); margin: 0 0 12px; }
.price-label { font-size: 1rem; color: var(--color-gold); font-weight: 600; margin: 0 0 24px; }
.attrs { border: 1px solid var(--color-border); border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 20px; }
.attr {
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border);
}
.attr:last-child { border-bottom: none; }
.attr .key { width: 80px; font-size: 0.85rem; color: var(--color-text-light); flex-shrink: 0; }
.attr .val { font-size: 0.9rem; font-weight: 500; }
.desc-text { margin-bottom: 24px; }
.desc-text p { font-size: 0.9rem; color: var(--color-text-light); line-height: 1.7; margin: 0 0 8px; }
.full-width { width: 100%; justify-content: center; margin-bottom: 20px; }
.trust-badges { display: flex; gap: 16px; flex-wrap: wrap; }
.trust-badges span { font-size: 0.85rem; color: var(--color-text-light); }

.spec-table { background: white; border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden; }
.spec-table h3 { padding: 20px 24px; margin: 0; font-size: 1.1rem; color: var(--color-primary); border-bottom: 1px solid var(--color-border); }
.spec-table table { width: 100%; border-collapse: collapse; }
.spec-table td { padding: 14px 24px; font-size: 0.9rem; border-bottom: 1px solid var(--color-border); }
.spec-table tr:last-child td { border-bottom: none; }
.spec-table td:first-child { width: 180px; color: var(--color-text-light); font-weight: 500; background: #fafbfc; }

@media (max-width: 1024px) { .detail-grid { grid-template-columns: 1fr; gap: 32px; } }
@media (max-width: 767px) { .main-img { height: 280px; } .spec-table td { padding: 12px 16px; } }
</style>