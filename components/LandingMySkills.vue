<script setup lang="ts">
import IconCloud from './ui/IconCloud.vue';

const slugs = [
    "typescript",
    "javascript",
    "nuxt",
    "java",
    "react",
    "unity",
    "tailwindcss",
    "html5",
    "css3",
    "nodedotjs",
    "laravel",
    "golang",
    "postgresql",
    "unrealengine",
    "nginx",
    "vercel",
    "godot",
    "vuedotjs",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "rider",
    "nuxt",
    "php",
    "mysql"
];

const imageUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
</script>

<template>
    <div class="py-24 w-screen flex flex-col items-center justify-center">
        <div class="flex justify-center">
            <TextBlurReveal>
                <h1 class="mt-4 text-bold text-4xl">{{ $t('my_skill.title') }}</h1>
            </TextBlurReveal>
        </div>
        <div class="mt-16 grid-cols-1 grid md:grid-cols-3 gap-8 max-w-7xl">
            <CardMySkill :title="$t('my_skill.web_title')" :description="$t('my_skill.web_description')" />
            <div class="flex justify-center">
                <ClientOnly>
                    <IconCloud :images="imageUrls" />
                </ClientOnly>
            </div>
            <CardMySkill :title="$t('my_skill.game_title')" :description="$t('my_skill.game_description')" />
        </div>
    </div>
</template>