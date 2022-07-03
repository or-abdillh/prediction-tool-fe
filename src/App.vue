<style scoped>

.app {
  @apply w-full md:w-11/12 lg:w-9/12 xl:w-7/12 md:mx-auto p-6;
}

</style>

<template>
  <!-- Navigation Bar -->
  <navbar></navbar>
  <!-- Main Container -->
  <main class="app">
    <home-landing></home-landing>
    <section class="w-full flex flex-col md:flex-row justify-between gap-8"> 
      <home-form></home-form>
    </section>
  </main>
</template>

<script setup>

import { ref, computed, watch } from 'vue'
import { useTheme } from '@store/theme.js'
import Navbar from '@component/Navbar.vue'
import HomeLanding from '@component/HomeLanding.vue'
import HomeForm from '@component/HomeForm.vue'

const theme = useTheme()
const isDark = computed(() => theme.isDark)

const bodyTag = ref(document.querySelector('body'))

const replaceTheme = (oldTheme, newTheme) => bodyTag.value.classList.replace(oldTheme, newTheme)

const replaceMeta = value => document.querySelector('[name=theme-color]').setAttribute('content', value)

watch(isDark, value => {
  if ( value ) {
    replaceTheme('bg-slate-100', 'bg-slate-900')
    replaceMeta('#111828')
  } else {
    replaceTheme('bg-slate-900', 'bg-slate-100')
    replaceMeta('#F1F4F9')
  }
})

</script>
