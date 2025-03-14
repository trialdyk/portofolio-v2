<script setup lang="ts">
import Orbit from "./ui/orbit/Orbit.vue";
import { ORBIT_DIRECTION } from "../components/ui/orbit";
</script>

<template>
    <div class="py-24 w-screen flex flex-col items-center justify-center">
        <div class="flex w-full justify-center items-center flex-col">
            <TextBlurReveal :delay="0.2" :duration="0.75" class="p-4">
                <TextRadiant
                    class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-800 hover:duration-300 hover:dark:text-neutral-200"
                    :duration="5">
                    <h1 class="mt-4 text-bold text-4xl">{{ $t('my_skill.title') }}</h1>
                </TextRadiant>
            </TextBlurReveal>
            <div class="mt-4 max-w-4xl gap-4 grid grid-cols-1 md:grid-cols-2">
                <CardMySkill icon="ph:code" :title="$t('my_skill.web_title')"
                    :description="$t('my_skill.web_description')" />
                <CardMySkill icon="ph:game-controller" :title="$t('my_skill.game_title')"
                    :description="$t('my_skill.game_description')" />
            </div>
            <div class="mt-6 max-w-5xl w-full">
                <div
                    class="relative flex h-[500px] w-full flex-col items-center justify-center ">
                    <span class="pointer-events-none text-center text-6xl font-semibold leading-none">
                        <Icon name="logos:visual-studio-code" />
                    </span>

                    <!-- Inner Circles -->
                    <Orbit class="items-center justify-center border-none bg-transparent" :duration="20"
                        :delay="5" :radius="120" path :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="devicon:rider" size="32" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :duration="20"
                        :delay="10" :radius="120" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="skill-icons:unity-dark" size="32" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :duration="20"
                        :delay="15" :radius="120" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="devicon:godot" size="32" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :duration="20"
                        :delay="20" :radius="120" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="skill-icons:github-light" size="32" />
                    </Orbit>

                    <!-- Inner 2 Circles (reverse) -->
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="185"
                        :direction="ORBIT_DIRECTION.Clockwise"
                        :duration="25" :delay="5" path >
                        <Icon name="devicon:laravel" size="32" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="185"
                        :direction="ORBIT_DIRECTION.Clockwise"
                        :duration="25" :delay="10">
                        <Icon name="logos:go" size="24" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="185"
                        :direction="ORBIT_DIRECTION.Clockwise"
                        :duration="25" :delay="15">
                        <Icon name="logos:vue" size="28" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="185"
                        :direction="ORBIT_DIRECTION.Clockwise"
                        :duration="25" :delay="20">
                        <Icon name="logos:nuxt-icon" size="24" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="185"
                        :direction="ORBIT_DIRECTION.Clockwise"
                        :duration="25" :delay="25">
                        <Icon name="logos:react" size="32" />
                    </Orbit>

                    <!-- Outer Circles (reverse) -->
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="5" path :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="logos:java" size="32" />
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="10" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="logos:javascript" size="26"/>
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="15" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="logos:php" size="24"/>
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="20" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="logos:c-sharp" size="32"/>
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="25" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="logos:tailwindcss-icon" size="26"/>
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="30" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="skill-icons:html" size="32"/>
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="35" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="skill-icons:css" size="32"/>
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="40" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="devicon:jquery" size="32"/>
                    </Orbit>
                    <Orbit class="items-center justify-center border-none bg-transparent" :radius="250"
                        :duration="45" :delay="45" :direction="ORBIT_DIRECTION.CounterClockwise">
                        <Icon name="devicon:python" size="32"/>
                    </Orbit>
                </div>
            </div>
        </div>
    </div>
</template>