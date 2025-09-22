<script setup>
import { ref, watch } from "vue";
import { useInView } from "../composables/useInView"; // you already added this

const { el, visible } = useInView({ threshold: 0.25 });

// animated counters (once)
const years = ref(0);
const projects = ref(0);
let animated = false;

watch(visible, (v) => {
  if (!animated && v) {
    animated = true;
    animateNumber(years, 15, 900);
    animateNumber(projects, 12, 900);
  }
});

function animateNumber(sig, target, duration = 800) {
  const start = performance.now();
  const from = 0;
  const step = (t) => {
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    sig.value = Math.round(from + (target - from) * eased);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
</script>

<template>
  <section id="developer" class="py-28 scroll-mt-28 bg-white">
    <div class="container-x">
      <div class="grid lg:grid-cols-12 gap-10 items-center">
        <!-- LEFT: Photo, pushed out to the left -->
        <div
          class="lg:col-span-6 transition-all duration-700"
          :class="visible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-4'"
        >
          <!-- Bleed left by matching negative margins to your container padding -->
          <div class="-ml-6 md:-ml-10 lg:-ml-20 xl:-ml-28 2xl:-ml-36">
            <div class="overflow-hidden rounded-3xl border border-ink/10 shadow-card">
              <img
                src="/meet-vigroup.jpg"
                alt="Tím developera"
                class="w-full h-[30rem] md:h-[25rem] object-cover"
              />
            </div>
          </div>
        </div>

        <!-- RIGHT: Copy + metrics + quote + CTA -->
        <div
          ref="el"
          class="lg:col-span-6 transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <h2 class="section-title">Developer</h2>
          <p class="lead">
            Skúsený tím s dôrazom na kvalitu a transparentnosť. Staviame, ako keby sme to robili pre seba.
          </p>

          <!-- Metrics -->
          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="rounded-2xl bg-snow border border-ink/10 p-6 text-center">
              <div class="text-4xl font-semibold text-ink">{{ years }}</div>
              <div class="text-ink/70 text-sm">rokov skúseností</div>
            </div>
            <div class="rounded-2xl bg-snow border border-ink/10 p-6 text-center">
              <div class="text-4xl font-semibold text-ink">{{ projects }}</div>
              <div class="text-ink/70 text-sm">realizovaných projektov</div>
            </div>
          </div>

          <!-- Quote -->
          <blockquote class="mt-6 p-6 rounded-2xl bg-snow border border-ink/10 text-ink/80 relative">
            <svg class="absolute -top-3 left-5 w-6 h-6 text-ink/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 11h4v10H3V11c0-3.866 3.134-7 7-7v4c-1.657 0-3 1.343-3 3zm10-3v4c-1.657 0-3 1.343-3 3v6h8V11c0-3.866-3.134-7-7-7z"/>
            </svg>
            <p class="italic">
              „Našou ambíciou je vytvoriť miesto, kde sa príroda a pohodlie stretnú v jednej adrese.“
            </p>
            <footer class="not-italic text-ink/60 text-sm mt-3">— VIGROUP</footer>
          </blockquote>

          <!-- CTAs -->
          <div class="mt-6 flex gap-3">
            <a href="#kontakt" class="btn-primary">Kontaktovať</a>
            <a href="#galeria" class="btn-ghost">Galéria</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
