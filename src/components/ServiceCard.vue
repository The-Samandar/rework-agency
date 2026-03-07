<template>
  <div class="service-card" :style="{ transitionDelay: delay + 'ms' }">
    <div class="card-icon">{{ icon }}</div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-desc">{{ desc }}</p>
    <RouterLink :to="link" class="card-link">
      {{ learnMore }} <span class="arrow">→</span>
    </RouterLink>
    <div class="card-glow" aria-hidden="true"></div>
  </div>
</template>

<script setup>
defineProps({
  icon:      { type: String, required: true },
  title:     { type: String, required: true },
  desc:      { type: String, required: true },
  learnMore: { type: String, default: 'Learn more' },
  link:      { type: String, default: '/services' },
  delay:     { type: Number, default: 0 },
})
</script>

<style scoped>
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(.4,0,.2,1),
              background 0.35s,
              border-color 0.35s,
              box-shadow 0.35s;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: var(--grad);
  opacity: 0;
  transition: opacity 0.35s;
}

.service-card:hover {
  transform: translateY(-6px);
  background: var(--surface2);
  border-color: rgba(59,130,246,0.2);
  box-shadow: 0 24px 64px rgba(0,0,0,0.3);
}

.service-card:hover::before { opacity: 1; }

.card-icon {
  width: 52px; height: 52px;
  border-radius: 14px;
  background: rgba(59,130,246,0.12);
  border: 1px solid rgba(59,130,246,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 24px;
  transition: transform 0.3s, background 0.3s;
}

.service-card:hover .card-icon {
  background: rgba(59,130,246,0.2);
  transform: scale(1.08);
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.card-desc {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.65;
  font-weight: 300;
  margin-bottom: 24px;
}

.card-link {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--blue);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s, color 0.2s;
}

.card-link:hover { gap: 10px; color: #60a5fa; }

.card-glow {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s;
}

.service-card:hover .card-glow { opacity: 1; }
</style>
