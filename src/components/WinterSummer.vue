<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  summer: { type: String, default: "/summer.jpg" },
  winter: { type: String, default: "/winter.jpg" },
  title:  { type: String, default: "Leto × Zima" }
});

const pos = ref(0.5);          // 0..1 slider position
const dragging = ref(false);
const wrap = ref(null);



// clip only the RIGHT side of the winter layer by (1 - pos)
const clipStyle = computed(() => ({
  clipPath: `polygon(0 0, ${pos.value * 100}% 0, ${pos.value * 100}% 100%, 0 100%)`,
}));
const handleStyle = computed(() => ({ left: `${pos.value * 100}%` }));

function clamp(v, min = 0.02, max = 0.98) {
  return Math.max(min, Math.min(max, v));
}
function setFromEvent(e) {
  const rect = wrap.value.getBoundingClientRect();
  const x = ("clientX" in e ? e.clientX : e.touches[0].clientX) - rect.left;
  pos.value = clamp(x / rect.width);
}

function down(e) {
  dragging.value = true;
  setFromEvent(e);
  window.addEventListener("pointermove", move, { passive: false });
  window.addEventListener("pointerup", up);
}
function move(e) {
  if (!dragging.value) return;
  e.preventDefault(); // stop page scroll while dragging
  setFromEvent(e);
}
function up() {
  dragging.value = false;
  window.removeEventListener("pointermove", move);
  window.removeEventListener("pointerup", up);
}

function key(e) {
  if (e.key === "ArrowLeft")  pos.value = clamp(pos.value - 0.03);
  if (e.key === "ArrowRight") pos.value = clamp(pos.value + 0.03);
}

onMounted(() => {
  // small preload to avoid flashes
  [props.summer, props.winter].forEach(src => { const i = new Image(); i.src = src; });
});
onBeforeUnmount(() => up());
</script>

<template>
  <section id="seasons" class="py-24 scroll-mt-28 band-white">
    <div class="container-x">
      <div class="mb-6 flex items-end justify-between">
        <h2 class="section-title">{{ title }}</h2>
        <div class="text-sm text-ink/60 hidden md:block">Potiahnite stredovú páčku ➜</div>
      </div>

      <!-- Comparison -->
    <div
        ref="wrap"
        class="relative w-full h-[56vh] min-h-[320px] rounded-3xl overflow-hidden border border-ink/10 shadow-card select-none"
        style="touch-action:none"
        @pointerdown="down"
        @keydown="key"
        tabindex="0"
        role="slider"
        :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="Math.round(pos*100)"
      >
        <!-- SUMMER base (full size, never moves/scales) -->
        <img
          :src="summer" alt="Leto"
          class="absolute inset-0 w-full h-full object-cover object-center will-change-transform pointer-events-none"
          loading="lazy"
        />

        <!-- WINTER overlay (full size, only clipped) -->
        <img
          :src="winter" alt="Zima"
          class="absolute inset-0 w-full h-full object-cover object-center will-change-transform pointer-events-none"
          :style="clipStyle"
          loading="lazy"
        />

        <!-- divider + handle -->
        <div class="absolute inset-y-0 w-px bg-white/80" :style="handleStyle"></div>
        <button
          class="group absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full
                 bg-white/90 text-ink shadow-md hover:bg-white focus:outline-none focus:ring-2
                 focus:ring-glacier/60 transition grid place-items-center"
          :style="handleStyle"
          @pointerdown.stop="down"
          aria-label="Posúvač"
        >
          <svg viewBox="0 0 24 24" class="w-5 h-5">
            <path d="M10 7l-5 5 5 5M14 17l5-5-5-5"
                  fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="absolute top-3 left-3" style="color:black;">Leto</div>
        <div class="absolute top-3 right-3" style="color:black;">Zima</div>
      </div>
    </div>
  </section>
</template>
