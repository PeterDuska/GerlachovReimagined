<script setup>
import { ref, onMounted, onBeforeUnmount,watch } from "vue";

const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => (scrolled.value = window.scrollY > 20);

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));

watch(menuOpen, (open) => {
  const el = document.documentElement;
  el.classList.toggle("no-scroll", open);
});
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-coal/70 backdrop-blur-xl border-b border-white/10'
      : 'bg-transparent'"
  >
  <span class="glass-anim absolute inset-0 z-0"
        :class="[scrolled ? 'opacity-100 glass-anim-strong' : 'opacity-0']"/>
  <div class="relative z-10 mx-auto max-w-7xl px-4">
    <div class="flex items-center justify-between transition-[height] duration-500" :class="scrolled ? 'h-14' : 'h-20'">
      <!-- Left logo (dark when scrolled) -->
      <img :src="scrolled ? '/logo.svg' : '/vigroup-biele.png'" alt="Firma" class="h-8 transition-opacity" />

      <!-- Center mark (hide on very small screens to avoid overlap) -->
      <div class="absolute left-1/2 -translate-x-1/2 hidden sm:flex">
        <img src="/bg-shapes.svg" alt="Resort" class="h-8 md:h-10" :class="scrolled ? 'invert' : ''"/>
      </div>

      <!-- Hamburger -->
      <button @click="menuOpen = !menuOpen"
              class="inline-flex items-center justify-center rounded-lg p-2"
              :class="scrolled ? 'hover:bg-black/5' : 'hover:bg-white/10'"
              aria-label="Menu">
        <span class="relative block w-6 h-4">
          <span class="absolute inset-x-0 top-0 h-[2px] transition" :class="[scrolled ? 'bg-ink' : 'bg-white', menuOpen ? 'translate-y-2 rotate-45' : '']"></span>
          <span class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] transition" :class="[scrolled ? 'bg-ink' : 'bg-white', menuOpen ? 'opacity-0' : 'opacity-100']"></span>
          <span class="absolute inset-x-0 bottom-0 h-[2px] transition" :class="[scrolled ? 'bg-ink' : 'bg-white', menuOpen ? '-translate-y-2 -rotate-45' : '']"></span>
        </span>
      </button>
    </div>
  </div>

    <!-- Rollout menu -->
<!-- Backdrop (tap to close) -->
<transition name="fade">
  <div v-if="menuOpen" class="fixed inset-0 z-40 bg-black/40" @click="menuOpen = false"></div>
</transition>

<!-- Panel -->
<transition name="slide-down">
  <nav v-if="menuOpen" class="fixed z-50 top-0 left-0 right-0 h-screen overflow-y-auto pt-20 pb-8">
    <div class="mx-auto max-w-7xl px-4">
      <div class="nav-glass rounded-2xl p-4 md:p-6">
        <div class="grid md:grid-cols-3 md:divide-x md:divide-white/10 gap-4">
          <!-- Column 1 -->
          <div class="px-2 md:px-4">
            <div class="flex items-center gap-1 font-semibold mb-2 text-lg md:text-xl">
              <span>Rezort</span>
              <svg viewBox="0 0 20 20" class="w-4 h-4 text-white" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/>
              </svg>
            </div>
            <a href="#vizia" class="drop-link" @click="menuOpen=false">Vízia</a>
            <a href="#lokalita" class="drop-link" @click="menuOpen=false">Lokalita</a>
            <a href="#architektura" class="drop-link" @click="menuOpen=false">Architektúra</a>
            <a href="#developer" class="drop-link" @click="menuOpen=false">Developer</a>
          </div>

          <!-- Column 2 -->
          <div class="px-2 md:px-4">
            <div class="flex items-center gap-1 font-semibold mb-2 text-lg md:text-xl">
              <span>Cenník</span>
              <svg viewBox="0 0 20 20" class="w-4 h-4 text-white" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/></svg>
            </div>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Apartmány</a>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Parkovanie</a>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Kobky</a>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Garážové státie</a>
          </div>

          <!-- Column 3 -->
          <div class="px-2 md:px-4">
            <div class="flex items-center gap-1 font-semibold mb-2 text-lg md:text-xl">
              <span>Info</span>
              <svg viewBox="0 0 20 20" class="w-4 h-4 text-white" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/></svg>
            </div>
            <a href="#financovanie" class="drop-link" @click="menuOpen=false">Financovanie</a>
            <a href="#galeria" class="drop-link" @click="menuOpen=false">Galéria</a>
            <a href="#kontakt" class="drop-link" @click="menuOpen=false">Kontakt</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</transition>
  </header>
</template>
