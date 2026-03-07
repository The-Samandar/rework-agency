<template>
  <section class="section cases-section" id="cases">
    <div class="container">
      <div class="section-header" v-observe>
        <span class="tag">{{ t('cases.tag') }}</span>
        <h2 class="section-title">
          {{ t('cases.title') }}
          <span class="grad-text">{{ t('cases.titleGrad') }}</span>
        </h2>
        <p class="section-sub">{{ t('cases.sub') }}</p>
      </div>

      <div class="cases-grid">
        <CaseCard
          v-for="(item, i) in cases"
          :key="i"
          v-bind="item"
          :label-problem="t('cases.labelProblem')"
          :label-solution="t('cases.labelSolution')"
          :label-result="t('cases.labelResult')"
          v-observe
        />
      </div>

      <div class="cases-footer" v-observe>
        <RouterLink to="/cases" class="btn btn-ghost">{{ t('cases.viewAll') }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import CaseCard from './CaseCard.vue'
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()
const cases = computed(() => t('cases.items'))

const vObserve = {
  mounted(el) {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in-view'); obs.unobserve(el) }
    }, { threshold: 0.1 })
    el.classList.add('observe-target')
    obs.observe(el)
  }
}
</script>

<style scoped>
.cases-section { background: var(--bg); }

.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.cases-footer {
  text-align: center;
  margin-top: 48px;
}

.observe-target {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.observe-target.in-view { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
  .cases-grid { grid-template-columns: 1fr; }
}
</style>
