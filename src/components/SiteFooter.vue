<template>
  <footer class="bg-gradient-to-b from-coal to-[#0d141a] text-white/80">
    <!-- top -->
    <div class="container-x py-14">
      <div class="grid md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3">
            <img src="/vigroup-biele.png" class="h-7" alt="logo" />
            <div class="font-semibold text-white">Vysoké Tatry Resort</div>
          </div>
          <p class="mt-3 text-sm text-white/60 max-w-sm">
            Elegantný, minimalistický a profesionálny realitný projekt pod najvyššími horami Slovenska.
          </p>
        </div>

        <!-- Nav -->
        <div>
          <div class="text-white font-semibold">Resort</div>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="#vizia" class="footer-link">Vízia</a></li>
            <li><a href="#lokalita" class="footer-link">Lokalita</a></li>
            <li><a href="#architektura" class="footer-link">Architektúra</a></li>
            <li><a href="#developer" class="footer-link">Developer</a></li>
          </ul>
        </div>

        <div>
          <div class="text-white font-semibold">Informácie</div>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="#cennik" class="footer-link">Cenník</a></li>
            <li><a href="#financovanie" class="footer-link">Financovanie</a></li>
            <li><a href="#galeria" class="footer-link">Galéria</a></li>
            <li><a href="#kontakt" class="footer-link">Kontakt</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <div class="text-white font-semibold">Kontakt</div>
          <ul class="mt-3 space-y-2 text-sm">
            <li class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Tatry, Slovensko
            </li>
            <li class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4zM4 7l8 6 8-6"/></svg>
              <a href="mailto:info@tatryresort.sk" class="footer-link">info@tatryresort.sk</a>
            </li>
          </ul>

          <!-- socials (optional, minimal) -->
          <div class="mt-4 flex gap-3">
            <a aria-label="Instagram" href="#" class="footer-icon">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>
            </a>
            <a aria-label="Facebook" href="#" class="footer-icon">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- bottom bar -->
    <div class="border-t border-white/10">
      <div class="container-x py-6 text-xs text-white/60 flex items-center justify-between">
        <div>© Tatry Resort {{ new Date().getFullYear() }}</div>
        <div class="flex gap-4">
          <a href="#" class="hover:text-white">Podmienky</a>
          <a href="#" class="hover:text-white">GDPR</a>
        </div>
      </div>
    </div>
  </footer>
</template>
