<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const slides = ref([
  { src: "/banner-1.jpg", caption: "Nadčasová architektúra v objatí Tatier." },
  { src: "/banner-4.jpg", caption: "Výhľady na štíty a vôňa lesa." },
  { src: "/banner-3.jpg", caption: "Pokoj prírody a komfort domova." },
]);


const index = ref(0);
let timer;

onMounted(() => {
  // preload
  slides.value.forEach(s => { const i = new Image(); i.src = s.src; });
  timer = setInterval(() => { index.value = (index.value + 1) % slides.value.length }, 4200);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-end text-white">
    <!-- Background image + gradient overlay -->
    <div class="absolute inset-0">
      <div class="relative w-full h-full">
        <img
          v-for="(s, i) in slides" :key="s.src" :src="s.src" :alt="`Slide ${i+1}`"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 will-change-opacity"
          :class="i === index ? 'opacity-100' : 'opacity-0'"
        />
      </div>
      <div class="absolute inset-0 hero-sunrise"></div>
    </div>

    <!-- Hero content -->
    <div class="relative z-10 w-full text-center pb-32">
      <h1 class="text-4xl md:text-6xl font-bold">Domov pod štítmi.</h1>
      <p class="mt-4 text-lg md:text-xl">
        {{ slides[index].caption }}
      </p>
    <div class="mt-10 flex justify-center gap-3">
    <a href="#cennik" class="btn-primary">Pozrieť ponuku</a>
    <a href="#galeria" class="btn-accent">Galéria</a>
    </div>
    </div>

    <!-- Scroll-down arrow -->
    <a
      href="#vizia"
      class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60 hover:text-white transition"
    >
      <svg
        class="w-6 h-6 animate-bounce"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <span class="sr-only">Scroll down</span>
    </a>
  </section>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity .9s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* optional: respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .fade-enter-active, .fade-leave-active { transition: none; }
}
</style>