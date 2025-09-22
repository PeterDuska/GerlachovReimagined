<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const y = ref(0);
function onScroll() {
  // gentle, clamped parallax (max ±24px)
  const offset = window.scrollY * 0.06;
  y.value = Math.max(-24, Math.min(24, offset));
}
onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
<section
  id="lokalita-map"
  class="relative pt-20 pb-0 bg-[#E8F2FA] scroll-mt-28"
>
  <div class="container-x mb-6">
    <h2 class="section-title">Lokalita — pod štítmi</h2>
    <p class="lead">Rezort v srdci Vysokých Tatier, medzi Tatranskou Poliankou a Gerlachovom.</p>
  </div>

  <div class="relative overflow-hidden leading-none">
    <img
      src="/locality.webp"
      alt="Mapa polohy rezortu vo Vysokých Tatrách"
      class="block w-full h-[75vh] md:h-[80vh] object-cover object-top -mb-px"
      :style="{ transform: `translateY(${y}px)` }"
    />
  </div>
</section>
</template>

