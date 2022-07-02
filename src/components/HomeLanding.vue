<style scoped>

.btn {
  @apply px-3 py-2 md:py-3 rounded-lg text-xl w-8/12;
}

</style>

<template>
  <!-- Landing -->
  <main class="md:w-11/12 mx-auto mt-16 md:mt-12">
    <!-- Typhography -->
    <section 
      :class="useDarkMode()"
      class="md:text-center z-10">
      <strong>
        <i class="fa-brands fa-slack"></i>
        Motorcycle Condition Prediction Tool 
      </strong>
      <h1 class="font-expletus-sans text-4xl font-medium mb-4 mt-6">
        We can help you <strong class="text-green-500 font-bold">predict</strong> the condition of your motorized vehicle in a <strong class="text-green-500 font-bold">short time</strong>, is it still in good condition?
      </h1>
      <p>
        This tool is made to help motorcycle users and of course it's <span class="underline underline-offset-4 font-bold">Free</span>.
      </p>
    </section>
    <!-- CTA -->
    <section class="flex gap-4 md:gap-10 mt-6 md:justify-between">
      <button class="btn bg-green-600 text-gray-200 font-medium">
        <i class="fa-solid fa-arrow-right"></i>
        Try Now
      </button>
      <button 
        :class="useDarkMode()"
        class="btn border font-medium">
        <i class="fa-brands fa-github"></i>
        Github
      </button>
    </section>
  </main>
</template>

<script setup>

import { computed } from 'vue'
import { useTheme } from '@store/theme.js'

const isDark = computed(() => useTheme().isDark)

const useDarkMode = () => isDark.value ? 'text-gray-200 border-gray-200' : 'text-slate-900 border-gray-900'

</script>
