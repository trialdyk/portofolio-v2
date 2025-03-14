<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <div
            class="relative h-full w-full flex items-center justify-center bg-gradient-to-b text-white overflow-hidden">
            <div class="relative z-10 text-center px-6 max-w-3xl">
                <h1 class="text-2xl md:text-4xl font-bold mt-6">
                    {{ $t('landing_hero.greeting') }}
                </h1>
                <h1 class="text-xl md:text-3xl font-bold mt-2 md:mt-6">
                    {{ $t('landing_hero.me') }} <span class="text-blue-600">Tri Aldy Kurniawan</span> - {{
                        $t('landing_hero.i_am_a') }}
                    <TextTyping
                        :texts="['Web Developer', 'Game Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer']" />
                </h1>
                <p class="text-gray-200 text-sm md:text-md mt-4 mb-6">
                    <TextGenerateEffect :words="$t('landing_hero.description')" />
                </p>
                <ClientOnly>
                    <div class="flex justify-center ">
                        <ButtonGradient class="mx-auto">{{ $t('landing_hero.get_in_touch') }}</ButtonGradient>
                    </div>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>