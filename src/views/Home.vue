<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>{{ t('hero.title') }}</h1>
          <p class="subtitle">{{ t('hero.subtitle') }}</p>
          <div class="hero-btns">
            <router-link to="/contact" class="btn btn-primary">{{ t('hero.cta') }}</router-link>
            <router-link to="/products" class="btn btn-outline">{{ t('hero.secondary') }}</router-link>
          </div>
          <div class="hero-stats">
            <div class="stat" v-for="(s, i) in homeStats" :key="i">
              <span class="num">{{ s.num }}</span>
              <span class="label">{{ t(`home.stats.${i}.label`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Preview -->
    <section class="products-preview">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('products.title') }}</h2>
          <p>{{ t('products.subtitle') }}</p>
        </div>
        <div class="product-grid">
          <div class="product-card">
            <div class="product-img">
              <img src="/images/tissue-pack.jpg" alt="Ssmee Facial Tissue" />
            </div>
            <div class="product-info">
              <h3>{{ t('products.tissue.name') }}</h3>
              <p class="spec">{{ t('products.tissue.spec') }}</p>
              <p class="desc">{{ t('products.tissue.desc') }}</p>
              <router-link to="/products/tissue" class="btn btn-ghost">{{ t('home.viewProduct') }}</router-link>
            </div>
          </div>
          <div class="product-card">
            <div class="product-img">
              <img src="/images/bottom-drawer.jpg" alt="Ssmee Bottom-Drawer Tissue" />
            </div>
            <div class="product-info">
              <h3>{{ t('products.bottomDrawer.name') }}</h3>
              <p class="spec">{{ t('products.bottomDrawer.spec') }}</p>
              <p class="desc">{{ t('products.bottomDrawer.desc') }}</p>
              <router-link to="/products/bottom-drawer" class="btn btn-ghost">{{ t('home.viewProduct') }}</router-link>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <router-link to="/products" class="btn btn-primary">{{ t('home.browseAll') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-us">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('home.whyUs.title') }}</h2>
          <p>{{ t('home.whyUs.subtitle') }}</p>
        </div>
        <div class="features-grid">
          <div class="feature" v-for="(f, i) in homeWhyFeatures" :key="i">
            <div class="icon">{{ f.icon }}</div>
            <h3>{{ t(`home.whyUs.features.${i}.title`) }}</h3>
            <p>{{ t(`home.whyUs.features.${i}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>{{ t('home.cta.title') }}</h2>
          <p>{{ t('home.cta.desc') }}</p>
          <router-link to="/contact" class="btn btn-gold">{{ t('home.cta.btn') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const homeStats = [
  { num: '20+', label: '' },
  { num: '5000+', label: '' },
  { num: '15+', label: '' }
]
const homeWhyFeatures = [
  { icon: '🏭' },
  { icon: '✅' },
  { icon: '🚀' },
  { icon: '🤝' }
]
</script>

<style scoped>
/* Hero */
.hero {
  background: linear-gradient(135deg, #1A3A5C 0%, #0F2A4A 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}
.hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.2;
}
.subtitle {
  font-size: 1.2rem;
  opacity: 0.85;
  margin: 0 0 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.hero-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.btn-outline {
  padding: 12px 24px;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 8px;
  color: white;
  font-weight: 500;
  transition: all 0.2s;
}
.btn-outline:hover {
  border-color: white;
  background: rgba(255,255,255,0.1);
}
.hero-stats {
  display: flex;
  gap: 48px;
  justify-content: center;
  flex-wrap: wrap;
}
.stat .num {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-gold);
}
.stat .label {
  font-size: 0.85rem;
  opacity: 0.7;
}

/* Products Preview */
.products-preview {
  padding: 80px 0;
  background: white;
}
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.product-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}
.product-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
.product-img {
  height: 280px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e8eef5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-info {
  padding: 28px;
}
.product-info h3 {
  font-size: 1.25rem;
  color: var(--color-primary);
  margin: 0 0 8px;
}
.product-info .spec {
  font-size: 0.85rem;
  color: var(--color-gold);
  font-weight: 600;
  margin: 0 0 12px;
}
.product-info .desc {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin: 0 0 16px;
}
.btn-ghost {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
}

/* Why Us */
.why-us {
  padding: 80px 0;
  background: var(--color-bg);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}
.feature {
  background: white;
  border-radius: var(--radius-md);
  padding: 28px 24px;
  text-align: center;
  transition: all 0.3s;
  border: 1px solid transparent;
}
.feature:hover {
  border-color: var(--color-gold);
  box-shadow: var(--shadow-md);
}
.feature .icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}
.feature h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0 0 10px;
}
.feature p {
  font-size: 0.85rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin: 0;
}

/* CTA */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1A3A5C, #0F2A4A);
}
.cta-box {
  background: var(--color-gold);
  border-radius: var(--radius-lg);
  padding: 60px;
  text-align: center;
  color: white;
}
.cta-box h2 {
  font-size: 2rem;
  margin: 0 0 12px;
}
.cta-box p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0 0 32px;
}
.btn-gold {
  background: white;
  color: var(--color-primary);
  padding: 14px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
}
.btn-gold:hover {
  background: var(--color-bg);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .hero h1 { font-size: 2rem; }
  .product-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr 1fr; }
  .cta-box { padding: 40px 24px; }
}
</style>