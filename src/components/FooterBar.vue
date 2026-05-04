<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/favicon.svg" alt="Ssmee" width="32" height="32" />
            <span>Ssmee</span>
          </div>
          <p class="footer-desc">{{ t('brand.tagline') }}</p>
          <div class="social-links">
            <a href="#" aria-label="WhatsApp">💬 WhatsApp</a>
            <a href="#" aria-label="WeChat">💙 WeChat</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4>{{ t('nav.products') }}</h4>
          <ul>
            <li><router-link to="/products/tissue">{{ t('products.tissue.name') }}</router-link></li>
            <li><router-link to="/products/bottom-drawer">{{ t('products.bottomDrawer.name') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>{{ t('nav.about') }}</h4>
          <ul>
            <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
            <li><router-link to="/certification">{{ t('nav.certification') }}</router-link></li>
            <li><router-link to="/contact">{{ t('nav.contact') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>{{ t('nav.cooperation') }}</h4>
          <ul>
            <li><router-link to="/cooperation">OEM/ODM</router-link></li>
            <li><router-link to="/cooperation">{{ t('cooperation.models.0') }}</router-link></li>
            <li><router-link to="/contact">{{ t('cooperation.contact') }}</router-link></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ t('footer.rights') }}</p>
        <p>技术支持：<a href="https://www.soonyet.cn" target="_blank" style="color:rgba(255,255,255,0.6);text-decoration:none;">贤乐科技 www.soonyet.cn</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: var(--color-primary);
  color: white;
  padding: 60px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.footer-logo span {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  margin: 0 0 20px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  transition: color 0.2s;
}

.social-links a:hover {
  color: var(--color-gold);
}

.footer-col h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 16px;
  color: var(--color-gold);
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul a {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  transition: color 0.2s;
}

.footer-col ul a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.15);
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  margin: 0;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 767px) {
  .footer {
    padding: 40px 0 0;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>