<template>
    <div class="w-full min-h-screen relative">
        <BackgroundTetris
            class="fixed inset-0 -z-10 w-full h-full [mask-image:radial-gradient(750px_circle_at_center,#007BFF,transparent)]"
            :base="30"
            square-color="#007BFF"
        />
        <LandingHero />
        <LandingQuote />
        <LandingMySkills />
        <LandingFooter />
    </div>
</template>
