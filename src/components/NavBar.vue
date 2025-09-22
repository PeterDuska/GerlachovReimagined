<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => (scrolled.value = window.scrollY > 20);

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-coal/70 backdrop-blur-xl border-b border-white/10'
      : 'bg-transparent'"
  >
    <span
      class="glass-anim absolute inset-0 z-0"
      :class="[scrolled ? 'opacity-100 glass-anim-strong' : 'opacity-0']"
    />
    <div class="relative z-10 mx-auto max-w-7xl px-4">
      <div
        class="flex items-center justify-between transition-[height,padding] duration-500"
      :class="scrolled ? 'h-14' : 'h-20'"

      >
        <!-- Left: firm logo/text -->
        <div class="flex items-center gap-2">
          <img src="/vigroup-biele.png" alt="Firma" class="h-8" />
        </div>

        <!-- Center: bg-shapes logo -->
        <div class="absolute left-1/2 -translate-x-1/2 flex items-center">
          <img
            src="/bg-shapes.svg"
            alt="Resort Logo"
            class="h-8 md:h-10 opacity-100"
          />
        </div>

        <!-- Right: hamburger always -->
        <button
          @click="menuOpen = !menuOpen"
          class="inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 transition"
          aria-label="Menu"
        >
          <span class="relative block w-6 h-4">
            <span
              class="absolute inset-x-0 top-0 h-[2px] bg-white transition"
              :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
            ></span>
            <span
              class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white transition"
              :class="menuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="absolute inset-x-0 bottom-0 h-[2px] bg-white transition"
              :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
            ></span>
          </span>
        </button>
      </div>
    </div>

    <!-- Rollout menu -->
    <transition name="fade">
<nav v-show="menuOpen" class="absolute top-full inset-x-0">
  <div class="mx-auto max-w-7xl px-4 py-4">
    <div class="nav-glass rounded-2xl p-3 md:p-4">
      <div class="grid md:grid-cols-3 md:divide-x md:divide-white/10">
        <!-- Column 1 -->
        <div class="px-4 py-2">
          <div class="flex items-center gap-1 font-semibold mb-2">
            <span class="text-lg md:text-xl">Rezort</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-white">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/>
            </svg>
          </div>
          <a href="#vizia" class="drop-link" @click="menuOpen=false">Vízia</a>
          <a href="#lokalita" class="drop-link" @click="menuOpen=false">Lokalita</a>
          <a href="#architektura" class="drop-link" @click="menuOpen=false">Architektúra</a>
          <a href="#developer" class="drop-link" @click="menuOpen=false">Developer</a>
        </div>

        <!-- Column 2 -->
        <div class="px-4 py-2">
          <div class="flex items-center gap-1 font-semibold mb-2">
            <span class="text-lg md:text-xl">Cenník</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-white"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/></svg>
          </div>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">3D Prehliadka</a>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Apartmány</a>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Parkovanie</a>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Kobky</a>
            <a href="#cennik" class="drop-link" @click="menuOpen=false">Garážové státie</a>
        </div>

        <!-- Column 3 -->
        <div class="px-4 py-2">
          <div class="flex items-center gap-1 font-semibold mb-2">
            <span class="text-lg md:text-xl">Info</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-white"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/></svg>
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
