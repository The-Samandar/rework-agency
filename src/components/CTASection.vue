<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-inner" v-observe>
        <div class="cta-glow cta-glow-1" aria-hidden="true"></div>
        <div class="cta-glow cta-glow-2" aria-hidden="true"></div>

        <span class="tag" style="margin-bottom:28px;">{{ t('cta.tag') }}</span>
        <h2 class="cta-title">
          {{ t('cta.title') }}<br>
          <span class="grad-text">{{ t('cta.titleGrad') }}</span>
        </h2>
        <p class="cta-sub">{{ t('cta.sub') }}</p>

        <div class="cta-btns">
          <RouterLink to="/contacts" class="btn btn-primary btn-lg">
            {{ t('cta.btnPrimary') }}
          </RouterLink>
          <a
            href="https://t.me/Rework_AssistantBot"
            target="_blank"
            rel="noopener noreferrer"
            class="tg-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.546c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.257l-2.947-.924c-.641-.202-.654-.641.136-.949l11.498-4.432c.537-.194 1.006.131.615.296z"/>
            </svg>
            {{ t('cta.btnTelegram') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()

const vObserve = {
  mounted(el) {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in-view'); obs.unobserve(el) }
    }, { threshold: 0.12 })
    el.classList.add('observe-target')
    obs.observe(el)
  }
}
</script>

<style scoped>
.cta-section { padding: 80px 0; }

.cta-inner {
  background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12));
  border: 1px solid rgba(59,130,246,0.2);
  border-radius: 32px;
  padding: 100px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.cta-glow-1 { width: 400px; height: 400px; background: var(--blue);   opacity: 0.1; top: -100px; left: -100px; }
.cta-glow-2 { width: 300px; height: 300px; background: var(--purple); opacity: 0.1; bottom: -80px; right: -80px; }

.cta-title {
  font-size: clamp(32px, 5vw, 58px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
}

.cta-sub {
  color: var(--text-muted);
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 44px;
  position: relative;
  z-index: 1;
}

.cta-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.btn-lg { font-size: 15px; padding: 16px 36px; }

.tg-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(0,136,204,0.15);
  border: 1px solid rgba(0,136,204,0.3);
  border-radius: var(--radius-sm);
  padding: 15px 24px;
  color: #36aee8;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.tg-btn:hover {
  background: rgba(0,136,204,0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,136,204,0.2);
}

.observe-target {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.observe-target.in-view { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
  .cta-inner { padding: 64px 28px; }
}
</style>
