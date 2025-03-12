<template >
    <div class="h-screen w-screen bg-gradient-to-b from-[#000000] to-transparent">
        <TextBlurReveal :delay="0.2" :duration="0.75" class="p-8">
            <div class="flex items-center justify-center text-gray-300 p-6">
                <blockquote class="text-4xl font-medium text-center leading-relaxed max-w-2xl">
                    <span class="text-6xl text-gray-600">“</span>
                    <span class="italic">Calmness</span>
                    <span class="inline-block align-middle w-16 border-t border-gray-600"></span>
                    <span class="font-bold text-white">is strength</span><br>
                    <span class="inline-block align-middle w-16 border-t border-gray-600"></span>
                    <span class="text-white">Confidence</span>
                    is a <span class="font-bold  text-white px-3 py-1">power.</span>
                </blockquote>
            </div>
        </TextBlurReveal>
    </div>
</template>