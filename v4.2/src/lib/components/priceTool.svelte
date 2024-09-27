<script setup lang="ts">
import { _ as t, locale } from 'svelte-i18n'

import CommissionTable from '$lib/components/commissionTable.svelte'
import SlotMachineText from '$lib/components/slotMachineText.svelte'

const isEn = $locale === 'en'

const lengthOptions = [
  { name: '1', value: 1 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
]
let currentLength = lengthOptions[2]

const commercialOptions = [
  { name: $t('priceTool.none'), value: 1 },
  { name: $t('priceTool.commercial'), value: 1.5 },
]
let currentCommercial = commercialOptions[0]

const originalOptions = [
  { name: $t('priceTool.original'), value: 1.5 },
  { name: $t('priceTool.arrangement'), value: 1 },
]
let currentOriginal = originalOptions[0]

const typeOptions = [
  { name: $t('priceTool.piano'), value: 1 },
  { name: $t('priceTool.pop'), value: 6 },
  { name: $t('priceTool.orchestra'), value: 20 },
]
let currentType = typeOptions[0]

const currencyOptions = [
  { name: 'TWD $', value: 160 },
  { name: 'USD $', value: 6 },
]
let currentCurrency = currencyOptions[isEn ? 1 : 0]

let price = 0

$: {
  const priceSingle = currentCurrency.value
  const originalRatio = currentOriginal.value
  const trackCount = 2 + Math.min(8, currentType.value)
  const minuteCount = 1 + currentLength.value
  const ratio = currentCommercial.value
  price = priceSingle * originalRatio * trackCount * minuteCount * ratio
}

const fontSizeA = isEn ? 'font-size: min(4vw, 80px)' : 'font-size: min(5vw, 100px)'
const fontSizeB = isEn ? 'font-size: min(5vw, 100px)' : 'font-size: min(8vw, 160px)'
const oneLineClass = isEn ? '' : 'md:flex'
const twoLineClass = isEn ? '' : 'md:hidden'
</script>

<template lang="pug">
.hidden.flex-row.justify-between.font-bold(class="{oneLineClass}" style="font-size: min(3vw, 60px)")
  .leading-normal {$t('priceTool.iWant')}
  SlotMachineText(options="{lengthOptions}" bind:currentOption="{currentLength}")
  .leading-normal {$t('priceTool.minute')}
  SlotMachineText(options="{commercialOptions}" bind:currentOption="{currentCommercial}")
  SlotMachineText(options="{typeOptions}" bind:currentOption="{currentType}")
  SlotMachineText(options="{originalOptions}" bind:currentOption="{currentOriginal}")
  .leading-normal {$t('priceTool.music')}
.flex.flex-row.justify-between.font-bold(class="{twoLineClass}" style="{fontSizeA}")
  .leading-normal {$t('priceTool.iWant')}
  SlotMachineText(options="{lengthOptions}" bind:currentOption="{currentLength}")
  .leading-normal {$t('priceTool.minute')}
  SlotMachineText(options="{commercialOptions}" bind:currentOption="{currentCommercial}")
.flex.flex-row.justify-between.font-bold.my-2(class="{twoLineClass}" style="{fontSizeB}")
  SlotMachineText(options="{typeOptions}" bind:currentOption="{currentType}")
  SlotMachineText(options="{originalOptions}" bind:currentOption="{currentOriginal}")
  .leading-normal {$t('priceTool.music')}
.flex.flex-row.justify-between.font-bold.my-12.tracking-wider.leading-tight(style="font-size: min(10vw, 200px)")
  SlotMachineText(options="{currencyOptions}" bind:currentOption="{currentCurrency}")
  .leading-normal {price}
.alert.alert-warning.rounded-lg.border-white.bg-yellow-900.text-white.my-4(role="alert")
  | {$t('commission.priceDisclaimer')}
</template>
