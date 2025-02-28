<template>
    <header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px w-full fixed top-0 z-50 lg:mb-0 lg:border-0">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16">
            <!-- Left: Logo & Dropdown -->
            <div class="flex items-center space-x-3">
                <NuxtLink to="/" class="text-lg font-bold flex items-center space-x-1">
                    <Icon name="ic:round-discord" class="w-6 h-6 text-blue-500" />
                </NuxtLink>
                <UButton label="SaaS" icon="i-heroicons-chevron-down" color="blue" variant="ghost" />
            </div>

            <!-- Center: Nav Links -->
            <nav class="hidden md:flex space-x-6">
                <NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink>
                <NuxtLink to="/pricing" class="hover:text-gray-300">Skill</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-gray-300">Project</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-gray-300">Experience</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-gray-300">Blog</NuxtLink>
            </nav>

            <!-- Right: Dark Mode & Buttons -->
            <div class="flex items-center space-x-4">
                <ColorModeToggle />
                <LanguageSwicther />
                <NuxtLink to="https://github.com/trialdyk" class="flex items-center">
                    <Icon name="mdi:github" class="size-8" />
                </NuxtLink>
            </div>
        </div>
    </header>
</template>