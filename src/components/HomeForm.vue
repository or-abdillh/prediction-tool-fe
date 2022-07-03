<style scoped>

.input-wrapper {
  @apply flex gap-3 w-full bg-slate-600 rounded overflow-hidden text-gray-200 items-center mb-5 pl-3;
}

input {
  @apply bg-slate-600 w-full p-4;
}

</style>

<template>
  <main 
    :class="useDarkMode()"
    class="bg-slate-600 md:w-5/12 w-full mx-auto bg-opacity-50 backdrop-blur-sm rounded-lg p-5 md:p-8 border border-gray-400 mt-12 z-0">
    <h1 class="text-gray-200 text-xl font-medium text-center mb-3">Parameters</h1>
    <!-- Parameter one -->
    <section :class="useDarkMode()" class="input-wrapper">
      <span><i class="fa-brands fa-slack"></i></span>
      <input placeholder="Parameter one" type="text" name="" required>
    </section>
    <!-- Parameter two -->
    <section :class="useDarkMode()" class="input-wrapper">
      <span><i class="fa-brands fa-slack"></i></span>
      <input placeholder="Parameter two" type="text" name="" required>
    </section>
    <!-- Parameter three -->
    <section class="input-wrapper">
      <span><i class="fa-brands fa-slack"></i></span>
      <input placeholder="Parameter three" type="text" name="" required>
    </section>
    <!-- submit -->
    <button class="bg-green-600 p-3 rounded w-full font-medium text-lg text-gray-200">Submit</button>
    <!-- Info -->
    <section class="mt-5 text-gray-200">
      <p>
        <i class="fa-solid fa-bullhorn text-yellow-500"></i>
        Fill all parameter for give execelent results
      </p>
    </section>
  </main>
</template>

<script setup>

import { computed } from 'vue'
import { useTheme } from '@store/theme.js'

const isDark = computed(() => useTheme().isDark)

const useDarkMode = () => isDark.value ? 'bg-opacity-75' : ''

</script>
