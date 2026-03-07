<template>
  <section class="section testi-section" id="testimonials">
    <div class="container">
      <div class="section-header" v-observe>
        <span class="tag">{{ t('testimonials.tag') }}</span>
        <h2 class="section-title">
          {{ t('testimonials.title') }}
          <span class="grad-text">{{ t('testimonials.titleGrad') }}</span>
        </h2>
      </div>

      <div class="testi-grid">
        <div
          class="testi-card"
          v-for="(item, i) in items"
          :key="i"
          v-observe
          :style="{ transitionDelay: (i * 80) + 'ms' }"
        >
          <div class="stars">★★★★★</div>
          <p class="testi-text">{{ item.text }}</p>
          <div class="testi-author">
            <div class="avatar" :style="{ background: item.grad }">{{ item.initials }}</div>
            <div>
              <div class="author-name">{{ item.name }}</div>
              <div class="author-role">{{ item.role }}</div>
            </div>
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
const items = computed(() => t('testimonials.items'))

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
.testi-section { background: var(--bg); }

.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.testi-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: transform 0.3s, background 0.3s, border-color 0.3s;
}

.testi-card:hover {
  background: var(--surface2);
  border-color: rgba(139,92,246,0.2);
  transform: translateY(-3px);
}

.stars {
  color: #fbbf24;
  font-size: 14px;
  letter-spacing: 3px;
  margin-bottom: 18px;
}

.testi-text {
  font-size: 15px;
  font-weight: 300;
  color: rgba(255,255,255,0.78);
  line-height: 1.7;
  margin-bottom: 28px;
  font-style: italic;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 14px;
}

.avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.author-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
}

.author-role {
  color: var(--text-muted);
  font-size: 12px;
  margin-top: 2px;
}

.observe-target {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.observe-target.in-view { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr; } }
</style>
