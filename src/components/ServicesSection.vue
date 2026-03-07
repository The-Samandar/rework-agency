<template>
  <section class="section services-section" id="services">
    <div class="container">
      <div class="section-header" v-observe>
        <span class="tag">{{ t('services.tag') }}</span>
        <h2 class="section-title">
          {{ t('services.title') }}<br>
          <span class="grad-text">{{ t('services.titleGrad') }}</span>
        </h2>
        <p class="section-sub">{{ t('services.sub') }}</p>
      </div>

      <div class="services-grid">
        <ServiceCard
          v-for="(item, i) in services"
          :key="i"
          :icon="item.icon"
          :title="item.title"
          :desc="item.desc"
          :learn-more="t('services.learnMore')"
          :delay="i * 60"
          v-observe
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ServiceCard from './ServiceCard.vue'
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()

const services = computed(() => t('services.items'))

// Intersection observer directive (inline)
const vObserve = {
  mounted(el) {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in-view')
        obs.unobserve(el)
      }
    }, { threshold: 0.12 })
    el.classList.add('observe-target')
    obs.observe(el)
  }
}
</script>

<style scoped>
.services-section { background: var(--bg); }

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Reveal animation */
.observe-target {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.observe-target.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>
