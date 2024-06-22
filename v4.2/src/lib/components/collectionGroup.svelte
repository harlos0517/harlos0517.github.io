<script setup lang="ts">
import { _ as t } from 'svelte-i18n'

import BackIcon from '$lib/icons/back.svg?raw'
import YoutubeIcon from '$lib/icons/youtube.svg?raw'
import MusescoreIcon from '$lib/icons/musescore.svg?raw'

import Collection from '$lib/components/collection.svelte'

import { types, works } from '$lib/collection'

export let type: string
</script>

<template lang="pug">
.pb-8
.mb-4.border-b(class="border-b-white/50")
  .col-12.text-center
    h3.text-2xl.leading-loose.worktype-name
      | {$t('music.' + type, { locale: 'zh-TW' }) + ' | ' + $t('music.' + type, { locale: 'en' })}
+each('works.filter(w => w.type === type) as work')
  Collection(name="{work.name}" youtube="{work.youtube}" musescore="{work.musescore}")
</template>
