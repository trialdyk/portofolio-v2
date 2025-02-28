<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

const { setLocale, locale } = useI18n()

const flagIcons: Record<string, string> = {
    en: "flag:gb-4x3",
    id: "flag:id-4x3",
}
</script>

<template>
    <Popover>
        <PopoverTrigger
            class="rounded-full border border-slate-300 dark:border-slate-700 flex justify-center items-center p-1 bg-white dark:bg-[#020618] text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
        >
            <Icon :name="flagIcons[locale] || 'material-symbols:language'" class="size-5 transition-all duration-300" />
        </PopoverTrigger>

        <PopoverContent class="w-48 p-3 bg-white dark:bg-[#020618] rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
            <p class="text-sm text-slate-600 dark:text-slate-300 mb-2">
                {{ $t('switch_language') }}
            </p>

            <button
                @click="setLocale('en')"
                :class="{ 'bg-blue-500 text-white': locale === 'en' }"
                class="flex items-center w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-blue-600 transition-all duration-200"
            >
                <Icon name="flag:gb-4x3" class="size-5 mr-2" />
                English
            </button>

            <button
                @click="setLocale('id')"
                :class="{ 'bg-blue-500 text-white': locale === 'id' }"
                class="flex items-center w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-blue-600 transition-all duration-200 mt-1"
            >
                <Icon name="flag:id-4x3" class="size-5 mr-2" />
                Bahasa Indonesia
            </button>
        </PopoverContent>
    </Popover>
</template>
