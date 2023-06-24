<template lang="pug">
#commission
  .container
    h3.pb-4 Commission Price Estimation Tool
    .row.pb-4
      .col-12.col-md-3.py-2 Commission Type
      .col-12.col-md-9: b-form-radio-group(v-model="selectedOriginal" :options="originalOptions")
    .row.pb-4
      .col-12.col-md-3.py-2 Music Type
      .col-12.col-md-9: b-form-select(v-model="selectedType" :options="typeOptions")
    .row.pb-4(v-if="selectedType === 'other'")
      .col-12.col-md-3.py-2 Instrument Count
      .col-12.col-md-9: b-form-input(v-model="tracks" :min="1" :max="20" type="number")
    .row.pb-4
      .col-12.col-md-3.py-2 Music Length
      .col-12.col-md-9: b-form-input(v-model="minutes" :min="0.5" :max="15" :step="0.5"  type="number")
    .row.pb-4
      .col-12.col-md-3.py-2
      .col-12.col-md-9
        b-form-checkbox.d-inline-block.mr-4(v-if="selectedOriginal" v-model="isCommercial") Commercial
        b-form-checkbox.d-inline-block(v-model="isPerpetual") Perpetual
    .row.pb-4
      .col-12.col-md-3.py-2 Currency
      .col-12.col-md-9: b-form-radio-group(v-model="selectedCurrency" :options="currencyOptions")
    .row.pb-4
      .col-12.col-md-3.py-2 Estimated Price
      .col-12.col-md-9: h4 $ {{ priceEstimation }} {{ selectedCurrency.toUpperCase() }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Option<T = unknown, U = any> = T & { value: U, text: string }
type Options<T = unknown> = Option<T>[]

const originalOptions: Options<{ price: Record<string, number> }> = [
  { value: true, text: 'Original', price: { twd: 300, usd: 10 } },
  { value: false, text: 'Arrangement', price: { twd: 150, usd: 5 } },
]

const typeOptions: Options<{ tracks?: number }> = [
  { value: 'piano', text: 'Piano', tracks: 1 },
  { value: 'orchestra', text: 'Orchestra / Wind Band', tracks: 20 },
  { value: 'pop', text: 'Pop Music Arrangement', tracks: 6 },
  { value: 'other', text: 'Other' },
]

const currencyOptions: Options = [
  { value: 'twd', text: 'TWD' },
  { value: 'usd', text: 'USD' },
]

export default defineComponent({
  setup() {
    const selectedOriginal = ref(originalOptions[0]?.value || null)
    const selectedType = ref(typeOptions[0]?.value || null)
    const minutes = ref(3)
    const tracks = ref(5)
    const isCommercial = ref(false)
    const isPerpetual = ref(false)
    const selectedCurrency = ref(currencyOptions[0]?.value || null)

    const priceEstimation = computed(() => {
      const price = originalOptions.find(o => o.value === selectedOriginal.value)?.price
      const priceSingle = price?.[selectedCurrency.value] || 0
      const typeTracks = typeOptions.find(o => o.value === selectedType.value)?.tracks
      const trackCount = 2 + Math.min(10, typeTracks || tracks.value)
      const minuteCount = 2 + Number(minutes.value)
      const ratio = (isCommercial.value && selectedOriginal.value ? 2 : 1) * (isPerpetual.value ? 2 : 1)
      return priceSingle * trackCount * minuteCount * ratio
    })

    return {
      originalOptions,
      selectedOriginal,
      typeOptions,
      selectedType,
      tracks,
      minutes,
      isCommercial,
      isPerpetual,
      currencyOptions,
      selectedCurrency,
      priceEstimation,
    }
  },
})
</script>

<style lang="sass" scoped>
#commission
  input, select
    background-color: black
    color: white
  .row
    align-items: center
</style>
