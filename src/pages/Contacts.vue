<template>
  <div class="inner-page">
    <div class="inner-hero">
      <div class="container">
        <span class="tag fade-up">{{ t('nav.contacts') }}</span>
        <h1 class="inner-title fade-up-1">{{ t('pages.contactsTitle') }}</h1>
        <p class="inner-sub fade-up-2">{{ t('pages.contactsSub') }}</p>
      </div>
    </div>
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()
</script>

<style scoped>
.inner-page { padding-top: var(--nav-h); }
.inner-hero { padding: 80px 0 0; text-align: center; }
.inner-title {
  font-size: clamp(36px, 6vw, 68px);
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 16px 0 20px;
}
.inner-sub {
  color: var(--text-muted);
  font-size: 18px;
  font-weight: 300;
  max-width: 440px;
  margin: 0 auto;
  line-height: 1.65;
}
</style>
