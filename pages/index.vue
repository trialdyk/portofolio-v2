<script setup lang="ts">
const isDark = computed(() => useColorMode().preference == "dark");
</script>

<template>
    <div class="w-full min-h-screen relative">
        <div class="w-full">
            <LandingHero />
            <LandingQuote />
            <LandingMySkills />
            <LandingReview />
            <LandingFooter />
        </div>
        <BackgroundParticle class="absolute inset-0" :quantity="300" :ease="100" :color="isDark ? '#FFF' : '#000'"
            :staticity="10" refresh />
    </div>
</template>
