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
                <h1 class="fade-up" :class="{ visible: currentSlide === i }">{{ t('hero.title') }}</h1>
                <p class="subtitle fade-up delay-1" :class="{ visible: currentSlide === i }">{{ t('hero.subtitle') }}</p>
                <div class="hero-btns fade-up delay-2" :class="{ visible: currentSlide === i }">
                  <router-link to="/contact" class="btn btn-primary">{{ t('hero.cta') }}</router-link>
                  <router-link to="/products" class="btn btn-outline">{{ t('hero.secondary') }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Navigation -->
        <button class="carousel-btn prev" @click="prevSlide" aria-label="Previous">‹</button>
        <button class="carousel-btn next" @click="nextSlide" aria-label="Next">›</button>
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
          <div class="strength-card" v-for="(item, i) in strengthItems" :key="i">
            <div class="strength-icon">{{ item.icon }}</div>
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
          <div class="product-card">
            <div class="product-img">
              <img src="/images/tissue-pack.jpg" alt="Ssmee Facial Tissue" />
              <div class="product-badge">{{ t('home.hot') }}</div>
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
              <div class="product-badge">{{ t('home.popular') }}</div>
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
          <div class="feature" v-for="(f, i) in whyFeatures" :key="i">
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
})
onUnmounted(() => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
})

const strengthItems = [
  { icon: '🏭', num: '20+' },
  { icon: '📦', num: '5000+' },
  { icon: '🌍', num: '15+' },
  { icon: '👨‍💼', num: '100+' }
]

const whyFeatures = [
  { icon: '🏭' },
  { icon: '🚀' },
  { icon: '🤝' },
  { icon: '✨' }
]
</script>

<style scoped>
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
  background: linear-gradient(135deg, rgba(26,58,92,0.85) 0%, rgba(15,42,74,0.75) 100%);
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
.btn-outline {
  padding: 14px 32px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
}
.btn-outline:hover {
  border-color: white;
  background: rgba(255,255,255,0.15);
}

/* Fade animations */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
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
  font-size: 28px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
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
  font-size: 3rem;
  margin-bottom: 16px;
}
.strength-num {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-primary);
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
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 32px rgba(26,58,92,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(26,58,92,0.18);
}
.product-img {
  height: 320px;
  position: relative;
  overflow: hidden;
}
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.product-card:hover .product-img img {
  transform: scale(1.05);
}
.product-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--color-gold);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
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
.product-info .desc {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.7;
  margin: 0 0 20px;
}
.btn-ghost {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s;
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
.feature {
  background: white;
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  transition: all 0.4s;
  border: 1px solid transparent;
}
.feature:hover {
  border-color: var(--color-gold);
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(26,58,92,0.1);
}
.feature .icon {
  font-size: 3rem;
  margin-bottom: 20px;
}
.feature h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 12px;
}
.feature p {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.7;
  margin: 0;
}

/* CTA */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #1A3A5C, #0F2A4A);
}
.cta-box {
  background: linear-gradient(135deg, var(--color-gold), #B8966A);
  border-radius: 24px;
  padding: 80px 60px;
  text-align: center;
  color: white;
}
.cta-box h2 {
  font-size: 2.4rem;
  margin: 0 0 16px;
  font-weight: 700;
}
.cta-box p {
  font-size: 1.15rem;
  opacity: 0.95;
  margin: 0 0 36px;
}
.btn-gold {
  background: white;
  color: var(--color-primary);
  padding: 16px 48px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s;
  display: inline-block;
}
.btn-gold:hover {
  background: var(--color-bg);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
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
}
.section-title p {
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 0;
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
  .carousel-btn { width: 44px; height: 44px; font-size: 22px; }
  .carousel-btn.prev { left: 16px; }
  .carousel-btn.next { right: 16px; }
  .carousel-dots { bottom: 24px; }
  .strength-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .strength-card { padding: 32px 20px; }
  .strength-num { font-size: 2.2rem; }
  .product-grid { grid-template-columns: 1fr; gap: 32px; }
  .product-img { height: 240px; }
  .features-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .cta-box { padding: 48px 24px; }
  .cta-box h2 { font-size: 1.8rem; }
  .section-title h2 { font-size: 1.8rem; }
}
</style>
