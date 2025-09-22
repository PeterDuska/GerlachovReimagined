<script setup>
import { useInView } from "../composables/useInView";

const { el: leftEl,  visible: leftIn  } = useInView({ threshold: 0.15 });
const { el: rightEl, visible: rightIn } = useInView({ threshold: 0.15 });
</script>

<template>
  <section id="vizia" class="py-24 scroll-mt-28 band-sunrise">
    <div class="container-x">
      <div class="grid lg:grid-cols-12 gap-10 items-center">
        <!-- LEFT: headline + copy (give it a span!) -->
        <div ref="leftEl"
             class="lg:col-span-5 transition-all duration-700 will-change-transform"
             :class="leftIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
          <h2 class="section-title">Prečo tento projekt</h2>
          <p class="lead max-w-md">
            Elegantný horský rezort v srdci Vysokých Tatier. Nadčasová architektúra,
            príroda na dosah a premyslené dispozície pre život aj investíciu.
          </p>

          <div class="mt-8 space-y-4">
            <div class="flex gap-3 items-start">
              <span class="badge">
                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.7">
                  <path d="M3 18l6-9 4 6 2-3 6 6H3z" />
                </svg>
              </span>
              <div>
                <div class="font-medium" style="color: black;">Lokalita pod štítmi</div>
                <p class="text-ink/70 text-sm mt-1">Pešo k lanovkám, trasám a wellness zónam.</p>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <span class="badge">
                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.7">
                  <path d="M4 12h16M4 16h10M4 8h8" />
                </svg>
              </span>
              <div>
                <div class="font-medium" style="color: black;">Nadčasová architektúra</div>
                <p class="text-ink/70 text-sm mt-1">Prírodné materiály, veľké presklenia, krásne výhľady.</p>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <span class="badge">
                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.7">
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </span>
              <div>
                <div class="font-medium" style="color: black;">Udržateľnosť</div>
                <p class="text-ink/70 text-sm mt-1">Úsporné riešenia a dôraz na komfort bývania.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: image card -->
        <div ref="rightEl"
             class="lg:col-span-7 transition-all duration-700 delay-100 will-change-transform"
             :class="rightIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
          <div class="image-card rounded-2xl overflow-hidden">
            <img src="/banner-2.jpg" alt="Rezort"
                 class="w-full h-[24rem] md:h-[28rem] object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
