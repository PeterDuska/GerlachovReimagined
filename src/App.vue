<script setup lang="js">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import SectionWhy from "./components/SectionWhy.vue";
import SectionBenefits from "./components/SectionBenefits.vue";
import SalesSection from "./components/SalesSection.vue";
import NatureSection from "./components/NatureSection.vue";
import DeveloperSection from "./components/DeveloperSection.vue";
import GallerySection from "./components/GallerySection.vue";
import SubscribeContact from "./components/SubscribeContact.vue";
import SiteFooter from "./components/SiteFooter.vue";
import LocalitySection from "./components/LocalitySection.vue";
import WinterSummer from "./components/WinterSummer.vue";
</script>

<template>
  <div class="bg-gradient-to-b from-alpine to-granite text-white min-h-screen font-sans">
    <Navbar />
    <main>
      <Hero />
      <SectionWhy />
      <SectionBenefits />
<div class="w-full">
  <img src="/banner-4.jpg" alt="" class="w-full h-32 md:h-40 object-cover" />
</div>
      <SalesSection />
      <WinterSummer summer="/summer.jpg" winter="/winter.jpg" title="Leto × Zima" />
      <NatureSection />
    <!-- Add here -->
    <LocalitySection />
      <DeveloperSection />
      <SubscribeContact />
    </main>
    <SiteFooter />
  </div>
</template>
