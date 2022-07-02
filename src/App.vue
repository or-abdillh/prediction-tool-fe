<style scoped>

.app {
  @apply w-full md:w-10/12 lg:w-8/12 xl:w-6/12 md:mx-auto p-6;
}

</style>

<template>
  <!-- Navigation Bar -->
  <navbar></navbar>
  <!-- Main Container -->
  <main class="app">
    <home-landing></home-landing>
  </main>
</template>

<script setup>

import Navbar from '@component/Navbar.vue'
import HomeLanding from '@component/HomeLanding.vue'

</script>
