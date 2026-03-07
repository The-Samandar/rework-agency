<template>
  <section class="section contact-section" id="contact">
    <div class="container">
      <div class="contact-layout">
        <!-- Info column -->
        <div class="contact-info" v-observe>
          <span class="tag" style="margin-bottom:24px;">{{ t('contact.tag') }}</span>
          <h2 class="contact-title">
            {{ t('contact.title') }}<br>
            <span class="grad-text">{{ t('contact.titleGrad') }}</span>
          </h2>
          <p class="contact-sub">{{ t('contact.sub') }}</p>

          <div class="contact-links">
            <a href="https://t.me/Rework_AssistantBot" class="contact-link" target="_blank" rel="noopener noreferrer">
              <div class="link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.546c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.257l-2.947-.924c-.641-.202-.654-.641.136-.949l11.498-4.432c.537-.194 1.006.131.615.296z"/>
                </svg>
              </div>
              <div>
                <div class="link-label">{{ t('contact.telegramLabel') }}</div>
                <div class="link-val">{{ t('contact.telegramHandle') }}</div>
              </div>
            </a>
            <a :href="'mailto:' + t('contact.emailVal')" class="contact-link">
              <div class="link-icon">✉️</div>
              <div>
                <div class="link-label">{{ t('contact.emailLabel') }}</div>
                <div class="link-val">{{ t('contact.emailVal') }}</div>
              </div>
            </a>
            <div class="contact-link">
              <div class="link-icon">📍</div>
              <div>
                <div class="link-label">{{ t('contact.locationLabel') }}</div>
                <div class="link-val">{{ t('contact.locationVal') }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Form column -->
        <div class="form-wrap" v-observe>
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label>{{ t('contact.labelName') }}</label>
                <input
                  type="text"
                  v-model="form.name"
                  :placeholder="t('contact.placeholderName')"
                  required
                />
              </div>
              <div class="form-group">
                <label>{{ t('contact.labelEmail') }}</label>
                <input
                  type="email"
                  v-model="form.email"
                  :placeholder="t('contact.placeholderEmail')"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label>{{ t('contact.labelCompany') }}</label>
              <input
                type="text"
                v-model="form.company"
                :placeholder="t('contact.placeholderCompany')"
              />
            </div>
            <div class="form-group">
              <label>{{ t('contact.labelDesc') }}</label>
              <textarea
                v-model="form.desc"
                :placeholder="t('contact.placeholderDesc')"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-primary submit-btn"
              :class="{ submitted: submitted }"
              :disabled="submitted"
            >
              <span v-if="!submitted">
                {{ t('contact.submit') }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span v-else>{{ t('contact.submitted') }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()

const form = reactive({ name: '', email: '', company: '', desc: '' })
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, { name: '', email: '', company: '', desc: '' })
  }, 3500)
}

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
.contact-section { background: var(--bg2); }

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
  align-items: start;
}

.contact-title {
  font-size: clamp(26px, 3.5vw, 38px);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
  margin-top: 12px;
}

.contact-sub {
  color: var(--text-muted);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 40px;
  font-size: 15px;
}

/* Contact links */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
}

.link-icon {
  width: 42px; height: 42px;
  border-radius: var(--radius-sm);
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: var(--blue);
  flex-shrink: 0;
  transition: var(--transition);
}

.contact-link:hover .link-icon {
  background: rgba(59,130,246,0.1);
  border-color: rgba(59,130,246,0.25);
}

.link-label {
  color: var(--text);
  font-weight: 500;
  font-size: 14px;
}

.link-val {
  color: var(--text-muted);
  font-size: 13px;
  margin-top: 2px;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-family: var(--font-display);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.form-group input,
.form-group textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 14.5px;
  font-weight: 300;
  outline: none;
  transition: var(--transition);
  resize: none;
  width: 100%;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(59,130,246,0.5);
  background: rgba(59,130,246,0.04);
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-dim);
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 16px;
  font-size: 15px;
  margin-top: 4px;
  transition: var(--transition), background 0.4s;
}

.submit-btn.submitted {
  background: linear-gradient(135deg, #059669, #0d9488);
  cursor: default;
}

.observe-target {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.observe-target.in-view { opacity: 1; transform: translateY(0); }

@media (max-width: 1024px) {
  .contact-layout { grid-template-columns: 1fr; gap: 48px; }
}
@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
}
</style>
