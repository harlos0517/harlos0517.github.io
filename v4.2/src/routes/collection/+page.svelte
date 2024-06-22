<script setup lang="ts">
import { _ as t, locale } from 'svelte-i18n'

import BackIcon from '$lib/icons/back.svg?raw'

import CollectionGroup from '$lib/components/collectionGroup.svelte'

import { types, works } from '$lib/collection'
</script>

<template lang="pug">
.px-4.bg-black.bg-opacity-50.min-h-dvh(class="sm:px-12")
  .container.mx-auto.px-4.py-12
    .relative
      #back.absolute.top-0.left-0.py-8.text-center
        a(href="/") {@html BackIcon}
      h2.py-8.px-12.text-center.text-4xl.leading-tight
        +if('$locale === "en"') {$t('index.collection')}
          +else
            | {$t('index.collection')}
            br
            small {$t('index.collection', { locale: 'en' })}
    +each('types as collectionType')
      CollectionGroup(type="{collectionType}")
</template>

<style lang="sass">
#back :global(svg)
  width: 1.5rem
  height: 1.5rem
</style>
