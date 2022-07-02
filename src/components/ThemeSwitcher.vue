<template>
  <main class="w-[15%] md:w-[5%]">
    <button 
      @click="toggler"
      class="text-gray-200 w-full text-xl active:scale-[.85] duration-300">
      <i v-if="isDark" class="fa-solid fa-sun"></i>
      <i v-else class="fa-solid fa-moon text-gray-900"></i>
    </button>
  </main>
</template>

<script setup>

import { computed } from 'vue'
import { useTheme } from '@store/theme.js'

const theme = useTheme()
const isDark = computed(() => theme.isDark)

const toggler = () => {
  setTimeout(() => {
    theme.toggler()
  }, 300)
}

</script>
