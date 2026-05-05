<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('about.title') }}</h1>
        <p class="subtitle">{{ $t('about.subtitle') }}</p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="overview">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-text">
            <h2>{{ $t('about.overview.title') }}</h2>
            <p>{{ $t('about.overview.desc1') }}</p>
            <p>{{ $t('about.overview.desc2') }}</p>
          </div>
          <div class="overview-stats">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">{{ $t('about.stats.years') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">{{ $t('about.stats.employees') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50,000㎡</span>
              <span class="stat-label">{{ $t('about.stats.factory') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">{{ $t('about.stats.countries') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="history">
      <div class="container">
        <h2>{{ $t('about.history.title') }}</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in historyItems" :key="index">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h3>{{ $t(item.titleKey) }}</h3>
              <p>{{ $t(item.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values">
      <div class="container">
        <h2>{{ $t('about.values.title') }}</h2>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ $t(value.titleKey) }}</h3>
            <p>{{ $t(value.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Preview -->
    <section class="cert-preview">
      <div class="container">
        <h2>{{ $t('about.certifications.title') }}</h2>
        <p class="cert-desc">{{ $t('about.certifications.desc') }}</p>
        <router-link to="/certification" class="view-cert-btn">
          {{ $t('about.certifications.viewAll') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const historyItems = [
  { year: '2008', titleKey: 'about.history.h1.title', descKey: 'about.history.h1.desc' },
  { year: '2012', titleKey: 'about.history.h2.title', descKey: 'about.history.h2.desc' },
  { year: '2018', titleKey: 'about.history.h3.title', descKey: 'about.history.h3.desc' },
  { year: '2023', titleKey: 'about.history.h4.title', descKey: 'about.history.h4.desc' }
]

const values = [
  { icon: '🎯', titleKey: 'about.values.v1.title', descKey: 'about.values.v1.desc' },
  { icon: '✨', titleKey: 'about.values.v2.title', descKey: 'about.values.v2.desc' },
  { icon: '🌍', titleKey: 'about.values.v3.title', descKey: 'about.values.v3.desc' },
  { icon: '🤝', titleKey: 'about.values.v4.title', descKey: 'about.values.v4.desc' }
]
</script>

<style scoped>
.about-page {
  padding-top: 80px;
}

.hero {
  background: linear-gradient(135deg, #2B4D1A 0%, #1B3509 100%);
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

.overview {
  padding: 80px 0;
  background: #F7F9F4;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.overview-text h2 {
  font-size: 2rem;
  color: #2B4D1A;
  margin-bottom: 1.5rem;
}

.overview-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1rem;
}

.overview-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #C9A96E;
}

.stat-label {
  display: block;
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
}

.history {
  padding: 80px 0;
}

.history h2 {
  font-size: 2rem;
  color: #2B4D1A;
  text-align: center;
  margin-bottom: 60px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #4A7C3F;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 50px;
  position: relative;
}

.timeline-year {
  width: 80px;
  height: 80px;
  background: #C9A96E;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-content {
  width: 45%;
  padding: 30px;
  background: #F7F9F4;
  border-radius: 12px;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: auto;
  margin-right: calc(50% + 60px);
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: calc(50% + 60px);
}

.timeline-content h3 {
  font-size: 1.3rem;
  color: #2B4D1A;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
}

.values {
  padding: 80px 0;
  background: #F7F9F4;
}

.values h2 {
  font-size: 2rem;
  color: #2B4D1A;
  text-align: center;
  margin-bottom: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.2rem;
  color: #2B4D1A;
  margin-bottom: 0.5rem;
}

.value-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.cert-preview {
  padding: 80px 0;
  text-align: center;
}

.cert-preview h2 {
  font-size: 2rem;
  color: #2B4D1A;
  margin-bottom: 1rem;
}

.cert-desc {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.view-cert-btn {
  display: inline-block;
  padding: 15px 40px;
  background: #C9A96E;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s;
}

.view-cert-btn:hover {
  background: #B8945A;
}

/* Responsive */
@media (max-width: 992px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .timeline::before {
    left: 40px;
  }
  
  .timeline-year {
    left: 40px;
    width: 60px;
    height: 60px;
    font-size: 1rem;
  }
  
  .timeline-content {
    width: calc(100% - 100px);
    margin-left: 100px !important;
    margin-right: 0 !important;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
