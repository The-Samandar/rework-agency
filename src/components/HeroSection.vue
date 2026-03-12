<template>
  <section class="hero" id="home">
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-grid"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-badge fade-up">
          <span class="tag">
            <span class="status-dot"></span>
            {{ t('hero.badge') }}
          </span>
        </div>

        <h1 class="hero-title fade-up-1">
          {{ t('hero.title1') }}<br>
          <span class="grad-text">{{ t('hero.titleGrad') }}</span><br>
          {{ t('hero.title2') }}
        </h1>

        <p class="hero-sub fade-up-2">{{ t('hero.sub') }}</p>

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

        <!-- Stats row with animated counters -->
        <div class="hero-stats fade-up-4" ref="statsRef">
          <div class="stat" v-for="(s, i) in stats" :key="i">
            <div class="stat-num">
              <span class="stat-count">{{ s.displayed }}</span><span class="stat-suffix">{{ s.suffix }}</span>
            </div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue'
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()
const statsRef = ref(null)
let animated = false

// Define numeric targets + suffixes separately for animation
const statDefs = [
  { target: 80,  suffix: '+',  labelKey: 'hero.stat1Label' },
  { target: 4.9, suffix: '★',  labelKey: 'hero.stat2Label', decimals: 1 },
  { target: 3,   suffix: '×',  labelKey: 'hero.stat3Label' },
  { target: 5,   suffix: t('hero.stat4Val').replace(/[0-9]/g, '').trim(), labelKey: 'hero.stat4Label' },
]

const counters = reactive(statDefs.map(d => ({ val: 0, ...d })))

const stats = computed(() =>
  counters.map(c => ({
    displayed: c.decimals ? c.val.toFixed(1) : Math.round(c.val),
    suffix: c.suffix,
    label: t(c.labelKey),
  }))
)

function animateCounters() {
  if (animated) return
  animated = true
  const duration = 1800
  const start = performance.now()

  function easeOut(t) { return 1 - Math.pow(1 - t, 3) }

  function tick(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOut(progress)

    counters.forEach(c => {
      c.val = c.target * eased
    })

    if (progress < 1) requestAnimationFrame(tick)
    else counters.forEach(c => { c.val = c.target })
  }

  requestAnimationFrame(tick)
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) animateCounters() },
    { threshold: 0.4 }
  )
  if (statsRef.value) observer.observe(statsRef.value)
})

onUnmounted(() => { observer?.disconnect() })
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

.hero-bg {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
}

.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%);
}

.glow {
  position: absolute; border-radius: 50%;
  filter: blur(120px); opacity: 0.18;
  animation: float 8s ease-in-out infinite;
}
.glow-1 { width:600px;height:600px;background:var(--blue);top:-100px;right:-100px;animation-delay:0s }
.glow-2 { width:400px;height:400px;background:var(--purple);bottom:0;left:-80px;animation-delay:-4s }
.glow-3 { width:300px;height:300px;background:var(--blue);top:50%;left:40%;opacity:0.09;animation-delay:-2s }

.hero-content {
  position: relative; z-index: 1;
  max-width: 820px; padding: 80px 0 100px;
}

.hero-badge { margin-bottom: 28px; }

.status-dot {
  display: inline-block; width: 6px; height: 6px;
  border-radius: 50%; background: #4ade80;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: clamp(44px, 7vw, 82px);
  font-weight: 800; letter-spacing: -0.04em;
  line-height: 1.04; margin-bottom: 28px;
}

.hero-sub {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-muted); max-width: 540px;
  line-height: 1.65; font-weight: 300; margin-bottom: 44px;
}

.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }

.hero-stats {
  display: flex; gap: 48px;
  margin-top: 72px; padding-top: 44px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 32px; font-weight: 800;
  background: var(--grad-text);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; line-height: 1; margin-bottom: 4px;
  display: flex; align-items: baseline; gap: 1px;
}

.stat-count { display: inline-block; min-width: 2ch; }

.stat-label {
  font-size: 13px; color: var(--text-muted); font-weight: 400;
}

@media (max-width: 768px) {
  .hero-content { padding: 60px 0 80px; }
  .hero-stats { gap: 24px; }
  .hero-title { font-size: clamp(38px, 10vw, 56px); }
}
</style>
