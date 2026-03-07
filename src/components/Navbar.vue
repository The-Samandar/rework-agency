<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="navbar-inner">
      <!-- Logo -->
      <RouterLink to="/" class="nav-logo">
        Rework<span class="logo-dot">.</span>
      </RouterLink>

      <!-- Desktop links -->
      <div class="nav-links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: isActive(link.to) }"
        >
          {{ t(link.label) }}
        </RouterLink>
      </div>

      <!-- Right controls -->
      <div class="nav-right">
        <!-- Language switcher -->
        <div class="lang-sw">
          <button
            v-for="code in langs"
            :key="code"
            :class="{ active: lang.lang === code }"
            @click="setLang(code)"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>

        <RouterLink to="/contacts" class="btn btn-primary btn-sm">
          {{ t('nav.startProject') }}
        </RouterLink>

        <!-- Hamburger -->
        <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-menu" @click.self="menuOpen = false">
        <button class="mobile-close" @click="menuOpen = false">✕</button>
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="mobile-link"
          @click="menuOpen = false"
        >
          {{ t(link.label) }}
        </RouterLink>
        <div class="mobile-lang">
          <button
            v-for="code in langs"
            :key="code"
            :class="{ active: lang.lang === code }"
            @click="setLang(code)"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang.js'

const { t, setLang, lang } = useLang()
const route = useRoute()

const menuOpen = ref(false)
const isScrolled = ref(false)
const langs = ['en', 'ru', 'uz']

const navLinks = [
  { to: '/',         label: 'nav.home' },
  { to: '/services', label: 'nav.services' },
  { to: '/cases',    label: 'nav.cases' },
  { to: '/about',    label: 'nav.about' },
  { to: '/blog',     label: 'nav.blog' },
  { to: '/contacts', label: 'nav.contacts' },
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const onScroll = () => { isScrolled.value = window.scrollY > 40 }

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.92);
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.navbar-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* Logo */
.nav-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.04em;
  background: var(--grad-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
}
.logo-dot { -webkit-text-fill-color: #fff; }

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  color: var(--text-muted);
  font-size: 13.5px;
  font-weight: 500;
  padding: 7px 12px;
  border-radius: 8px;
  transition: var(--transition);
}
.nav-link:hover,
.nav-link.active {
  color: var(--text);
  background: var(--surface);
}
.nav-link.router-link-active { color: var(--text); }

/* Right controls */
.nav-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* Language switcher */
.lang-sw {
  display: flex;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
.lang-sw button {
  background: none;
  border: none;
  border-right: 1px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 7px 9px;
  cursor: pointer;
  transition: var(--transition);
}
.lang-sw button:last-child { border-right: none; }
.lang-sw button.active {
  color: var(--blue);
  background: rgba(59,130,246,0.1);
}
.lang-sw button:hover:not(.active) {
  color: var(--text);
  background: var(--surface2);
}

.btn-sm { padding: 9px 18px; font-size: 13px; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-muted);
  border-radius: 2px;
  transition: var(--transition);
}
.hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px;
}

.mobile-close {
  position: absolute;
  top: 20px; right: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted);
  font-size: 18px;
  cursor: pointer;
  transition: var(--transition);
}
.mobile-close:hover { background: var(--surface2); color: var(--text); }

.mobile-link {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.03em;
  transition: color 0.2s;
}
.mobile-link:hover { color: var(--blue); }

.mobile-lang {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}
.mobile-lang button {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px;
  cursor: pointer;
  transition: var(--transition);
}
.mobile-lang button.active {
  color: var(--blue);
  border-color: rgba(59,130,246,0.3);
  background: rgba(59,130,246,0.1);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
}
@media (max-width: 768px) {
  .navbar-inner { padding: 0 20px; }
  .hamburger { display: flex; }
  .lang-sw { display: none; }
}
</style>
