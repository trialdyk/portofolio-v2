<template>
    <header class="bg-background/30 backdrop-blur border-b border-gray-800 -mb-px w-full fixed top-0 z-50 lg:mb-0 lg:border-0">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-3 items-center justify-between gap-3 h-16">
            <!-- Left: Logo & Dropdown -->
            <div class="flex items-center space-x-3">
                <NuxtLink to="/" class="text-lg font-bold flex items-center space-x-1">
                    <Icon name="ic:round-discord" class="w-6 h-6 text-primary" />
                </NuxtLink>
            </div>

            <!-- Center: Nav Links -->
            <nav class="hidden md:flex justify-center space-x-6">
                <NuxtLink to="/" class="hover:text-gray-300">{{ $t('navbar.home') }}</NuxtLink>
                <NuxtLink to="/pricing" class="hover:text-gray-300">{{ $t('navbar.skill') }}</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-gray-300">{{ $t('navbar.project') }}</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-gray-300">{{ $t('navbar.experience') }}</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-gray-300">{{ $t('navbar.blog') }}</NuxtLink>
            </nav>

            <div class="flex md:hidden">

            </div>

            <!-- Right: Dark Mode & Buttons -->
            <div class="flex justify-end items-center space-x-4">
                <LanguageSwicther />
                <NuxtLink to="https://github.com/trialdyk" class="flex items-center">
                    <Icon name="mdi:github" class="size-8" />
                </NuxtLink>
            </div>
        </div>
    </header>
</template>