<template>
  <div class="certification-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('cert.title') }}</h1>
        <p>{{ t('cert.subtitle') }}</p>
      </div>
    </section>

    <!-- Hygiene License -->
    <section class="cert-section">
      <div class="container">
        <h2 class="section-heading">{{ t('cert.hygiene.title') || '卫生许可证' }}</h2>
        <p class="section-desc">{{ t('cert.hygiene.desc') || '权威认证，品质保障' }}</p>
        <div class="cert-grid">
          <div class="cert-card" v-for="(img, i) in certImages" :key="i">
            <div class="cert-img-wrapper">
              <img :src="img" :alt="`卫生许可证 ${i+1}`" />
              <div class="cert-overlay">
                <button class="zoom-btn" @click="openLightbox(i)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                </button>
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
            <div class="download-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A96E" stroke-width="2">
                <path d="M14 4h20l8 8v28a2 2 0 01-2 2H14a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                <polyline points="28,4 28,12 36,12"/>
                <line x1="20" y1="22" x2="34" y2="22"/>
                <line x1="20" y1="28" x2="34" y2="28"/>
                <line x1="20" y1="34" x2="28" y2="34"/>
              </svg>
            </div>
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



    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <button class="lightbox-nav prev" @click.stop="prevImage">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <img :src="certImages[lightboxIndex]" @click.stop />
      <button class="lightbox-nav next" @click.stop="nextImage">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const certImages = [
  '/images/卫生许可证中文版.jpg',
  '/images/卫生许可证英文版.jpg',
  '/images/卫生许可证俄文版.jpg'
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
  background: linear-gradient(135deg, #2B4D1A 0%, #1B3509 100%);
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
.cert-section, .hygiene-section, .download-section, .factory-section {
  padding: 80px 0;
}
.cert-section { background: white; }
.hygiene-section { background: #F7F9F4; }
.download-section { background: white; }
.factory-section { background: #F7F9F4; }

.section-heading {
  font-size: 2rem;
  color: #2B4D1A;
  text-align: center;
  margin: 0 0 16px;
  font-weight: 700;
}
.section-desc {
  text-align: center;
  color: #6B7280;
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
  box-shadow: 0 4px 20px rgba(43,77,26,0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(43,77,26,0.15);
}
.cert-img-wrapper {
  position: relative;
  aspect-ratio: 10/7;
  overflow: hidden;
  background: #F7F9F4;
  border: 1px solid #E5E7EB;
}
.cert-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s;
}
.cert-card:hover .cert-img-wrapper img {
  transform: scale(1.03);
}
.cert-overlay {
  position: absolute;
  inset: 0;
  background: rgba(43,77,26,0.6);
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
  color: #2B4D1A;
  cursor: pointer;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zoom-btn:hover {
  transform: scale(1.15);
}

/* Hygiene Section */
.hygiene-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.hygiene-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(43,77,26,0.08);
  transition: all 0.4s;
}
.hygiene-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(43,77,26,0.12);
}
.hygiene-img-wrapper {
  aspect-ratio: 3/4;
  overflow: hidden;
  background: #F7F9F4;
}
.hygiene-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
}
.hygiene-info {
  padding: 20px;
  text-align: center;
}
.hygiene-info h3 {
  font-size: 1rem;
  color: #2B4D1A;
  margin: 0 0 16px;
  font-weight: 600;
}

/* Download Section */
.download-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.download-card {
  background: #F7F9F4;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(43,77,26,0.06);
  transition: all 0.4s;
}
.download-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(43,77,26,0.12);
}
.download-icon {
  margin-bottom: 20px;
}
.download-info h3 {
  font-size: 1.1rem;
  color: #2B4D1A;
  margin: 0 0 8px;
  font-weight: 600;
}
.download-info p {
  font-size: 0.85rem;
  color: #6B7280;
  margin: 0 0 24px;
}
.download-btn {
  background: linear-gradient(135deg, #C9A96E 0%, #B8966A 100%);
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,169,110,0.4);
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
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
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
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox-nav:hover {
  background: rgba(255,255,255,0.25);
}
.lightbox-nav.prev { left: 32px; }
.lightbox-nav.next { right: 32px; }

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Responsive */
@media (max-width: 1024px) {
  .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .hygiene-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .factory-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 767px) {
  .page-hero { padding: 100px 0 60px; }
  .page-hero h1 { font-size: 2rem; }
  .cert-grid { grid-template-columns: 1fr; gap: 20px; }
  .hygiene-grid { grid-template-columns: 1fr; gap: 20px; }
  .download-grid { grid-template-columns: 1fr; gap: 20px; }
  .factory-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .lightbox { padding: 16px; }
  .lightbox-nav { width: 44px; height: 44px; }
  .lightbox-nav.prev { left: 12px; }
  .lightbox-nav.next { right: 12px; }
}
</style>
