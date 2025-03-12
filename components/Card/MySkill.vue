<script setup lang="ts">
import Meteor from '../Meteor.vue';

const props = defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
        <div class="flex w-full flex-col items-center justify-center py-24 h-full">
            <div class="relative w-full">
                <div
                    class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-lg border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">

                    <h1 class="relative z-50 mb-4 text-xl font-bold text-white">
                        {{ props.title }}
                    </h1>

                    <p class="relative z-50 mb-4 text-base font-normal text-slate-500">
                        {{ props.description }}
                    </p>
                    <Meteor />
                </div>
            </div>
        </div>
</template>