<template>
  <div class="home">
    <!-- Hero Carousel -->
    <section class="hero-carousel">
      <div class="carousel-container">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="carousel-slide" v-for="(img, i) in factoryImages" :key="i">
            <img :src="img" :alt="`Factory ${i+1}`" />
            <div class="slide-overlay">
              <div class="hero-content">
                <span class="hero-badge fade-up" :class="{ visible: isLoaded }">{{ t('hero.badge') || '高端生活用纸品牌' }}</span>
                <h1 class="fade-up delay-1" :class="{ visible: isLoaded }">{{ t('hero.title') }}</h1>
                <p class="subtitle fade-up delay-2" :class="{ visible: isLoaded }">{{ t('hero.subtitle') }}</p>
                <div class="hero-btns fade-up delay-3" :class="{ visible: isLoaded }">
                  <router-link to="/products" class="btn btn-primary">{{ t('hero.cta') }}</router-link>
                  <router-link to="/contact" class="btn btn-outline">{{ t('hero.secondary') }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Navigation -->
        <button class="carousel-btn prev" @click="prevSlide" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button class="carousel-btn next" @click="nextSlide" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        <!-- Dots -->
        <div class="carousel-dots">
          <button v-for="(_, i) in factoryImages" :key="i" :class="{ active: currentSlide === i }" @click="goToSlide(i)" :aria-label="`Slide ${i+1}`"></button>
        </div>
      </div>
    </section>

    <!-- Factory Strength - 紧凑数据条 -->
    <section class="strength-bar">
      <div class="container">
        <div class="strength-items">
          <div class="strength-item" v-for="(item, i) in strengthItems" :key="i">
            <div class="strength-num">{{ item.num }}</div>
            <div class="strength-label">{{ t(`home.factory.items.${i}.label`) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Preview -->
    <section class="products-preview">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">{{ t('products.title') }}</span>
          <h2>{{ t('products.subtitle') }}</h2>
        </div>
        <div class="product-grid">
          <!-- Tissue -->
          <div class="product-card fade-up">
            <div class="product-img-box">
              <img src="/images/tissue-pack.jpg" :alt="t('products.tissue.name')" />
              <div class="product-badge hot">{{ t('home.hot') }}</div>
            </div>
            <div class="product-body">
              <h3>{{ t('products.tissue.name') }}</h3>
              <p class="spec">{{ t('products.tissue.spec') }}</p>
              <div class="features">
                <span class="feature-tag">{{ t('product.specs.process') }}</span>
                <span class="feature-tag">{{ t('detail.noFluorescent') }}</span>
                <span class="feature-tag">{{ t('detail.noFragrance') }}</span>
                <span class="feature-tag">{{ t('detail.noAdditives') }}</span>
                <span class="feature-tag">{{ t('detail.waterResistant') }}</span>
              </div>
              <router-link to="/products/tissue" class="btn btn-detail">
                {{ t('home.viewProduct') }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12l4-4-4-4"/></svg>
              </router-link>
            </div>
          </div>
          <!-- Bottom Drawer -->
          <div class="product-card fade-up delay-1">
            <div class="product-img-box">
              <img src="/images/bottom-drawer.jpg" :alt="t('products.bottomDrawer.name')" />
              <div class="product-badge popular">{{ t('home.popular') }}</div>
            </div>
            <div class="product-body">
              <h3>{{ t('products.bottomDrawer.name') }}</h3>
              <p class="spec">{{ t('products.bottomDrawer.spec') }}</p>
              <div class="features">
                <span class="feature-tag">{{ t('product.specs.process') }}</span>
                <span class="feature-tag">{{ t('detail.noFluorescent') }}</span>
                <span class="feature-tag">{{ t('detail.noFragrance') }}</span>
                <span class="feature-tag">{{ t('detail.noAdditives') }}</span>
                <span class="feature-tag">{{ t('detail.waterResistant') }}</span>
              </div>
              <router-link to="/products/bottom-drawer" class="btn btn-detail">
                {{ t('home.viewProduct') }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12l4-4-4-4"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us - 绿色背景 -->
    <section class="why-us">
      <div class="container">
        <div class="section-header light">
          <span class="section-badge">{{ t('home.whyUs.title') }}</span>
          <h2>{{ t('home.whyUs.subtitle') }}</h2>
        </div>
        <div class="features-grid">
          <div class="feature-card fade-up" v-for="(f, i) in whyFeatures" :key="i">
            <div class="feature-icon">
              <svg v-if="i === 0" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L4 12v16l16 8 16-8V12L20 4z" stroke="#C9A96E" stroke-width="2" fill="none"/>
                <path d="M20 20v16M4 12l16 8 16-8" stroke="#C9A96E" stroke-width="2"/>
              </svg>
              <svg v-if="i === 1" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="#C9A96E" stroke-width="2"/>
                <ellipse cx="20" cy="20" rx="6" ry="16" stroke="#C9A96E" stroke-width="2"/>
                <path d="M4 20h32" stroke="#C9A96E" stroke-width="2"/>
              </svg>
              <svg v-if="i === 2" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="8" y="8" width="24" height="24" rx="4" stroke="#C9A96E" stroke-width="2"/>
                <path d="M16 20h8M20 16v8" stroke="#C9A96E" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg v-if="i === 3" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="#C9A96E" stroke-width="2"/>
                <path d="M16 20l4 4 8-8" stroke="#C9A96E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>{{ t(`home.whyUs.features.${i}.title`) }}</h3>
            <p>{{ t(`home.whyUs.features.${i}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box fade-up">
          <h2>{{ t('home.cta.title') }}</h2>
          <p>{{ t('home.cta.desc') }}</p>
          <div class="cta-btns">
            <router-link to="/contact" class="btn btn-cta">{{ t('home.cta.btn') }}</router-link>
            <a href="tel:+8615377731411" class="btn btn-cta-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +86 153-7773-1411
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const factoryImages = [
  '/images/factory-1.jpg',
  '/images/factory-2.jpg',
  '/images/factory-3.jpg',
  '/images/factory-4.jpg',
  '/images/factory-5.jpg'
]

const currentSlide = ref(0)
const isLoaded = ref(false)
let autoPlayTimer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % factoryImages.length
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + factoryImages.length) % factoryImages.length
}
const goToSlide = (i) => {
  currentSlide.value = i
}

onMounted(() => {
  autoPlayTimer = setInterval(nextSlide, 5000)
  setTimeout(() => { isLoaded.value = true }, 100)
})
onUnmounted(() => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
})

const strengthItems = [
  { num: '20+' },
  { num: '5000+' },
  { num: '15+' },
  { num: '100+' }
]

const whyFeatures = [
  { }, { }, { }, { }
]
</script>

<style scoped>
/* === Hero Carousel === */
.hero-carousel {
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 900px;
  overflow: hidden;
}
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}
.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(27,53,9,0.55) 0%, rgba(43,77,26,0.40) 50%, rgba(27,53,9,0.50) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
}
.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 24px;
}
.hero-badge {
  display: inline-block;
  padding: 6px 24px;
  border: 1px solid rgba(201,169,110,0.5);
  border-radius: 24px;
  color: #C9A96E;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 28px;
  text-transform: uppercase;
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(4px);
}
.slide-overlay h1 {
  font-size: 3.4rem;
  font-weight: 700;
  color: white;
  margin: 0 0 24px;
  line-height: 1.2;
  font-family: 'Noto Sans SC', 'Inter', sans-serif;
  text-shadow: 0 2px 16px rgba(0,0,0,0.5);
}
.slide-overlay .subtitle {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.92);
  margin: 0 0 44px;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 8px rgba(0,0,0,0.4);
}
.hero-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: linear-gradient(135deg, #C9A96E 0%, #B8945A 100%);
  color: white;
  padding: 16px 44px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  border: none;
  text-decoration: none;
  display: inline-block;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,169,110,0.4);
}
.btn-outline {
  padding: 16px 44px;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  text-decoration: none;
  background: transparent;
}
.btn-outline:hover {
  border-color: #C9A96E;
  background: rgba(201,169,110,0.12);
  color: #C9A96E;
}

/* Fade animations */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.fade-up.visible { opacity: 1; transform: translateY(0); }
.fade-up.delay-1 { transition-delay: 0.15s; }
.fade-up.delay-2 { transition-delay: 0.3s; }
.fade-up.delay-3 { transition-delay: 0.45s; }

/* Carousel Nav */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-btn:hover {
  background: rgba(201,169,110,0.35);
  border-color: rgba(201,169,110,0.5);
}
.carousel-btn.prev { left: 32px; }
.carousel-btn.next { right: 32px; }

/* Carousel Dots */
.carousel-dots {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}
.carousel-dots button {
  width: 32px;
  height: 4px;
  border-radius: 2px;
  border: none;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.3s;
}
.carousel-dots button.active {
  background: #C9A96E;
  width: 48px;
}

/* === Strength Bar === */
.strength-bar {
  background: linear-gradient(135deg, #2B4D1A 0%, #1B3509 100%);
  padding: 40px 0;
  position: relative;
  z-index: 2;
  margin-top: -40px;
}
.strength-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
.strength-item {
  text-align: center;
  padding: 12px 20px;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.strength-item:last-child { border-right: none; }
.strength-num {
  font-size: 2.4rem;
  font-weight: 800;
  color: #C9A96E;
  letter-spacing: -1px;
  line-height: 1.2;
}
.strength-label {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  margin-top: 4px;
}

/* === Section Header === */
.section-header {
  text-align: center;
  margin-bottom: 48px;
}
.section-badge {
  display: inline-block;
  padding: 4px 16px;
  background: rgba(43,77,26,0.08);
  color: #2B4D1A;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 16px;
}
.section-header h2 {
  font-size: 2.2rem;
  color: #2B4D1A;
  margin: 0;
  font-weight: 700;
  font-family: 'Noto Sans SC', 'Inter', sans-serif;
}
.section-header.light .section-badge {
  background: rgba(201,169,110,0.2);
  color: #C9A96E;
}
.section-header.light h2 {
  color: white;
}

/* === Products === */
.products-preview {
  padding: 80px 0;
  background: white;
}
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 8px;
}
.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(43,77,26,0.08);
  border: 1px solid #E8EDE3;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(43,77,26,0.15);
  border-color: #C9A96E;
}
.product-img-box {
  background: #F7F9F4;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  aspect-ratio: 1/1;
  max-height: 360px;
}
.product-img-box img {
  width: 100%;
  max-width: 320px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
  transition: transform 0.6s ease;
}
.product-card:hover .product-img-box img {
  transform: scale(1.06);
}
.product-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}
.product-badge.hot {
  background: linear-gradient(135deg, #E25C5C 0%, #CC4444 100%);
}
.product-badge.popular {
  background: linear-gradient(135deg, #C9A96E 0%, #B8945A 100%);
}
.product-body {
  padding: 28px;
}
.product-body h3 {
  font-size: 1.3rem;
  color: #2B4D1A;
  margin: 0 0 8px;
  font-weight: 700;
}
.product-body .spec {
  font-size: 0.85rem;
  color: #C9A96E;
  font-weight: 600;
  margin: 0 0 14px;
}
.features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}
.feature-tag {
  background: rgba(43,77,26,0.06);
  color: #3D6B2E;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(43,77,26,0.1);
}
.btn-detail {
  color: #2B4D1A;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s;
  text-decoration: none;
  background: transparent;
  border: none;
  padding: 0;
}
.btn-detail:hover { gap: 12px; color: #C9A96E; }

/* === Why Us === */
.why-us {
  padding: 80px 0;
  background: linear-gradient(135deg, #2B4D1A 0%, #1B3509 100%);
  position: relative;
  overflow: hidden;
}
.why-us::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 8px;
}
.feature-card {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 36px 24px;
  text-align: center;
  transition: all 0.4s;
  border: 1px solid rgba(255,255,255,0.08);
}
.feature-card:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(201,169,110,0.3);
  transform: translateY(-6px);
}
.feature-icon {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(201,169,110,0.1);
  border-radius: 50%;
}
.feature-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
  margin: 0 0 10px;
}
.feature-card p {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  margin: 0;
}

/* === CTA === */
.cta-section {
  padding: 80px 0;
  background: #F7F9F4;
}
.cta-box {
  text-align: center;
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: 0 4px 24px rgba(43,77,26,0.06);
  border: 1px solid #E8EDE3;
}
.cta-box h2 {
  font-size: 2.2rem;
  margin: 0 0 14px;
  font-weight: 700;
  color: #2B4D1A;
}
.cta-box p {
  font-size: 1.1rem;
  color: #5A6B52;
  margin: 0 0 32px;
}
.cta-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-cta {
  background: linear-gradient(135deg, #C9A96E 0%, #B8945A 100%);
  color: white;
  padding: 16px 44px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(201,169,110,0.4);
}
.btn-cta-outline {
  padding: 16px 44px;
  border: 2px solid #2B4D1A;
  border-radius: 8px;
  color: #2B4D1A;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
}
.btn-cta-outline:hover {
  background: #2B4D1A;
  color: white;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Responsive */
@media (max-width: 1200px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .hero-carousel { height: 85vh; min-height: 500px; }
  .slide-overlay h1 { font-size: 2rem; }
  .slide-overlay .subtitle { font-size: 1rem; }
  .hero-badge { font-size: 0.75rem; padding: 4px 16px; }
  .carousel-btn { width: 44px; height: 44px; }
  .carousel-btn.prev { left: 12px; }
  .carousel-btn.next { right: 12px; }
  .carousel-dots { bottom: 20px; }
  .carousel-dots button { width: 24px; }
  .carousel-dots button.active { width: 36px; }
  .strength-bar { margin-top: -24px; padding: 24px 0; }
  .strength-items { grid-template-columns: repeat(2, 1fr); }
  .strength-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 16px; }
  .strength-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08); }
  .strength-num { font-size: 1.8rem; }
  .products-preview, .why-us, .cta-section { padding: 60px 0; }
  .product-grid { grid-template-columns: 1fr; gap: 28px; }
  .product-img-box { max-height: 300px; padding: 24px; }
  .features-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
  .feature-card { padding: 24px 16px; }
  .cta-box { padding: 40px 20px; }
  .cta-box h2 { font-size: 1.6rem; }
  .section-header h2 { font-size: 1.6rem; }
  .cta-btns { flex-direction: column; align-items: center; }
}
</style>
