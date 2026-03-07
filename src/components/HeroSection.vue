<template>
  <section class="hero" id="home">
    <!-- Background -->
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-grid"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- Badge -->
        <div class="hero-badge fade-up">
          <span class="tag">
            <span class="status-dot"></span>
            {{ t('hero.badge') }}
          </span>
        </div>

        <!-- Headline -->
        <h1 class="hero-title fade-up-1">
          {{ t('hero.title1') }}<br>
          <span class="grad-text">{{ t('hero.titleGrad') }}</span><br>
          {{ t('hero.title2') }}
        </h1>

        <!-- Subtext -->
        <p class="hero-sub fade-up-2">{{ t('hero.sub') }}</p>

        <!-- CTA buttons -->
        <div class="hero-cta fade-up-3">
          <RouterLink to="/contacts" class="btn btn-primary">
            {{ t('hero.btnPrimary') }}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
          <RouterLink to="/contacts" class="btn btn-ghost">
            {{ t('hero.btnSecondary') }}
          </RouterLink>
        </div>

        <!-- Stats row -->
        <div class="hero-stats fade-up-4">
          <div class="stat" v-for="(s, i) in stats" :key="i">
            <div class="stat-num">{{ s.val }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()

const stats = computed(() => [
  { val: t('hero.stat1Val'), label: t('hero.stat1Label') },
  { val: t('hero.stat2Val'), label: t('hero.stat2Label') },
  { val: t('hero.stat3Val'), label: t('hero.stat3Label') },
  { val: t('hero.stat4Val'), label: t('hero.stat4Label') },
])
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-h);
  position: relative;
  overflow: hidden;
}

/* Background layers */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%);
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.18;
  animation: float 8s ease-in-out infinite;
}
.glow-1 { width: 600px; height: 600px; background: var(--blue);   top: -100px; right: -100px; animation-delay: 0s; }
.glow-2 { width: 400px; height: 400px; background: var(--purple); bottom: 0;   left: -80px;  animation-delay: -4s; }
.glow-3 { width: 300px; height: 300px; background: var(--blue);   top: 50%;    left: 40%;    opacity: 0.09; animation-delay: -2s; }

/* Content */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  padding: 80px 0 100px;
}

.hero-badge { margin-bottom: 28px; }

.status-dot {
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: clamp(44px, 7vw, 82px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.04;
  margin-bottom: 28px;
}

.hero-sub {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-muted);
  max-width: 540px;
  line-height: 1.65;
  font-weight: 300;
  margin-bottom: 44px;
}

.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

/* Stats */
.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 72px;
  padding-top: 44px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 800;
  background: var(--grad-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 400;
}

@media (max-width: 768px) {
  .hero-content { padding: 60px 0 80px; }
  .hero-stats { gap: 24px; }
  .hero-title { font-size: clamp(38px, 10vw, 56px); }
}
</style>
