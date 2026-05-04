<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('contact.title') }}</h1>
        <p class="subtitle">{{ $t('contact.subtitle') }}</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2>{{ $t('contact.info.title') }}</h2>
            
            <div class="info-item">
              <span class="info-icon">📍</span>
              <div>
                <h3>{{ $t('contact.info.address.label') }}</h3>
                <p>{{ $t('contact.info.address.value') }}</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">👤</span>
              <div>
                <h3>{{ $t('contact.info.manager.label') || '负责人' }}</h3>
                <p>张经理</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📞</span>
              <div>
                <h3>{{ $t('contact.info.phone.label') }}</h3>
                <p>+86 153-7773-1411</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">💬</span>
              <div>
                <h3>{{ $t('contact.info.wechat.label') || '微信' }}</h3>
                <p>soonyetclub</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📧</span>
              <div>
                <h3>{{ $t('contact.info.email.label') }}</h3>
                <p>183921494@qq.com</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">⏰</span>
              <div>
                <h3>{{ $t('contact.info.hours.label') }}</h3>
                <p>{{ $t('contact.info.hours.value') }}</p>
              </div>
            </div>
          </div>

          <!-- Inquiry Form -->
          <div class="inquiry-form">
            <h2>{{ $t('contact.form.title') }}</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label>{{ $t('contact.form.company') }} *</label>
                <input type="text" v-model="form.company" required>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label>{{ $t('contact.form.name') }} *</label>
                  <input type="text" v-model="form.name" required>
                </div>
                <div class="form-group">
                  <label>{{ $t('contact.form.phone') }} *</label>
                  <input type="tel" v-model="form.phone" required>
                </div>
              </div>
              
              <div class="form-group">
                <label>{{ $t('contact.form.email') }} *</label>
                <input type="email" v-model="form.email" required>
              </div>
              
              <div class="form-group">
                <label>{{ $t('contact.form.country') }}</label>
                <select v-model="form.country">
                  <option value="">{{ $t('contact.form.selectCountry') }}</option>
                  <option value="CN">中国</option>
                  <option value="RU">Россия</option>
                  <option value="SG">Singapore</option>
                  <option value="MY">Malaysia</option>
                  <option value="TH">Thailand</option>
                  <option value="VN">Vietnam</option>
                  <option value="OTHER">{{ $t('contact.form.other') }}</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>{{ $t('contact.form.product') }}</label>
                <select v-model="form.product">
                  <option value="">{{ $t('contact.form.selectProduct') }}</option>
                  <option value="tissue">{{ $t('contact.form.tissue') }}</option>
                  <option value="bottom">{{ $t('contact.form.bottom') }}</option>
                  <option value="both">{{ $t('contact.form.both') }}</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>{{ $t('contact.form.quantity') }}</label>
                <input type="text" v-model="form.quantity" :placeholder="$t('contact.form.quantityPlaceholder')">
              </div>
              
              <div class="form-group">
                <label>{{ $t('contact.form.message') }} *</label>
                <textarea v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="submitting">
                {{ submitting ? $t('contact.form.submitting') : $t('contact.form.submit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="map-section">
      <div class="container">
        <h2>{{ $t('contact.map.title') }}</h2>
        <div class="map-placeholder">
          <p>{{ $t('contact.map.placeholder') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  company: '',
  name: '',
  phone: '',
  email: '',
  country: '',
  product: '',
  quantity: '',
  message: ''
})

const submitting = ref(false)

const submitForm = async () => {
  submitting.value = true
  // TODO: Send to Supabase or email endpoint
  setTimeout(() => {
    alert(t('contact.form.success'))
    submitting.value = false
    // Reset form
    Object.keys(form.value).forEach(key => form.value[key] = '')
  }, 1500)
}
</script>

<style scoped>
.contact-page {
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

.contact-main {
  padding: 80px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
}

.contact-info h2, .inquiry-form h2 {
  font-size: 1.8rem;
  color: #1A3A5C;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.info-icon {
  font-size: 2rem;
}

.info-item h3 {
  font-size: 1rem;
  color: #666;
  margin-bottom: 5px;
}

.info-item p {
  font-size: 1.1rem;
  color: #1A3A5C;
  font-weight: 500;
}

.inquiry-form form {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

input, select, textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #0D7D8A;
}

textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: #F5A623;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #d8941f;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.map-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.map-section h2 {
  font-size: 1.8rem;
  color: #1A3A5C;
  text-align: center;
  margin-bottom: 30px;
}

.map-placeholder {
  height: 300px;
  background: #ddd;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder p {
  color: #666;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .inquiry-form form {
    padding: 25px;
  }
}
</style>
