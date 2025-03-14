<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const isDark = computed(() => useColorMode().value == "dark");
</script>

<template>
    <div class="w-full min-h-screen relative">
        <div class="w-full">
            <LandingHero />
            <LandingQuote />
            <LandingMySkills />
            <LandingFooter />
        </div>
        <BackgroundParticle class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'"
            :staticity="10" refresh />
    </div>
</template>
