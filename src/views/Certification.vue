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

/* Responsive */
@media (max-width: 992px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .factory-features, .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .cert-grid, .export-list, .factory-features, .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
