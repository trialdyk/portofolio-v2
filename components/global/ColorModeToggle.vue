<template>
    <button
        class="rounded-full border border-slate-300 dark:border-slate-700 flex justify-center items-center p-1 dark:bg-[#020618] dark:text-white transition-all duration-300"
        @click="toggleDarkMode">
        <Transition name="fade" mode="out-in">
            <Icon v-if="colorMode.preference === 'light'" name="material-symbols:wb-sunny"
                class="size-5 text-yellow-500" key="light" />
            <Icon v-else name="material-symbols:dark-mode" class="size-5 text-yellow-300" key="dark" />
        </Transition>
    </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleDarkMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>