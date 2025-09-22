<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Each "offer" is a full card with image + content
const offers = [
  {
    title: "Predaj spustený",
    text: "Svetlé apartmány s výhľadom na štíty. Parkovanie, kobky, garážové státie.",
    chips: ["1–3 izb.", "výhľad na štíty", "balkón / terasa"],
    img: "/banner-6.jpg",
  },
  {
    title: "Limitovaná edícia",
    text: "Rohové jednotky s extra presklením a veľkými terasami.",
    chips: ["rohové byty", "veľká terasa", "extra svetlo"],
    img: "/banner-1.jpg",
  },
  {
    title: "Family kolekcia",
    text: "Dispozície s detskou izbou a bohatými úložnými priestormi.",
    chips: ["rodinné", "kobky v cene", "parkovanie"],
    img: "/banner-4.jpg",
  },
];

const i = ref(0);
const len = offers.length;
const go = (n) => (i.value = (n + len) % len);
const next = () => go(i.value + 1);
const prev = () => go(i.value - 1);

// keyboard arrows
function onKey(e) {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
}
onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));

// touch swipe
let startX = 0;
const onTouchStart = (e) => (startX = e.touches[0].clientX);
const onTouchEnd = (e) => {
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
};
</script>

<template>
  <section id="cennik" class="py-24 scroll-mt-28 band-white">
    <div class="container-x">
      <div class="flex items-end justify-between mb-6">
        <h2 class="section-title">Ponuka apartmánov</h2>

        <!-- arrows -->
        <div class="flex gap-2">
          <button
            @click="prev"
            class="pointer-events-auto h-12 w-12 rounded-full bg-white/90 shadow-md hover:bg-white transition grid place-items-center"
            aria-label="Predchádzajúca"
          >
            <svg viewBox="0 0 20 20" class="w-5 h-5 text-ink" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5l-5 5 5 5"/>
            </svg>
          </button>
          <button
            @click="next"
            class="pointer-events-auto h-12 w-12 rounded-full bg-white/90 shadow-md hover:bg-white transition grid place-items-center"
            aria-label="Ďalšia"
          >
            <svg viewBox="0 0 20 20" class="w-5 h-5 text-ink" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 5l5 5-5 5"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- slider -->
      <div class="relative" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
        <div
          class="flex transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]"
          :style="{ transform: `translateX(-${i * 100}%)` }"
        >
          <!-- Slides -->
          <article v-for="(o,idx) in offers" :key="idx" class="min-w-full">
            <div class="relative overflow-hidden rounded-2xl bg-white border border-ink/10 shadow-card">
              <div class="grid lg:grid-cols-2">
                <!-- image -->
                <div class="relative">
                  <img :src="o.img" class="w-full h-[22rem] lg:h-full object-cover" :alt="o.title">
                  <div class="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                    <span v-for="c in o.chips" :key="c" class="px-3 py-1 rounded-full text-xs bg-white/85 text-ink border border-ink/10">
                      {{ c }}
                    </span>
                  </div>
                </div>
                <!-- copy -->
                <div class="p-10 lg:p-14">
                  <h3 class="text-2xl md:text-3xl font-semibold text-ink">{{ o.title }}</h3>
                  <p class="lead">{{ o.text }}</p>
                  <div class="mt-8 flex gap-3">
                    <a href="#kontakt" class="btn-primary">Mám záujem</a>
                    <a href="#financovanie" class="btn-ghost">Financovanie</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- dots -->
        <div class="mt-6 flex justify-center gap-2">
          <button
            v-for="(o,idx) in offers" :key="'dot'+idx"
            @click="go(idx)"
            :class="idx===i ? 'bg-ink' : 'bg-ink/20 hover:bg-ink/40'"
            class="h-2.5 w-2.5 rounded-full transition"
            aria-label="Prepnúť kartu"
          />
        </div>
      </div>
    </div>
  </section>
</template>
