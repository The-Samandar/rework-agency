<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <RouterLink to="/" class="footer-logo">Rework<span>.</span></RouterLink>
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
          <a
            href="https://t.me/reworkagencybot"
            target="_blank"
            rel="noopener noreferrer"
            class="tg-mini"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.546c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.257l-2.947-.924c-.641-.202-.654-.641.136-.949l11.498-4.432c.537-.194 1.006.131.615.296z"/>
            </svg>
            @reworkagencybot
          </a>
        </div>

        <!-- Services -->
        <div class="footer-col">
          <h5>{{ t('footer.services') }}</h5>
          <RouterLink to="/services">{{ t('footer.links.webDev') }}</RouterLink>
          <RouterLink to="/services">{{ t('footer.links.uiux') }}</RouterLink>
          <RouterLink to="/services">{{ t('footer.links.ads') }}</RouterLink>
          <RouterLink to="/services">{{ t('footer.links.smm') }}</RouterLink>
          <RouterLink to="/services">{{ t('footer.links.chatbot') }}</RouterLink>
          <RouterLink to="/services">{{ t('footer.links.bi') }}</RouterLink>
        </div>

        <!-- Company -->
        <div class="footer-col">
          <h5>{{ t('footer.company') }}</h5>
          <RouterLink to="/">{{ t('footer.links.home') }}</RouterLink>
          <RouterLink to="/cases">{{ t('footer.links.cases') }}</RouterLink>
          <RouterLink to="/about">{{ t('footer.links.about') }}</RouterLink>
          <RouterLink to="/blog">{{ t('footer.links.blog') }}</RouterLink>
          <RouterLink to="/contacts">{{ t('footer.links.contacts') }}</RouterLink>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h5>{{ t('footer.contact') }}</h5>
          <a href="mailto:hello@reworkagency.com">{{ t('footer.links.telegram') }}</a>
          <a href="https://t.me/reworkagencybot" target="_blank" rel="noopener">Telegram</a>
          <a href="#">{{ t('footer.links.instagram') }}</a>
          <a href="#">{{ t('footer.links.linkedin') }}</a>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <span class="footer-copy">{{ t('footer.copyright') }}</span>
        <div class="footer-socials">
          <!-- Telegram -->
          <a href="https://t.me/reworkagencybot" target="_blank" rel="noopener" class="social-btn" aria-label="Telegram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.546c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.257l-2.947-.924c-.641-.202-.654-.641.136-.949l11.498-4.432c.537-.194 1.006.131.615.296z"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="#" class="social-btn" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" class="social-btn" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()
</script>

<style scoped>
.footer {
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: 56px 0 32px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 56px;
}

/* Brand */
.footer-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.04em;
  background: var(--grad-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  margin-bottom: 14px;
}
.footer-logo span { -webkit-text-fill-color: #fff; }

.footer-tagline {
  color: var(--text-muted);
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.7;
  max-width: 260px;
  margin-bottom: 20px;
}

.tg-mini {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0,136,204,0.12);
  border: 1px solid rgba(0,136,204,0.25);
  border-radius: 8px;
  padding: 8px 14px;
  color: #36aee8;
  font-size: 12px;
  font-family: var(--font-display);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}
.tg-mini:hover {
  background: rgba(0,136,204,0.22);
  transform: translateY(-1px);
}

/* Footer columns */
.footer-col h5 {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 20px;
}

.footer-col a {
  display: block;
  color: var(--text-muted);
  font-size: 13.5px;
  font-weight: 300;
  margin-bottom: 10px;
  transition: color 0.2s;
  text-decoration: none;
}
.footer-col a:hover { color: var(--text); }

/* Bottom bar */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copy {
  color: var(--text-dim);
  font-size: 13px;
  font-weight: 300;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.social-btn {
  width: 36px; height: 36px;
  border-radius: 9px;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition);
}

.social-btn:hover {
  background: rgba(59,130,246,0.1);
  border-color: rgba(59,130,246,0.2);
  color: var(--blue);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
}
@media (max-width: 600px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
