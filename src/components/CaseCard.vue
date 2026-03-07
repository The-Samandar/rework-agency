<template>
  <div class="case-card">
    <div class="case-img" :style="{ background: gradient }">
      <span class="case-icon">{{ icon }}</span>
    </div>
    <div class="case-body">
      <div class="case-industry">{{ industry }}</div>
      <h3 class="case-name">{{ name }}</h3>
      <div class="case-meta">
        <div class="case-row">
          <span class="case-label">{{ labelProblem }}</span>
          <span class="case-val">{{ problem }}</span>
        </div>
        <div class="case-row">
          <span class="case-label">{{ labelSolution }}</span>
          <span class="case-val">{{ solution }}</span>
        </div>
        <div class="case-row">
          <span class="case-label">{{ labelResult }}</span>
          <span class="case-result">{{ result }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon:          { type: String, required: true },
  gradient:      { type: String, default: 'linear-gradient(135deg,#1e293b,#0f172a)' },
  industry:      { type: String, required: true },
  name:          { type: String, required: true },
  problem:       { type: String, required: true },
  solution:      { type: String, required: true },
  result:        { type: String, required: true },
  labelProblem:  { type: String, default: 'Problem' },
  labelSolution: { type: String, default: 'Solution' },
  labelResult:   { type: String, default: 'Result' },
})
</script>

<style scoped>
.case-card {
  border-radius: 24px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: transform 0.35s cubic-bezier(.4,0,.2,1),
              box-shadow 0.35s,
              border-color 0.35s;
  cursor: pointer;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 32px 72px rgba(0,0,0,0.4);
  border-color: rgba(59,130,246,0.2);
}

.case-img {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.case-icon {
  font-size: 52px;
  opacity: 0.65;
  transition: transform 0.35s, opacity 0.35s;
}

.case-card:hover .case-icon {
  transform: scale(1.1);
  opacity: 0.9;
}

.case-body {
  padding: 28px 28px 32px;
}

.case-industry {
  font-size: 11px;
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--purple);
  margin-bottom: 10px;
}

.case-name {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 18px;
}

.case-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.case-row {
  display: flex;
  gap: 12px;
  font-size: 13px;
}

.case-label {
  color: var(--text-dim);
  min-width: 68px;
  font-weight: 400;
  flex-shrink: 0;
}

.case-val {
  color: var(--text-muted);
  font-weight: 300;
}

.case-result {
  color: #4ade80;
  font-weight: 500;
}
</style>
