<script setup>
import { ref } from "vue";
import { useInView } from "../composables/useInView";

const tab = ref("invest");
const invest = [
  { title: "Stabilný výnos", text: "Dopyt počas celého roka vďaka 4 sezónam.", img: "/banner-3.jpg" },
  { title: "Bez starostí", text: "Profesionálna správa a prenájom apartmánu.", img: "/rent.webp" },
  { title: "Hodnota lokality", text: "Prémiová poloha si drží cenu v čase.", img: "/banner-1.jpg" },
];
const holiday = [
  { title: "Druhé bývanie", text: "Únik do hôr na víkend aj celé leto.", img: "/banner-1.jpg" },
  { title: "Rodina & aktivity", text: "Turistika, cyklo, wellness — po celý rok.", img: "/banner-2.jpg" },
  { title: "Zdravé prostredie", text: "Ticho lesa, čistý vzduch a nočná obloha.", img: "/img-2.webp" },
];

const open = ref(-1);
const items = () => (tab.value === "invest" ? invest : holiday);

// section in-view state (single observer + stagger for children)
const { el, visible } = useInView({ threshold: 0.15 });

// smooth accordion hooks (already added earlier)
function beforeEnter(el) { el.style.height = "0"; el.style.opacity = "0"; }
function enter(el)      { el.style.transition = "height 360ms cubic-bezier(.2,.8,.2,1), opacity 240ms ease";
                          el.style.height = el.scrollHeight + "px"; el.style.opacity = "1"; }
function leave(el)      { el.style.height = el.scrollHeight + "px"; void el.offsetHeight;
                          el.style.transition = "height 320ms cubic-bezier(.2,.8,.2,1), opacity 180ms ease";
                          el.style.height = "0"; el.style.opacity = "0"; }
</script>

<template>
  <section id="lokalita" class="py-24 scroll-mt-28 band-stone">
    <div class="container-x" ref="el">
      <!-- header row -->
      <div class="flex items-baseline justify-between gap-6
                  transition-all duration-700 will-change-transform"
           :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
        <h2 class="section-title">Dobrý nápad kúpiť</h2>

        <div class="shrink-0 inline-flex rounded-full bg-white border border-ink/[.08] p-1">
          <button @click="open=-1; tab='invest'"
                  :class="['px-4 py-2 rounded-full text-sm transition',
                            tab==='invest' ? 'bg-meadow text-white' : 'text-ink/70 hover:text-ink']">
            Investícia
          </button>
          <button @click="open=-1; tab='holiday'"
                  :class="['px-4 py-2 rounded-full text-sm transition',
                            tab==='holiday' ? 'bg-glacier text-white' : 'text-ink/70 hover:text-ink']">
            Rekreácia
          </button>
        </div>
      </div>

      <!-- cards -->
      <div class="mt-10 grid md:grid-cols-3 gap-6">
        <div
          v-for="(card,i) in items()" :key="card.title"
          class="group relative overflow-hidden rounded-2xl bg-white border border-ink/[.06] shadow-card cursor-pointer
                 transition-all duration-700 will-change-transform"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="visible ? { transitionDelay: `${i*90}ms` } : {}"
          @click="open = open===i ? -1 : i"
        >
          <img :src="card.img"
               class="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="p-5">
            <div class="font-medium text-ink">{{ card.title }}</div>
            <p class="text-ink/70 text-sm mt-1">{{ card.text }}</p>
          </div>

          <!-- smooth accordion -->
          <transition name="expand" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-if="open===i" class="px-5 pb-5 text-ink/70 text-sm overflow-hidden">
              <ul class="list-disc ml-5 space-y-1">
                <li>Transparentné zmluvy a správa.</li>
                <li>Možnosť plného servisu prenájmu.</li>
                <li>Flexibilné využitie pre vás aj hostí.</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
