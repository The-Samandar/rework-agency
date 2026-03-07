# Rework Agency — Vue 3 Website

A production-ready, fully responsive Vue 3 agency website with multilanguage support (EN/RU/UZ).

## Tech Stack
- **Vue 3** + Composition API (`<script setup>`)
- **Vue Router 4** (history mode)
- **Vite 5** (build tool)
- **CSS Variables** (no Tailwind dependency — pure scoped CSS)
- **Google Fonts** (Syne + DM Sans)
- **IntersectionObserver** (scroll reveal animations)

## Project Structure

```
src/
├── assets/
│   └── styles.css              # Global reset, CSS vars, utilities
├── composables/
│   └── useLang.js              # i18n composable (EN / RU / UZ)
├── components/
│   ├── Navbar.vue              # Fixed nav, lang switcher, mobile menu
│   ├── HeroSection.vue         # Animated hero with glow BG
│   ├── ServicesSection.vue     # 3-col services grid
│   ├── ServiceCard.vue         # Reusable service card
│   ├── CasesSection.vue        # Portfolio case grid
│   ├── CaseCard.vue            # Reusable case card
│   ├── ProcessSection.vue      # 4-step process timeline
│   ├── Testimonials.vue        # Client testimonial cards
│   ├── CTASection.vue          # CTA banner with glow effects
│   ├── ContactForm.vue         # Contact form + info links
│   └── Footer.vue              # Full footer with nav columns
├── pages/
│   ├── Home.vue                # Full homepage (all sections)
│   ├── Services.vue            # Services page
│   ├── Cases.vue               # Portfolio page
│   ├── About.vue               # About page with stats
│   ├── Blog.vue                # Blog listing page
│   └── Contacts.vue            # Contact page
├── router/
│   └── index.js                # Vue Router config
├── App.vue                     # Root — Navbar + RouterView + Footer
└── main.js                     # App entry point
```

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- ✅ **6 pages** — Home, Services, Cases, About, Blog, Contacts
- ✅ **Multilanguage** — EN / RU / UZ with `useLang()` composable, persisted in localStorage
- ✅ **Fully responsive** — mobile, tablet, desktop
- ✅ **Smooth animations** — scroll-reveal via IntersectionObserver, CSS transitions
- ✅ **Dark premium theme** — inspired by Stripe, Linear, Vercel
- ✅ **Vue Router** — client-side routing with page transitions
- ✅ **Reusable components** — `ServiceCard`, `CaseCard` accept props
- ✅ **Contact form** — reactive with submitted state feedback
- ✅ **Telegram integration** — links to `@Rework_AssistantBot`

## Brand Tokens

| Token | Value |
|-------|-------|
| Background | `#0F172A` |
| Text | `#FFFFFF` |
| Primary | `#3B82F6` |
| Accent | `#8B5CF6` |
| Gradient | `linear-gradient(135deg, #3B82F6, #8B5CF6)` |

## Customization

### Adding translations
Edit `src/composables/useLang.js` — add keys to all three language objects (`en`, `ru`, `uz`).

### Adding a service card
The `services.items` array in translations drives the cards. Add an entry with `{ icon, title, desc }`.

### Adding a case study
The `cases.items` array in translations drives case cards. Add an entry with `{ icon, gradient, industry, name, problem, solution, result }`.

## Deployment

```bash
npm run build
# Upload dist/ to any static host: Vercel, Netlify, Cloudflare Pages
```

For Vercel/Netlify, add a rewrite rule: `/* → /index.html` (for SPA routing).
