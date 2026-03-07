<template>
  <div class="inner-page">
    <div class="inner-hero">
      <div class="container">
        <span class="tag fade-up">{{ t('nav.blog') }}</span>
        <h1 class="inner-title fade-up-1">{{ t('pages.blogTitle') }}</h1>
        <p class="inner-sub fade-up-2">{{ t('pages.blogSub') }}</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="blog-grid">
          <article
            class="blog-card"
            v-for="(post, i) in posts"
            :key="i"
          >
            <div class="blog-img" :style="{ background: post.gradient }">
              <span class="blog-icon">{{ post.icon }}</span>
            </div>
            <div class="blog-body">
              <div class="blog-meta">
                <span class="blog-cat">{{ post.category }}</span>
                <span class="blog-date">{{ post.date }}</span>
              </div>
              <h2 class="blog-title">{{ post.title }}</h2>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <a href="#" class="read-more">Read more →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script setup>
import CTASection  from '@/components/CTASection.vue'
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()

const posts = [
  { icon: '🚀', gradient: 'linear-gradient(135deg,#1e293b,#0f172a)', category: 'Growth', date: 'Dec 2024', title: 'How to 3× your conversion rate with data-driven UX', excerpt: 'Most businesses leave significant revenue on the table due to poor UX decisions. Here\'s a systematic approach to fixing that.' },
  { icon: '🤖', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)', category: 'Automation', date: 'Nov 2024', title: 'Building a Telegram sales bot in 2 weeks', excerpt: 'A step-by-step breakdown of how we built a fully automated lead qualification and follow-up system for a fintech client.' },
  { icon: '📊', gradient: 'linear-gradient(135deg,#0f0c29,#302b63)', category: 'Analytics', date: 'Oct 2024', title: 'The BI dashboard every SMB should have', excerpt: 'You don\'t need expensive enterprise software. Here\'s the minimal viable analytics stack that actually drives decisions.' },
  { icon: '🎨', gradient: 'linear-gradient(135deg,#0f2027,#203a43)', category: 'Design', date: 'Sep 2024', title: 'Why minimalism converts better (with data)', excerpt: 'We ran A/B tests across 12 client websites. The results show a clear winner between cluttered and minimal design.' },
  { icon: '📱', gradient: 'linear-gradient(135deg,#11998e,#0f4c3a)', category: 'Marketing', date: 'Aug 2024', title: 'SMM for B2B: what actually works in 2025', excerpt: 'LinkedIn, Instagram, Telegram — the three-channel strategy that generated 240% more qualified leads for our clients.' },
  { icon: '⚙️', gradient: 'linear-gradient(135deg,#1e3a5f,#0d2137)', category: 'Tech', date: 'Jul 2024', title: 'Vue 3 for production: our architecture decisions', excerpt: 'After building 20+ Vue applications, here are the patterns we rely on for maintainability, performance and DX.' },
]
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
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.65;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  border-color: rgba(59,130,246,0.2);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.blog-img {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-icon {
  font-size: 44px;
  opacity: 0.65;
  transition: transform 0.3s;
}
.blog-card:hover .blog-icon { transform: scale(1.1); }

.blog-body { padding: 24px 24px 28px; }

.blog-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.blog-cat {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue);
}

.blog-date {
  font-size: 12px;
  color: var(--text-dim);
}

.blog-title {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  line-height: 1.4;
}

.blog-excerpt {
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.65;
  margin-bottom: 20px;
}

.read-more {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  color: var(--blue);
  text-decoration: none;
  transition: color 0.2s;
}
.read-more:hover { color: #60a5fa; }

@media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr; } }
</style>
