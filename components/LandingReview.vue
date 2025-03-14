<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");
import Marquee from './ui/marque/Marquee.vue';
// Reviews data
const reviews = [
    {
        name: "kiri",
        username: "@kiruba_selvi6",
        body: "Oooohhh wowww...!!",
        img: "https://inspira-ui.com/images/x-logo.svg",
    },
    {
        name: "Sébastien Chopin",
        username: "@Atinux",
        body: "You ship 🚢",
        img: "https://inspira-ui.com/images/x-logo.svg",
    },
    {
        name: "Mattia Guariglia",
        username: "@matt_guariglia",
        body: "Omg 🥰",
        img: "https://inspira-ui.com/images/x-logo.svg",
    },
    {
        name: "Nelson🐐",
        username: "@Mathiasokafor3",
        body: "Thank you so much for all you do for the Vue/nuxt eco system.",
        img: "https://inspira-ui.com/images/x-logo.svg",
    },
    {
        name: "Premdas Vm",
        username: "@premdasvm",
        body: "Man, this is soo good! I've been jealous of React because their eco-system had Magic UI and other ones like this. Inspira UI is 🔥🙌🏼",
        img: "https://inspira-ui.com/images/x-logo.svg",
    },
    {
        name: "Pierre",
        username: "@PierreHenryBap",
        body: "It looks really awesome! Just noticed it a couple of days ago and I can’t wait to try it out.",
        img: "https://inspira-ui.com/images/x-logo.svg",
    },
    {
        name: "Waldemar Enns",
        username: "@WaldemarEnns",
        body: "Awesome! ⭐️ed it immediately",
        img: "https://inspira-ui.com/images/x-logo.svg",
    },
];

// Rows
const firstRow = ref(reviews);
</script>

<template>
    <div class="w-screen flex justify-center mt-12">
        <div class="flex w-full max-w-7xl flex-col items-center justify-center p-4">
            <TextBlurReveal :delay="0.2" :duration="0.75" class="py-12 mb-6">
                <TextRadiant
                    class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-800 hover:duration-300 hover:dark:text-neutral-200"
                    :duration="5">
                    <h1 class="mt-4 whitespace-nowrap text-bold text-4xl">{{ $t('reviews.title') }}</h1>
                </TextRadiant>
            </TextBlurReveal>
            <div class="relative h-[630px] w-full overflow-hidden rounded-xl bg-white shadow-lg dark:bg-background">
    
                <!-- Center Text -->
                <div class="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center px-4 text-center">
                    <h3 class="mb-2 text-2xl font-bold sm:text-3xl">{{ $t('reviews.interested') }}</h3>
                    <NuxtLink class="font-semibold text-lg p-3 mt-2" to="/contact">
                        {{ $t('reviews.contact') }}
                    </NuxtLink>
                </div>

    
                <!-- Tilted Marquees -->
                <div class="absolute inset-0 overflow-hidden">
                    <Marquee :style="{ transform: 'translateY(-11.5rem) rotate(-16deg)' }" class="marquee"
                        :pause-on-hover="false">
                        <CardReview v-for="review in firstRow" :key="review.username" :img="review.img" :name="review.name"
                            :username="review.username" :body="review.body" />
                    </Marquee>
    
                    <Marquee :style="{ transform: 'translateY(1rem) rotate(-16deg)' }" reverse class="marquee"
                        :pause-on-hover="false">
                        <CardReview v-for="review in firstRow" :key="review.username" :img="review.img" :name="review.name"
                            :username="review.username" :body="review.body" />
                    </Marquee>
    
                    <Marquee :style="{ transform: 'translateY(13.5rem) rotate(-16deg)' }" class="marquee"
                        :pause-on-hover="false">
                        <CardReview v-for="review in firstRow" :key="review.username" :img="review.img" :name="review.name"
                            :username="review.username" :body="review.body" />
                    </Marquee>
    
                    <Marquee :style="{ transform: 'translateY(26rem) rotate(-16deg)' }" reverse class="marquee"
                        :pause-on-hover="false">
                        <CardReview v-for="review in firstRow" :key="review.username" :img="review.img" :name="review.name"
                            :username="review.username" :body="review.body" />
                    </Marquee>
                    <Marquee :style="{ transform: 'translateY(38.5rem) rotate(-16deg)' }" class="marquee"
                        :pause-on-hover="false">
                        <CardReview v-for="review in firstRow" :key="review.username" :img="review.img" :name="review.name"
                            :username="review.username" :body="review.body" />
                    </Marquee>
                </div>
    
                <div
                    class="pointer-events-none absolute inset-0 right-0 bg-gradient-to-l from-white via-white/10 to-transparent dark:from-background dark:via-background/5">
                </div>
                <div
                    class="pointer-events-none absolute inset-0 left-0 bg-gradient-to-r from-white via-white/10 to-transparent dark:from-background dark:via-background/5">
                </div>
                <div
                    class="pointer-events-none absolute inset-0 top-0 bg-gradient-to-b from-white via-white/10 to-transparent dark:from-background dark:via-background/5">
                </div>
                <!-- Gradient overlay to fade to white at the bottom -->
                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-background dark:via-background/5">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.marquee {
    --duration: 40s;
    position: absolute;
    left: -10%;
    width: 120%;
    padding: 0.5rem 0;
}
</style>