<template>
  <div class="certification-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('cert.title') }}</h1>
        <p>{{ t('cert.subtitle') }}</p>
      </div>
    </section>

    <!-- Food Safety License -->
    <section class="cert-section">
      <div class="container">
        <h2 class="section-heading">{{ t('cert.foodSafety.title') }}</h2>
        <p class="section-desc">{{ t('cert.foodSafety.desc') }}</p>
        <div class="cert-grid">
          <div class="cert-card" v-for="(img, i) in certImages" :key="i">
            <div class="cert-img-wrapper">
              <img :src="img" :alt="`${t('cert.foodSafety.title')} ${i+1}`" />
              <div class="cert-overlay">
                <button class="zoom-btn" @click="openLightbox(i)">🔍</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Test Reports Download -->
    <section class="download-section">
      <div class="container">
        <h2 class="section-heading">{{ t('cert.reports.title') }}</h2>
        <p class="section-desc">{{ t('cert.reports.desc') }}</p>
        <div class="download-grid">
          <div class="download-card" v-for="(report, i) in reports" :key="i">
            <div class="download-icon">📄</div>
            <div class="download-info">
              <h3>{{ report.name }}</h3>
              <p>{{ report.size }}</p>
            </div>
            <a :href="report.file" class="download-btn" download>
              {{ t('cert.reports.download') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Factory Photos -->
    <section class="factory-section">
      <div class="container">
        <h2 class="section-heading">{{ t('cert.factory.title') }}</h2>
        <p class="section-desc">{{ t('cert.factory.desc') }}</p>
        <div class="factory-grid">
          <div class="factory-card" v-for="(img, i) in factoryImages" :key="i">
            <img :src="img" :alt="`Factory ${i+1}`" />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">✕</button>
      <button class="lightbox-nav prev" @click.stop="prevImage">‹</button>
      <img :src="certImages[lightboxIndex]" @click.stop />
      <button class="lightbox-nav next" @click.stop="nextImage">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const certImages = [
  '/images/certs/资质1.png',
  '/images/certs/资质2.png',
  '/images/certs/资质3.png',
  '/images/certs/资质4.png',
  '/images/certs/资质5.png',
  '/images/certs/资质6.png'
]

const factoryImages = [
  '/images/factory-1.jpg',
  '/images/factory-2.jpg',
  '/images/factory-3.jpg',
  '/images/factory-4.jpg',
  '/images/factory-5.jpg'
]

const reports = [
  { name: '检测报告-中文.pdf', size: '708 KB', file: '/files/检测报告-中文.pdf' },
  { name: '检测报告-英文.pdf', size: '810 KB', file: '/files/检测报告-英文.pdf' },
  { name: '检测报告-俄文.pdf', size: '984 KB', file: '/files/检测报告-俄文.pdf' }
]

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (i) => {
  lightboxIndex.value = i
  lightboxOpen.value = true
}
const closeLightbox = () => { lightboxOpen.value = false }
const prevImage = () => { lightboxIndex.value = (lightboxIndex.value - 1 + certImages.length) % certImages.length }
const nextImage = () => { lightboxIndex.value = (lightboxIndex.value + 1) % certImages.length }
</script>

<style scoped>
/* Hero */
.page-hero {
  background: linear-gradient(135deg, #1A3A5C, #0F2A4A);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}
.page-hero h1 {
  font-size: 2.8rem;
  margin: 0 0 16px;
  font-weight: 700;
}
.page-hero p {
  font-size: 1.1rem;
  opacity: 0.85;
  margin: 0;
}

/* Section */
.cert-section, .download-section, .factory-section {
  padding: 80px 0;
}
.cert-section { background: white; }
.download-section { background: var(--color-bg); }
.factory-section { background: white; }

.section-heading {
  font-size: 2rem;
  color: var(--color-primary);
  text-align: center;
  margin: 0 0 16px;
  font-weight: 700;
}
.section-desc {
  text-align: center;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto 48px;
  font-size: 1rem;
  line-height: 1.7;
}

/* Cert Grid */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.cert-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(26,58,92,0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(26,58,92,0.15);
}
.cert-img-wrapper {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: #f5f7fa;
}
.cert-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
  transition: transform 0.4s;
}
.cert-card:hover .cert-img-wrapper img {
  transform: scale(1.03);
}
.cert-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26,58,92,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}
.cert-card:hover .cert-overlay {
  opacity: 1;
}
.zoom-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s;
}
.zoom-btn:hover {
  transform: scale(1.15);
}

/* Download Section */
.download-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.download-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(26,58,92,0.06);
  transition: all 0.4s;
}
.download-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(26,58,92,0.12);
}
.download-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}
.download-info h3 {
  font-size: 1.1rem;
  color: var(--color-primary);
  margin: 0 0 8px;
  font-weight: 600;
}
.download-info p {
  font-size: 0.85rem;
  color: var(--color-text-light);
  margin: 0 0 24px;
}
.download-btn {
  background: var(--color-gold);
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s;
  text-decoration: none;
}
.download-btn:hover {
  background: #B8966A;
  transform: translateY(-2px);
}

/* Factory Grid */
.factory-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.factory-card {
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
}
.factory-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.factory-card:hover img {
  transform: scale(1.08);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.lightbox img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}
.lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.3s;
}
.lightbox-close:hover {
  background: rgba(255,255,255,0.25);
}
.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 28px;
  cursor: pointer;
  transition: background 0.3s;
}
.lightbox-nav:hover {
  background: rgba(255,255,255,0.25);
}
.lightbox-nav.prev { left: 32px; }
.lightbox-nav.next { right: 32px; }

/* Responsive */
@media (max-width: 1024px) {
  .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .factory-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 767px) {
  .page-hero { padding: 100px 0 60px; }
  .page-hero h1 { font-size: 2rem; }
  .cert-grid { grid-template-columns: 1fr; gap: 20px; }
  .download-grid { grid-template-columns: 1fr; gap: 20px; }
  .factory-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .lightbox { padding: 16px; }
  .lightbox-nav { width: 44px; height: 44px; font-size: 22px; }
  .lightbox-nav.prev { left: 12px; }
  .lightbox-nav.next { right: 12px; }
}
</style>
