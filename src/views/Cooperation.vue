<template>
  <div class="cooperation-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('coop.title') }}</h1>
        <p class="subtitle">{{ $t('coop.subtitle') }}</p>
      </div>
    </section>

    <!-- Advantages -->
    <section class="advantages">
      <div class="container">
        <h2>{{ $t('coop.advantages.title') }}</h2>
        <div class="adv-grid">
          <div class="adv-card" v-for="(adv, index) in advantages" :key="index">
            <div class="adv-icon">{{ adv.icon }}</div>
            <h3>{{ $t(adv.titleKey) }}</h3>
            <p>{{ $t(adv.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cooperation Models -->
    <section class="models">
      <div class="container">
        <h2>{{ $t('coop.models.title') }}</h2>
        <div class="model-grid">
          <div class="model-card" v-for="(model, index) in models" :key="index">
            <div class="model-number">{{ index + 1 }}</div>
            <h3>{{ $t(model.titleKey) }}</h3>
            <p>{{ $t(model.descKey) }}</p>
            <ul>
              <li v-for="(feature, fIndex) in model.features" :key="fIndex">
                {{ $t(feature) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section class="support">
      <div class="container">
        <h2>{{ $t('coop.support.title') }}</h2>
        <div class="support-grid">
          <div class="support-item" v-for="(item, index) in supportItems" :key="index">
            <span class="support-icon">{{ item.icon }}</span>
            <span>{{ $t(item.textKey) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="process">
      <div class="container">
        <h2>{{ $t('coop.process.title') }}</h2>
        <div class="process-timeline">
          <div class="process-step" v-for="(step, index) in processSteps" :key="index">
            <div class="step-marker">
              <span class="step-num">{{ index + 1 }}</span>
            </div>
            <div class="step-content">
              <h3>{{ $t(step.titleKey) }}</h3>
              <p>{{ $t(step.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <h2>{{ $t('coop.cta.title') }}</h2>
        <p>{{ $t('coop.cta.desc') }}</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="cta-btn primary">
            {{ $t('coop.cta.contact') }}
          </router-link>
          <a href="tel:+8615377731411" class="cta-btn secondary">
            {{ $t('coop.cta.call') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const advantages = [
  { icon: '🏭', titleKey: 'coop.advantages.a1.title', descKey: 'coop.advantages.a1.desc' },
  { icon: '📦', titleKey: 'coop.advantages.a2.title', descKey: 'coop.advantages.a2.desc' },
  { icon: '💰', titleKey: 'coop.advantages.a3.title', descKey: 'coop.advantages.a3.desc' },
  { icon: '🌍', titleKey: 'coop.advantages.a4.title', descKey: 'coop.advantages.a4.desc' }
]

const models = [
  {
    titleKey: 'coop.models.m1.title',
    descKey: 'coop.models.m1.desc',
    features: ['coop.models.m1.f1', 'coop.models.m1.f2', 'coop.models.m1.f3']
  },
  {
    titleKey: 'coop.models.m2.title',
    descKey: 'coop.models.m2.desc',
    features: ['coop.models.m2.f1', 'coop.models.m2.f2', 'coop.models.m2.f3']
  },
  {
    titleKey: 'coop.models.m3.title',
    descKey: 'coop.models.m3.desc',
    features: ['coop.models.m3.f1', 'coop.models.m3.f2', 'coop.models.m3.f3']
  }
]

const supportItems = [
  { icon: '🎓', textKey: 'coop.support.s1' },
  { icon: '📊', textKey: 'coop.support.s2' },
  { icon: '🎨', textKey: 'coop.support.s3' },
  { icon: '🚚', textKey: 'coop.support.s4' },
  { icon: '🛡️', textKey: 'coop.support.s5' },
  { icon: '📈', textKey: 'coop.support.s6' }
]

const processSteps = [
  { titleKey: 'coop.process.p1.title', descKey: 'coop.process.p1.desc' },
  { titleKey: 'coop.process.p2.title', descKey: 'coop.process.p2.desc' },
  { titleKey: 'coop.process.p3.title', descKey: 'coop.process.p3.desc' },
  { titleKey: 'coop.process.p4.title', descKey: 'coop.process.p4.desc' }
]
</script>

<style scoped>
.cooperation-page {
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

.advantages, .models, .support, .process, .cta {
  padding: 80px 0;
}

.advantages, .support {
  background: #F7F9F4;
}

h2 {
  font-size: 2rem;
  color: #2B4D1A;
  text-align: center;
  margin-bottom: 50px;
}

.adv-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.adv-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.adv-card:hover {
  transform: translateY(-5px);
}

.adv-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.adv-card h3 {
  font-size: 1.2rem;
  color: #2B4D1A;
  margin-bottom: 0.5rem;
}

.adv-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.model-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.model-card {
  background: #F7F9F4;
  padding: 40px 30px;
  border-radius: 12px;
  position: relative;
}

.model-number {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #C9A96E;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.model-card h3 {
  font-size: 1.3rem;
  color: #2B4D1A;
  margin-bottom: 0.5rem;
}

.model-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.model-card ul {
  list-style: none;
  padding: 0;
}

.model-card li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: #333;
  font-size: 0.95rem;
}

.model-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4A7C3F;
  font-weight: bold;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.support-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.support-icon {
  font-size: 2rem;
}

.process-timeline {
  max-width: 700px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 60px;
  bottom: -20px;
  width: 2px;
  background: #4A7C3F;
}

.step-marker {
  flex-shrink: 0;
}

.step-num {
  width: 50px;
  height: 50px;
  background: #C9A96E;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.step-content h3 {
  font-size: 1.3rem;
  color: #2B4D1A;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #666;
  line-height: 1.6;
}

.cta {
  background: linear-gradient(135deg, #2B4D1A 0%, #1B3509 100%);
  color: white;
  text-align: center;
}

.cta h2 {
  color: white;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cta-btn {
  padding: 15px 40px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-btn.primary {
  background: #C9A96E;
  color: white;
}

.cta-btn.primary:hover {
  background: #B8945A;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-btn.secondary:hover {
  background: white;
  color: #2B4D1A;
}

/* Responsive */
@media (max-width: 992px) {
  .adv-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .model-grid {
    grid-template-columns: 1fr;
  }
  
  .support-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .adv-grid, .support-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
