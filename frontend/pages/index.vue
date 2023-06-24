<template lang="pug">
#index.flex-column.fill-screen
  #navbar-container
    Navbar
  #content-container.flex-fill
    NuxtChild
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="sass" scoped>
#index
  background: #000000
  color: #FFFFFF
  overflow: hidden
  #content-container
    overflow-y: auto
</style>
