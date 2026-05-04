<template>
  <div class="certification-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('cert.title') }}</h1>
        <p class="subtitle">{{ $t('cert.subtitle') }}</p>
      </div>
    </section>

    <!-- Quality System -->
    <section class="quality-system">
      <div class="container">
        <h2>{{ $t('cert.quality.title') }}</h2>
        <div class="cert-grid">
          <div class="cert-card" v-for="(cert, index) in qualityCerts" :key="index">
            <div class="cert-badge">{{ cert.code }}</div>
            <h3>{{ $t(cert.nameKey) }}</h3>
            <p>{{ $t(cert.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Certifications -->
    <section class="product-certs">
      <div class="container">
        <h2>{{ $t('cert.product.title') }}</h2>
        <div class="cert-grid">
          <div class="cert-card highlight" v-for="(cert, index) in productCerts" :key="index">
            <div class="cert-badge">{{ cert.code }}</div>
            <h3>{{ $t(cert.nameKey) }}</h3>
            <p>{{ $t(cert.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Export Qualifications -->
    <section class="export-qual">
      <div class="container">
        <h2>{{ $t('cert.export.title') }}</h2>
        <div class="export-list">
          <div class="export-item" v-for="(item, index) in exportItems" :key="index">
            <span class="export-icon">✓</span>
            <span>{{ $t(item) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Factory Images -->
    <section class="factory-showcase">
      <div class="container">
        <h2>{{ $t('cert.factory.title') }}</h2>
        <p class="factory-desc">{{ $t('cert.factory.desc') }}</p>
        <div class="factory-features">
          <div class="feature" v-for="(feature, index) in factoryFeatures" :key="index">
            <span class="feature-icon">{{ feature.icon }}</span>
            <span>{{ $t(feature.textKey) }}</span>
          </div>
        </div>
        <div class="factory-images-grid">
          <div class="factory-img-item" v-for="(img, i) in factoryImages" :key="i">
            <img :src="img.src" :alt="img.alt" />
          </div>
        </div>
      </div>
    </section>

    <!-- Certificates Display -->
    <section class="cert-display">
      <div class="container">
        <h2>资质证书展示</h2>
        <p class="cert-display-note">以下证书仅供展示，如需验证请联系客服</p>
        <div class="cert-images-grid">
          <div class="cert-img-item" v-for="(cert, i) in certImages" :key="i">
            <div class="cert-img-wrap">
              <img :src="cert.src" :alt="cert.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Test Reports Download -->
    <section class="reports-section">
      <div class="container">
        <h2>检测报告下载</h2>
        <p class="reports-desc">点击下方链接可查看/保存检测报告</p>
        <div class="reports-lang-tabs">
          <button :class="{ active: reportLang === 'zh' }" @click="reportLang = 'zh'">中文</button>
          <button :class="{ active: reportLang === 'en' }" @click="reportLang = 'en'">English</button>
          <button :class="{ active: reportLang === 'ru' }" @click="reportLang = 'ru'">Русский</button>
        </div>
        <div class="reports-grid">
          <div class="report-item" v-for="(report, i) in currentReports" :key="i">
            <div class="report-preview">
              <img :src="report.src" :alt="report.name" />
            </div>
            <div class="report-info">
              <span class="report-name">{{ report.name }}</span>
              <a :href="report.src" target="_blank" class="report-dl-btn">查看/保存</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Control Process -->
    <section class="qc-process">
      <div class="container">
        <h2>{{ $t('cert.qc.title') }}</h2>
        <div class="process-steps">
          <div class="step" v-for="(step, index) in qcSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ $t(step.titleKey) }}</h3>
            <p>{{ $t(step.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const qualityCerts = [
  { code: 'ISO 9001', nameKey: 'cert.quality.iso9001.name', descKey: 'cert.quality.iso9001.desc' },
  { code: 'ISO 14001', nameKey: 'cert.quality.iso14001.name', descKey: 'cert.quality.iso14001.desc' },
  { code: 'ISO 45001', nameKey: 'cert.quality.iso45001.name', descKey: 'cert.quality.iso45001.desc' }
]

const productCerts = [
  { code: 'CE', nameKey: 'cert.product.ce.name', descKey: 'cert.product.ce.desc' },
  { code: 'FDA', nameKey: 'cert.product.fda.name', descKey: 'cert.product.fda.desc' },
  { code: 'SC', nameKey: 'cert.product.sc.name', descKey: 'cert.product.sc.desc' }
]

const exportItems = [
  'cert.export.item1',
  'cert.export.item2',
  'cert.export.item3',
  'cert.export.item4'
]

const factoryFeatures = [
  { icon: '🏭', textKey: 'cert.factory.f1' },
  { icon: '🔬', textKey: 'cert.factory.f2' },
  { icon: '📦', textKey: 'cert.factory.f3' },
  { icon: '🌿', textKey: 'cert.factory.f4' }
]

const qcSteps = [
  { titleKey: 'cert.qc.s1.title', descKey: 'cert.qc.s1.desc' },
  { titleKey: 'cert.qc.s2.title', descKey: 'cert.qc.s2.desc' },
  { titleKey: 'cert.qc.s3.title', descKey: 'cert.qc.s3.desc' },
  { titleKey: 'cert.qc.s4.title', descKey: 'cert.qc.s4.desc' }
]

// 工厂实拍图片
const factoryImages = [
  { src: '/images/factory-1.jpg', alt: '时时美工厂实拍 1' },
  { src: '/images/factory-2.jpg', alt: '时时美工厂实拍 2' },
  { src: '/images/factory-3.jpg', alt: '时时美工厂实拍 3' },
  { src: '/images/factory-4.jpg', alt: '时时美工厂实拍 4' },
  { src: '/images/factory-5.jpg', alt: '时时美工厂实拍 5' }
]

// 资质证书图片（仅展示，不可下载）
const certImages = [
  { src: '/images/cert-1.png', alt: '资质证书 1' },
  { src: '/images/cert-2.png', alt: '资质证书 2' },
  { src: '/images/cert-3.png', alt: '资质证书 3' },
  { src: '/images/cert-4.png', alt: '资质证书 4' },
  { src: '/images/cert-5.png', alt: '资质证书 5' },
  { src: '/images/cert-6.png', alt: '资质证书 6' }
]

// 检测报告数据
const reports = {
  zh: [
    { name: '检测报告 1', src: '/files/report-zh-1.jpg' },
    { name: '检测报告 2', src: '/files/report-zh-2.jpg' },
    { name: '检测报告 3', src: '/files/report-zh-3.jpg' },
    { name: '检测报告 4', src: '/files/report-zh-4.jpg' },
    { name: '检测报告 5', src: '/files/report-zh-5.jpg' }
  ],
  en: [
    { name: 'Test Report 1', src: '/files/report-en-1.jpg' },
    { name: 'Test Report 2', src: '/files/report-en-2.jpg' },
    { name: 'Test Report 3', src: '/files/report-en-3.jpg' },
    { name: 'Test Report 4', src: '/files/report-en-4.jpg' },
    { name: 'Test Report 5', src: '/files/report-en-5.jpg' }
  ],
  ru: [
    { name: 'Протокол испытаний 1', src: '/files/report-ru-1.jpg' },
    { name: 'Протокол испытаний 2', src: '/files/report-ru-2.jpg' },
    { name: 'Протокол испытаний 3', src: '/files/report-ru-3.jpg' },
    { name: 'Протокол испытаний 4', src: '/files/report-ru-4.jpg' },
    { name: 'Протокол испытаний 5', src: '/files/report-ru-5.jpg' }
  ]
}

import { ref, computed } from 'vue'
const reportLang = ref('zh')
const currentReports = computed(() => reports[reportLang.value] || reports.zh)
</script>

<style scoped>
.certification-page {
  padding-top: 80px;
}

.hero {
  background: linear-gradient(135deg, #1A3A5C 0%, #0D7D8A 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.quality-system, .product-certs, .export-qual, .factory-showcase, .qc-process {
  padding: 80px 0;
}

.quality-system, .export-qual {
  background: #f8f9fa;
}

h2 {
  font-size: 2rem;
  color: #1A3A5C;
  text-align: center;
  margin-bottom: 50px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.cert-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.cert-card:hover {
  transform: translateY(-5px);
}

.cert-card.highlight {
  border: 2px solid #F5A623;
}

.cert-badge {
  display: inline-block;
  background: #0D7D8A;
  color: white;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.cert-card.highlight .cert-badge {
  background: #F5A623;
}

.cert-card h3 {
  font-size: 1.3rem;
  color: #1A3A5C;
  margin-bottom: 0.5rem;
}

.cert-card p {
  color: #666;
  line-height: 1.6;
}

.export-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.export-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.export-icon {
  width: 30px;
  height: 30px;
  background: #F5A623;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.factory-desc {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.factory-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.feature {
  text-align: center;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
}

.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.step {
  text-align: center;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
  position: relative;
}

.step-number {
  width: 50px;
  height: 50px;
  background: #F5A623;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.step h3 {
  font-size: 1.1rem;
  color: #1A3A5C;
  margin-bottom: 0.5rem;
}

.step p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Factory Images Grid */
.factory-images-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 40px;
}
.factory-img-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
.factory-img-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

/* Certificate Display (no download) */
.cert-display {
  padding: 80px 0;
  background: #fff;
}
.cert-display-note {
  text-align: center;
  color: #999;
  font-size: 0.85rem;
  margin-bottom: 40px;
  margin-top: -30px;
}
.cert-images-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.cert-img-item {}
.cert-img-wrap {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  background: #fafafa;
}
.cert-img-wrap img {
  width: 100%;
  height: auto;
  display: block;
  /* 禁止下载和右键 */
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

/* Reports Section */
.reports-section {
  padding: 80px 0;
  background: #f8f9fa;
}
.reports-desc {
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 40px;
  margin-top: -30px;
}
.reports-lang-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}
.reports-lang-tabs button {
  padding: 8px 24px;
  border: 2px solid #1A3A5C;
  border-radius: 30px;
  background: white;
  color: #1A3A5C;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.reports-lang-tabs button.active,
.reports-lang-tabs button:hover {
  background: #1A3A5C;
  color: white;
}
.reports-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.report-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.report-preview {
  overflow: hidden;
}
.report-preview img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
.report-info {
  padding: 16px;
  text-align: center;
}
.report-name {
  display: block;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 10px;
}
.report-dl-btn {
  display: inline-block;
  padding: 6px 16px;
  background: #1A3A5C;
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  text-decoration: none;
  transition: background 0.2s;
}
.report-dl-btn:hover {
  background: #0F2A4A;
}


@media (max-width: 1024px) {
  .factory-images-grid { grid-template-columns: repeat(3, 1fr); }
  .cert-images-grid { grid-template-columns: repeat(2, 1fr); }
  .reports-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 992px) {
  .cert-grid { grid-template-columns: repeat(2, 1fr); }
  .factory-features, .process-steps { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero h1 { font-size: 2rem; }
  .cert-grid, .export-list, .factory-features, .process-steps { grid-template-columns: 1fr; }
  .factory-images-grid { grid-template-columns: repeat(2, 1fr); }
  .cert-images-grid { grid-template-columns: 1fr; }
  .reports-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .factory-images-grid { grid-template-columns: 1fr; }
  .reports-grid { grid-template-columns: 1fr; }
}

</style>
