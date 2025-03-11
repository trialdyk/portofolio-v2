<script lang="ts" setup>

const props = defineProps<{
  texts: string[]
}>()

const { texts } = toRefs(props)

const currentText = ref('')
const wordIndex = ref(0)
const letterIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = 100 
const deletingSpeed = 50 
const delayBetweenWords = 1000 

const typeEffect = () => {
  if (!texts.value || texts.value.length === 0) return

  const currentWord = texts.value[wordIndex.value]

  if (isDeleting.value) {
    currentText.value = currentWord.substring(0, letterIndex.value - 1)
    letterIndex.value--
  } else {
    currentText.value = currentWord.substring(0, letterIndex.value + 1)
    letterIndex.value++
  }

  let speed = isDeleting.value ? deletingSpeed : typingSpeed

  if (!isDeleting.value && letterIndex.value === currentWord.length) {
    speed = delayBetweenWords
    isDeleting.value = true
  } else if (isDeleting.value && letterIndex.value === 0) {
    isDeleting.value = false
    wordIndex.value = (wordIndex.value + 1) % texts.value.length
    speed = typingSpeed
  }

  setTimeout(typeEffect, speed)
}

onMounted(() => {
  typeEffect()
})
</script>

<template>
  <span class="typing-text">{{ currentText }}<span class="cursor">|</span></span>
</template>

<style scoped>
.cursor {
  display: inline-block;
  width: 8px;
  background: #facc15;
  animation: blink 0.7s infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
