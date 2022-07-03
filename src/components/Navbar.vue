<template>
  <nav 
    :class="useDarkMode()"
    class="w-full fixed top-0 right-0 left-0 z-20">
    <main 
      :class="useDarkMode()"
      class="px-6 py-4 flex justify-between w-full md:w-10/12 lg:w-8/12 xl:w-6/12 md:mx-auto">
      <h1 class="text-xl font-medium font-expletus-sans">
        <i class="fa-solid fa-toolbox"></i>
        Predict.
      </h1>
      <!-- Theme Switcher -->
      <theme-switcher></theme-switcher>
    </main>
  </nav>
</template>

<script setup>

import { computed } from 'vue'
import { useTheme } from '@store/theme.js'
import ThemeSwitcher from '@component/ThemeSwitcher.vue'

const isDark = computed(() => useTheme().isDark)

const useDarkMode = () => isDark.value ? 'bg-gray-900 text-green-400' : 'bg-slate-100 text-slate-900'

</script>
