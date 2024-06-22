<script setup lang="ts">
import YoutubeIcon from '$lib/icons/youtube.svg?raw'
import MusescoreIcon from '$lib/icons/musescore.svg?raw'

import { types, works } from '$lib/collection'

export let name: string
export let youtube: string
export let musescore: string
</script>

<template lang="pug">
.flex.flex-row.work.my-2.p-2
  .grow {name}
  .w-12.text-center.shrink-0
    +if ('youtube')
      a.youtube(href=" {youtube}" target="_blank") {@html YoutubeIcon}
  .w-12.text-center.shrink-0
    +if ('musescore')
      a.musescore(href=" {musescore}" target="_blank") {@html MusescoreIcon}
</template>

<style lang="sass">
.work
  &.work:hover
    border-radius: 5px
    background-color: #FFFFFF44
  :global(svg)
    width: 1.5rem
    height: 1.5rem
  .youtube:hover
    color: #FF0000
  .musescore:hover
    color: #2E68C0
</style>
