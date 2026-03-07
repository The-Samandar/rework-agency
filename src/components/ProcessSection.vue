<template>
  <section class="section process-section" id="process">
    <div class="container">
      <div class="section-header centered" v-observe>
        <span class="tag">{{ t('process.tag') }}</span>
        <h2 class="section-title">
          {{ t('process.title') }}
          <span class="grad-text">{{ t('process.titleGrad') }}</span>
        </h2>
        <p class="section-sub center-sub">{{ t('process.sub') }}</p>
      </div>

      <div class="steps-grid">
        <div
          class="step"
          v-for="(step, i) in steps"
          :key="i"
          v-observe
        >
          <div class="step-connector" v-if="i < steps.length - 1" aria-hidden="true"></div>
          <div class="step-num">{{ step.num }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()
const steps = computed(() => t('process.steps'))

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
.process-section {
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
}

.centered { max-width: 620px; margin: 0 auto 64px; text-align: center; }
.center-sub { margin-left: auto; margin-right: auto; }

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}

/* Horizontal line connector between steps */
.steps-grid::before {
  content: '';
  position: absolute;
  top: 28px;
  left: calc(12.5%);
  right: calc(12.5%);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--blue), var(--purple), transparent);
  z-index: 0;
}

.step {
  text-align: center;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.step-num {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--grad);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  margin: 0 auto 28px;
  box-shadow: 0 0 0 8px var(--bg), 0 0 0 9px rgba(59,130,246,0.2);
  transition: transform 0.3s;
  position: relative;
  z-index: 1;
}

.step:hover .step-num { transform: scale(1.1); }

.step-title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: -0.02em;
}

.step-desc {
  color: var(--text-muted);
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.65;
}

.observe-target {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.observe-target.in-view { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .steps-grid::before { display: none; }
}
@media (max-width: 480px) {
  .steps-grid { grid-template-columns: 1fr; gap: 32px; }
}
</style>
