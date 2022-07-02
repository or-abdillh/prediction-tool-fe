<style scoped>

.btn {
  @apply px-3 py-2 rounded-lg text-xl w-8/12;
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
        Motorcycle Condition Prediction
      </strong>
      <h1 class="font-expletus-sans text-4xl font-medium my-4">
        Suspendisse tincidunt mi vel metus. <span class="text-green-500 font-bold">At, nunc Quisque.</span>Vivamus non urna in.
      </h1>
      <p class="text-sm">
        Aliquet, erat eu ultrices tincidunt, lorem mi sagittis lectus, ut feugiat pede lacus quis <span class="underline underline-offset-4 font-bold">sapien</span>.
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
        class="btn border-2 font-medium">
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
