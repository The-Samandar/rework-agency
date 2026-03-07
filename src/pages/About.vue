<template>
  <div class="inner-page">
    <div class="about-hero">
      <div class="container">
        <div class="about-content">
          <span class="tag fade-up">{{ t('nav.about') }}</span>
          <h1 class="about-title fade-up-1">{{ t('pages.aboutTitle') }}</h1>
          <p class="about-sub fade-up-2">{{ t('pages.aboutSub') }}</p>
          <p class="about-body fade-up-3">{{ t('pages.aboutBody') }}</p>
          <div class="about-stats fade-up-4">
            <div class="a-stat" v-for="s in stats" :key="s.val">
              <div class="a-stat-val">{{ s.val }}</div>
              <div class="a-stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Testimonials />
    <CTASection />
  </div>
</template>

<script setup>
import Testimonials from '@/components/Testimonials.vue'
import CTASection   from '@/components/CTASection.vue'
import { useLang }  from '@/composables/useLang.js'
import { computed } from 'vue'

const { t } = useLang()

const stats = computed(() => [
  { val: '80+', label: t('hero.stat1Label') },
  { val: '5+',  label: t('hero.stat4Label') },
  { val: '3×',  label: t('hero.stat3Label') },
  { val: '4.9★', label: t('hero.stat2Label') },
])
</script>

<style scoped>
.inner-page { padding-top: var(--nav-h); }

.about-hero {
  padding: 90px 0 110px;
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
}

.about-content { max-width: 740px; }

.about-title {
  font-size: clamp(36px, 6vw, 68px);
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 16px 0 20px;
}

.about-sub {
  font-size: 20px;
  color: var(--text-muted);
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 1.6;
}

.about-body {
  font-size: 16px;
  color: rgba(255,255,255,0.6);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 56px;
}

.about-stats {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.a-stat-val {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 800;
  background: var(--grad-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 6px;
}

.a-stat-label {
  color: var(--text-muted);
  font-size: 13px;
}
</style>
