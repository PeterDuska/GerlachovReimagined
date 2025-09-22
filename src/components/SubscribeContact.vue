<script setup>
import { ref } from "vue";

const email = ref("");
const subscribed = ref(false);

const form = ref({ name: "", phone: "", message: "" });
const sent = ref(false);

function subscribe() {
  if (!email.value) return;
  subscribed.value = true;
  setTimeout(() => (subscribed.value = false), 4000);
}

function send() {
  if (!form.value.name || !form.value.phone || !form.value.message) return;
  sent.value = true;
  setTimeout(() => (sent.value = false), 4000);
}
</script>

<template>
  <section id="kontakt" class="py-24 band-stone">
    <div class="container-x">
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Newsletter -->
        <div class="card p-8">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-ink/[.06] grid place-items-center">
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-ink/80" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16v16H4zM4 7l8 6 8-6"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-ink">Prihlásenie k novinkám</h3>
          </div>

          <p class="text-ink/70 mt-2">
            Dostávajte informácie o predaji a postupe výstavby.
          </p>

          <form class="mt-5 space-y-3" @submit.prevent="subscribe">
            <input v-model="email" type="email" required placeholder="Váš e-mail" class="input" />
            <button type="submit" class="btn-primary w-full">Odoberať novinky</button>
          </form>

          <p v-if="subscribed" class="mt-3 text-sm text-ink/70">
            ✅ Ďakujeme. Potvrďte odber v e-maile.
          </p>

          <p class="mt-4 text-xs text-ink/50">
            Odber môžete kedykoľvek zrušiť. Žiadny spam, iba dôležité informácie.
          </p>
        </div>

        <!-- Contact form -->
        <div class="card p-8">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-ink/[.06] grid place-items-center">
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-ink/80" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M21 10V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 0v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7m18 0H3"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-ink">Napíšte nám</h3>
          </div>

          <form class="mt-5 grid grid-cols-1 gap-3" @submit.prevent="send">
            <input v-model="form.name" required placeholder="Meno" class="input" />
            <input v-model="form.phone" required type="tel" placeholder="Telefón" class="input" />
            <textarea v-model="form.message" required rows="4" placeholder="Správa" class="input"></textarea>
            <div class="flex gap-3">
              <button type="submit" class="btn-primary">Odoslať</button>
              <a href="mailto:info@tatryresort.sk" class="btn-ghost">info@tatryresort.sk</a>
            </div>
          </form>

          <p v-if="sent" class="mt-3 text-sm text-ink/70">✅ Správa odoslaná (demo).</p>

          <div class="mt-6 text-sm text-ink/60">
            <div class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 6.18 2 2 0 0 1 5 4h2.09a1 1 0 0 1 1 .75l.57 2.3a1 1 0 0 1-.27 1L7.6 9.6a16 16 0 0 0 6.8 6.8l1.55-1.79a1 1 0 0 1 1-.27l2.3.57a1 1 0 0 1 .75 1Z"/></svg>
              +421 000 000 000
            </div>
            <div class="flex items-center gap-2 mt-1">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Tatry, Slovensko
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
