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
            <!-- Telegram bot -->
            <a href="https://t.me/reworkagencybot" class="contact-link" target="_blank" rel="noopener noreferrer">
              <div class="link-icon tg-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.546c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.257l-2.947-.924c-.641-.202-.654-.641.136-.949l11.498-4.432c.537-.194 1.006.131.615.296z"/>
                </svg>
              </div>
              <div>
                <div class="link-label">{{ t('contact.telegramLabel') }}</div>
                <div class="link-val">{{ t('contact.telegramHandle') }}</div>
              </div>
            </a>

            <!-- Telegram channel -->
            <a href="https://t.me/reworkagency" class="contact-link" target="_blank" rel="noopener noreferrer">
              <div class="link-icon tg-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="link-label">{{ t('contact.channelLabel') }}</div>
                <div class="link-val">{{ t('contact.channelHandle') }}</div>
              </div>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/rework_agency_uz?igsh=MW5lYmtrc2ExemRxeQ==" class="contact-link" target="_blank" rel="noopener noreferrer">
              <div class="link-icon ig-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <div>
                <div class="link-label">{{ t('contact.instagramLabel') }}</div>
                <div class="link-val">{{ t('contact.instagramVal') }}</div>
              </div>
            </a>

            <!-- Email -->
            <a :href="'mailto:' + t('contact.emailVal')" class="contact-link">
              <div class="link-icon mail-icon">✉️</div>
              <div>
                <div class="link-label">{{ t('contact.emailLabel') }}</div>
                <div class="link-val">{{ t('contact.emailVal') }}</div>
              </div>
            </a>

            <!-- Location -->
            <div class="contact-link no-link">
              <div class="link-icon loc-icon">📍</div>
              <div>
                <div class="link-label">{{ t('contact.locationLabel') }}</div>
                <div class="link-val">{{ t('contact.locationVal') }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Form column -->
        <div class="form-wrap" v-observe>
          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <!-- Name + Phone row -->
            <div class="form-row">
              <div class="form-group" :class="{ error: errors.name }">
                <label>
                  {{ t('contact.labelName') }}
                  <span class="required">*</span>
                </label>
                <input
                  type="text"
                  v-model="form.name"
                  :placeholder="t('contact.placeholderName')"
                  autocomplete="name"
                />
                <span class="err-msg" v-if="errors.name">{{ errors.name }}</span>
              </div>
              <div class="form-group" :class="{ error: errors.phone }">
                <label>
                  {{ t('contact.labelPhone') }}
                  <span class="required">*</span>
                </label>
                <input
                  type="tel"
                  v-model="form.phone"
                  :placeholder="t('contact.placeholderPhone')"
                  autocomplete="tel"
                />
                <span class="err-msg" v-if="errors.phone">{{ errors.phone }}</span>
              </div>
            </div>

            <!-- Service type -->
            <div class="form-group">
              <label>{{ t('contact.labelService') }}</label>
              <input
                type="text"
                v-model="form.service"
                :placeholder="t('contact.placeholderService')"
              />
            </div>

            <!-- Description -->
            <div class="form-group">
              <label>{{ t('contact.labelDesc') }}</label>
              <textarea
                v-model="form.desc"
                :placeholder="t('contact.placeholderDesc')"
                rows="5"
              ></textarea>
            </div>

            <!-- Error / success banner -->
            <Transition name="banner">
              <div v-if="sendError" class="form-banner error-banner">
                ⚠️ {{ sendError }}
              </div>
            </Transition>

            <button
              type="submit"
              class="btn btn-primary submit-btn"
              :class="{ submitted }"
              :disabled="loading || submitted"
            >
              <span v-if="loading" class="spinner"></span>
              <span v-else-if="submitted">{{ t('contact.submitted') }}</span>
              <span v-else>
                {{ t('contact.submit') }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
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

const { t, lang } = useLang()

// Telegram group chat ID
const TG_CHAT_ID = '-5247751549'
// Bot token — replace with your real token
const TG_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'

const form = reactive({ name: '', phone: '', service: '', desc: '' })
const errors = reactive({ name: '', phone: '' })
const loading = ref(false)
const submitted = ref(false)
const sendError = ref('')

const serviceLabels = {
  ru: { name: 'Имя', phone: 'Телефон', service: 'Услуга', desc: 'Описание', source: 'Источник' },
  en: { name: 'Name', phone: 'Phone', service: 'Service', desc: 'Description', source: 'Source' },
  uz: { name: 'Ism', phone: 'Telefon', service: 'Xizmat', desc: 'Tavsif', source: 'Manba' },
}

const validate = () => {
  errors.name = form.name.trim() ? '' : (lang.lang === 'ru' ? 'Введите ваше имя' : lang.lang === 'uz' ? 'Ismingizni kiriting' : 'Please enter your name')
  errors.phone = form.phone.trim() ? '' : (lang.lang === 'ru' ? 'Введите номер телефона' : lang.lang === 'uz' ? 'Telefon raqamini kiriting' : 'Please enter your phone number')
  return !errors.name && !errors.phone
}

const buildMessage = () => {
  const l = serviceLabels[lang.lang] || serviceLabels.ru
  const now = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })
  const lines = [
    `🔔 <b>Новая заявка с сайта Rework Agency</b>`,
    ``,
    `👤 <b>${l.name}:</b> ${form.name}`,
    `📞 <b>${l.phone}:</b> ${form.phone}`,
    form.service ? `🛠 <b>${l.service}:</b> ${form.service}` : null,
    form.desc     ? `📝 <b>${l.desc}:</b>\n${form.desc}` : null,
    ``,
    `🌐 <b>${l.source}:</b> reworkagency.uz`,
    `🕐 ${now}`,
  ]
  return lines.filter(l => l !== null).join('\n')
}

const sendToTelegram = async () => {
  const text = buildMessage()
  const url = `https://api.telegram.org/bot8783760660:AAFUypN479KO5Kr-6T931vxUEXOHiP7sG40/sendMessage`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TG_CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  })
  if (!res.ok) {
    const data = await res.json()
    throw new Error(data.description || 'Telegram API error')
  }
}

const handleSubmit = async () => {
  sendError.value = ''
  if (!validate()) return

  loading.value = true
  try {
    await sendToTelegram()
    submitted.value = true
    Object.assign(form, { name: '', phone: '', service: '', desc: '' })
    setTimeout(() => { submitted.value = false }, 5000)
  } catch (e) {
    console.error(e)
    sendError.value = lang.lang === 'ru'
      ? 'Ошибка отправки. Напишите нам напрямую в Telegram.'
      : lang.lang === 'uz'
      ? "Yuborishda xato. Bizga to'g'ridan-to'g'ri Telegram'da yozing."
      : 'Failed to send. Please write to us on Telegram directly.'
  } finally {
    loading.value = false
  }
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
  margin-bottom: 36px;
  font-size: 15px;
}

/* Contact links */
.contact-links { display: flex; flex-direction: column; gap: 14px; }

.contact-link {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid transparent;
}
.contact-link:hover {
  background: var(--surface);
  border-color: var(--border);
}
.no-link { cursor: default; }
.no-link:hover { background: none; border-color: transparent; }

.link-icon {
  width: 42px; height: 42px;
  border-radius: var(--radius-sm);
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 17px;
  flex-shrink: 0;
  transition: var(--transition);
}
.tg-icon  { color: #36aee8; }
.ig-icon  { color: #e4405f; }
.mail-icon { font-size: 16px; }
.loc-icon  { font-size: 16px; }

.contact-link:hover .link-icon {
  background: rgba(59,130,246,0.08);
  border-color: rgba(59,130,246,0.2);
}

.link-label { color: var(--text); font-weight: 500; font-size: 14px; }
.link-val   { color: var(--text-muted); font-size: 13px; margin-top: 2px; }

/* Form */
.contact-form { display: flex; flex-direction: column; gap: 16px; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group { display: flex; flex-direction: column; gap: 7px; }

.form-group label {
  font-family: var(--font-display);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 4px;
}
.required { color: var(--blue); font-size: 13px; }

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
.form-group textarea::placeholder { color: var(--text-dim); }

.form-group.error input,
.form-group.error textarea { border-color: rgba(239, 68, 68, 0.5); }
.form-group.error input:focus,
.form-group.error textarea:focus { box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1); }

.err-msg { color: #f87171; font-size: 12px; margin-top: 2px; }

/* Submit button */
.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 16px;
  font-size: 15px;
  margin-top: 4px;
  min-height: 54px;
}
.submit-btn.submitted {
  background: linear-gradient(135deg, #059669, #0d9488) !important;
  cursor: default;
}
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

/* Spinner */
.spinner {
  display: inline-block;
  width: 18px; height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Error banner */
.form-banner {
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-size: 13.5px;
  font-weight: 400;
}
.error-banner {
  background: rgba(239,68,68,0.1);
  border: 1px solid rgba(239,68,68,0.3);
  color: #fca5a5;
}
.banner-enter-active, .banner-leave-active { transition: opacity 0.3s, transform 0.3s; }
.banner-enter-from, .banner-leave-to { opacity: 0; transform: translateY(-8px); }

/* Reveal */
.observe-target { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
.observe-target.in-view { opacity: 1; transform: translateY(0); }

@media (max-width: 1024px) { .contact-layout { grid-template-columns: 1fr; gap: 48px; } }
@media (max-width: 600px)  { .form-row { grid-template-columns: 1fr; } }
</style>
