import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
  state() {
    return {
      isDark: true
    }
  },
  actions: {
    toggler() {
      this.isDark = !this.isDark
    }
  }
})
