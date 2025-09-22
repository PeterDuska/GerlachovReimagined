<script setup>
import { ref } from "vue";
const images = ["/banner-1.jpg","/banner-2.jpg","/banner-3.jpg","/banner-4.jpg","/banner-2.jpg","/banner-3.jpg"];
const openSrc = ref(null);
</script>

<template>
  <section id="galeria" class="py-24 scroll-mt-28 band-stone">
    <div class="container-x">
      <h2 class="section-title mb-8">Galéria</h2>

      <!-- Masonry using CSS columns -->
      <div class="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        <img v-for="(src,i) in images" :key="i" :src="src"
             class="mb-4 w-full rounded-2xl break-inside-avoid object-cover hover:opacity-90 cursor-zoom-in"
             @click="openSrc = src" />
      </div>

      <!-- Lightbox -->
      <transition name="fade">
        <div v-if="openSrc" class="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-6" @click.self="openSrc=null">
          <img :src="openSrc" class="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl">
          <button class="absolute top-6 right-6 px-3 py-2 rounded-full bg-white text-ink font-medium" @click="openSrc=null">Zavrieť</button>
        </div>
      </transition>
    </div>
  </section>
</template>
