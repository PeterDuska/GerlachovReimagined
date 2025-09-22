<script setup>
import { useInView } from "../composables/useInView";
const { el, visible } = useInView();
</script>

<template>
  <section id="architektura" class="py-24 bg-[#E8F2FA] scroll-mt-28">
    <div class="container-x grid lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-6">
        <h2 class="section-title">Relax v prírode</h2>
        <p class="lead">Ranné túry, popoludňajšie wellness, večerné hviezdy. Ticho lesa a čistý vzduch sú tu doma.</p>
        <ul class="mt-6 grid sm:grid-cols-2 gap-3 text-ink/70">
          <li class="flex items-center gap-2">
            <span class="h-5 w-5 rounded-full bg-ink/10"></span> cyklotrasy a bežky od rezortu
          </li>
          <li class="flex items-center gap-2">
            <span class="h-5 w-5 rounded-full bg-ink/10"></span> wellness & spa
          </li>
          <li class="flex items-center gap-2">
            <span class="h-5 w-5 rounded-full bg-ink/10"></span> rodinné aktivity po celý rok
          </li>
        </ul>
      </div>

      <!-- Mosaic with hover parallax -->
      <div ref="el" class="lg:col-span-6 grid grid-cols-2 gap-4">
        <div class="relative overflow-hidden rounded-2xl shadow-card border border-ink/10
                    transition-all duration-700"
             :class="[visible?'opacity-100 translate-y-0':'opacity-0 translate-y-6']">
          <img src="/banner-3.jpg" class="w-full h-52 object-cover transition-transform duration-700 hover:scale-105">
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-card border border-ink/10
                    transition-all duration-700 delay-100"
             :class="[visible?'opacity-100 translate-y-0':'opacity-0 translate-y-6']">
          <img src="/banner-1.jpg" class="w-full h-52 object-cover transition-transform duration-700 hover:scale-105">
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-card border border-ink/10 col-span-2
                    transition-all duration-700 delay-200"
             :class="[visible?'opacity-100 translate-y-0':'opacity-0 translate-y-6']">
          <img src="/banner-4.jpg" class="w-full h-64 object-cover transition-transform duration-700 hover:scale-105">
        </div>
      </div>
    </div>
  </section>
</template>
