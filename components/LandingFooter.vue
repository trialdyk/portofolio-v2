<template>
    <footer class="text-gray-300 bg-transparent py-8 w-screen flex flex-col justify-center">
        <div class="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- About Me -->
            <div>
                <h3 class="text-gray-400 font-semibold">About Me</h3>
                <p class="mt-2 text-sm">
                    I'm Aldy, a <strong class="text-white">Fullstack Developer</strong> from Indonesia. I'm passionate about
                    building innovative web applications and immersive game experiences using the latest cutting-edge
                    technologies.
                </p>
                <div class="flex space-x-4 mt-4">
                    <a href="#" class="hover:text-white">✖️</a>
                    <a href="#" class="hover:text-white">🐙</a>
                    <a href="#" class="hover:text-white">🎨</a>
                </div>
            </div>

            <!-- Work -->
            <div>
                <h3 class="text-gray-400 font-semibold">Work</h3>
                <ul class="mt-2 space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white">Contact</a></li>
                    <li><a href="#" class="hover:text-white">Experience</a></li>
                    <li>
                        <a href="#" class="hover:text-white">Services</a>
                        <span class="ml-2 text-xs bg-gray-700 px-2 py-1 rounded-full">SOON</span>
                    </li>
                    <li><a href="#" class="hover:text-white">Skills and Tools</a></li>
                    <li><a href="#" class="hover:text-white">Studio</a></li>
                </ul>
            </div>

            <!-- Learn & This Site -->
            <div class="grid grid-cols-2 gap-8">
                <div>
                    <h3 class="text-gray-400 font-semibold">Learn</h3>
                    <ul class="mt-2 space-y-2 text-sm">
                        <li><a href="#" class="hover:text-white">Docs</a></li>
                        <li><a href="#" class="hover:text-white">Personal Blog</a></li>
                        <li>
                            <a href="#" class="hover:text-white">T.I.L</a>
                            <span class="ml-2 text-xs bg-blue-600 px-2 py-1 rounded-full">NEW</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-gray-400 font-semibold">This Site</h3>
                    <ul class="mt-2 space-y-2 text-sm">
                        <li><a href="#" class="hover:text-white" target="_blank">Design Concept ↗</a></li>
                        <li><a href="#" class="hover:text-white" target="_blank">Source Code ↗</a></li>
                        <li><a href="#" class="hover:text-white">Credits</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-8 text-center text-xs text-gray-500">
            © {{ new Date().getFullYear() }}, Tri Aldy Kurniawan — <a href="#" class="hover:text-white">all right reserved</a>
        </div>
    </footer>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>