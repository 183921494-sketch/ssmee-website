<template>
  <div class="home">
    <!-- Hero Carousel -->
    <section class="hero-carousel">
      <div class="carousel-container">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="carousel-slide" v-for="(img, i) in factoryImages" :key="i">
            <img :src="img" :alt="`Factory ${i+1}`" />
            <div class="slide-overlay">
              <div class="container">
                <h1 class="fade-up" :class="{ visible: isLoaded }">{{ t('hero.title') }}</h1>
                <p class="subtitle fade-up delay-1" :class="{ visible: isLoaded }">{{ t('hero.subtitle') }}</p>
                <div class="hero-btns fade-up delay-2" :class="{ visible: isLoaded }">
                  <router-link to="/contact" class="btn btn-primary">{{ t('hero.cta') }}</router-link>
                  <router-link to="/products" class="btn btn-outline">{{ t('hero.secondary') }}</router-link>
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

    <!-- Factory Strength -->
    <section class="factory-strength">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('home.factory.title') }}</h2>
          <p>{{ t('home.factory.subtitle') }}</p>
        </div>
        <div class="strength-grid">
          <div class="strength-card fade-up" v-for="(item, i) in strengthItems" :key="i">
            <div class="strength-icon">
              <!-- SVG Icons -->
              <svg v-if="i === 0" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#C9A96E" stroke-width="2"/>
                <path d="M24 14v10l6 6" stroke="#C9A96E" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg v-if="i === 1" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="16" width="32" height="20" rx="2" stroke="#C9A96E" stroke-width="2"/>
                <path d="M16 16V12a8 8 0 1116 0v4" stroke="#C9A96E" stroke-width="2"/>
                <circle cx="24" cy="26" r="4" stroke="#C9A96E" stroke-width="2"/>
              </svg>
              <svg v-if="i === 2" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="18" stroke="#C9A96E" stroke-width="2"/>
                <ellipse cx="24" cy="24" rx="8" ry="18" stroke="#C9A96E" stroke-width="2"/>
                <path d="M6 24h36" stroke="#C9A96E" stroke-width="2"/>
              </svg>
              <svg v-if="i === 3" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="16" r="8" stroke="#C9A96E" stroke-width="2"/>
                <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#C9A96E" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="strength-num">{{ item.num }}</div>
            <div class="strength-label">{{ t(`home.factory.items.${i}.label`) }}</div>
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
          <!-- Left: Tissue -->
          <div class="product-card fade-up">
            <div class="product-img-wrapper">
              <img src="/images/tissue-pack.jpg" alt="Ssmee Facial Tissue" />
              <div class="product-badge hot">{{ t('home.hot') }}</div>
            </div>
            <div class="product-info">
              <h3>{{ t('products.tissue.name') }}</h3>
              <p class="spec">{{ t('products.tissue.spec') }}</p>
              <div class="features">
                <span class="feature-tag">压花工艺</span>
                <span class="feature-tag">无荧光剂</span>
                <span class="feature-tag">无香精</span>
                <span class="feature-tag">无添加</span>
                <span class="feature-tag">可湿水</span>
              </div>
              <router-link to="/products/tissue" class="btn btn-ghost">
                {{ t('home.viewProduct') }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 12l4-4-4-4"/>
                </svg>
              </router-link>
            </div>
          </div>
          <!-- Right: Bottom Drawer -->
          <div class="product-card fade-up delay-1">
            <div class="product-img-wrapper">
              <img src="/images/bottom-drawer.jpg" alt="Ssmee Bottom-Drawer Tissue" />
              <div class="product-badge popular">{{ t('home.popular') }}</div>
            </div>
            <div class="product-info">
              <h3>{{ t('products.bottomDrawer.name') }}</h3>
              <p class="spec">{{ t('products.bottomDrawer.spec') }}</p>
              <div class="features">
                <span class="feature-tag">压花工艺</span>
                <span class="feature-tag">无荧光剂</span>
                <span class="feature-tag">无香精</span>
                <span class="feature-tag">无添加</span>
                <span class="feature-tag">可湿水</span>
              </div>
              <router-link to="/products/bottom-drawer" class="btn btn-ghost">
                {{ t('home.viewProduct') }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 12l4-4-4-4"/>
                </svg>
              </router-link>
            </div>
          </div>
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
          <div class="feature-card fade-up" v-for="(f, i) in whyFeatures" :key="i">
            <div class="feature-icon">
              <!-- SVG Icons -->
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
          <router-link to="/contact" class="btn btn-cta">{{ t('home.cta.btn') }}</router-link>
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
  { },
  { },
  { },
  { }
]
</script>

<style scoped>
/* Variables */
:root {
  --color-primary: #1A3A5C;
  --color-gold: #C9A96E;
  --color-gold-dark: #B8966A;
  --color-text: #1F2937;
  --color-text-light: #6B7280;
  --color-bg: #F8FAFC;
  --color-border: #E5E7EB;
}

/* Hero Carousel */
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
  background: linear-gradient(135deg, rgba(26,58,92,0.8) 0%, rgba(15,42,74,0.75) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
}
.slide-overlay h1 {
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 20px;
  text-align: center;
  line-height: 1.2;
  font-family: 'Noto Sans SC', 'Inter', sans-serif;
}
.slide-overlay .subtitle {
  font-size: 1.3rem;
  color: rgba(255,255,255,0.9);
  margin: 0 0 40px;
  text-align: center;
  max-width: 700px;
}
.hero-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
  color: white;
  padding: 16px 40px;
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
  padding: 16px 40px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  text-decoration: none;
  background: transparent;
}
.btn-outline:hover {
  border-color: white;
  background: rgba(255,255,255,0.15);
}

/* Fade animations */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
.fade-up.delay-1 { transition-delay: 0.15s; }
.fade-up.delay-2 { transition-delay: 0.3s; }

/* Carousel Navigation */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.3);
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
  background: rgba(255,255,255,0.35);
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
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
}
.carousel-dots button.active {
  background: white;
  border-color: white;
  transform: scale(1.2);
}

/* Section Title */
.section-title {
  text-align: center;
  margin-bottom: 20px;
}
.section-title h2 {
  font-size: 2.4rem;
  color: var(--color-primary);
  margin: 0 0 12px;
  font-weight: 700;
  font-family: 'Noto Sans SC', 'Inter', sans-serif;
}
.section-title p {
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 0;
}

/* Factory Strength */
.factory-strength {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
}
.strength-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 48px;
}
.strength-card {
  background: white;
  border-radius: 16px;
  padding: 48px 32px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(26,58,92,0.08);
  border: 1px solid rgba(201,169,110,0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.strength-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(26,58,92,0.15);
  border-color: var(--color-gold);
}
.strength-icon {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.strength-num {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-gold);
  margin-bottom: 8px;
  letter-spacing: -2px;
}
.strength-label {
  font-size: 1rem;
  color: var(--color-text-light);
  font-weight: 500;
}

/* Products Preview */
.products-preview {
  padding: 100px 0;
  background: white;
}
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 48px;
}
.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(26,58,92,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(26,58,92,0.18);
}
.product-img-wrapper {
  background: #f5f7fa;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.product-img-wrapper img {
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
  transition: transform 0.6s ease;
}
.product-card:hover .product-img-wrapper img {
  transform: scale(1.05);
}
.product-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}
.product-badge.hot {
  background: linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 100%);
}
.product-badge.popular {
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
}
.product-info {
  padding: 32px;
}
.product-info h3 {
  font-size: 1.4rem;
  color: var(--color-primary);
  margin: 0 0 12px;
  font-weight: 700;
}
.product-info .spec {
  font-size: 0.9rem;
  color: var(--color-gold);
  font-weight: 600;
  margin: 0 0 16px;
}
.features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.feature-tag {
  background: rgba(201,169,110,0.1);
  color: var(--color-gold-dark);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}
.btn-ghost {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s;
  text-decoration: none;
  background: transparent;
  border: none;
  padding: 0;
}
.btn-ghost:hover { gap: 12px; }

/* Why Us */
.why-us {
  padding: 100px 0;
  background: var(--color-bg);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 48px;
}
.feature-card {
  background: white;
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  transition: all 0.4s;
  border: 1px solid transparent;
}
.feature-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(26,58,92,0.1);
}
.feature-icon {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 12px;
}
.feature-card p {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.7;
  margin: 0;
}

/* CTA */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--color-primary), #0F2A4A);
}
.cta-box {
  text-align: center;
}
.cta-box h2 {
  font-size: 2.4rem;
  margin: 0 0 16px;
  font-weight: 700;
  color: white;
}
.cta-box p {
  font-size: 1.15rem;
  color: rgba(255,255,255,0.85);
  margin: 0 0 36px;
}
.btn-cta {
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
  color: white;
  padding: 16px 48px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s;
  display: inline-block;
  text-decoration: none;
}
.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(201,169,110,0.4);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Responsive */
@media (max-width: 1200px) {
  .strength-grid { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .hero-carousel { height: 80vh; min-height: 500px; }
  .slide-overlay h1 { font-size: 2rem; }
  .slide-overlay .subtitle { font-size: 1rem; }
  .carousel-btn { width: 44px; height: 44px; }
  .carousel-btn.prev { left: 16px; }
  .carousel-btn.next { right: 16px; }
  .carousel-dots { bottom: 24px; }
  .factory-strength, .products-preview, .why-us, .cta-section { padding: 60px 0; }
  .strength-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .strength-card { padding: 32px 20px; }
  .strength-num { font-size: 2.2rem; }
  .product-grid { grid-template-columns: 1fr; gap: 32px; }
  .features-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .cta-box h2 { font-size: 1.8rem; }
  .section-title h2 { font-size: 1.8rem; }
}
</style>
