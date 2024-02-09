<template lang="pug">
#price-tool
  .row.pb-4
    .col-12.col-md-3.py-2 {{ $t('priceTool.commissionType') }}
    .col-12.col-md-9: b-form-radio-group(v-model="selectedOriginal" :options="originalOptions")
  .row.pb-4
    .col-12.col-md-3.py-2 {{ $t('priceTool.musicType') }}
    .col-12.col-md-9: b-form-select(v-model="selectedType" :options="typeOptions")
  .row.pb-4(v-if="selectedType === 'other'")
    .col-12.col-md-3.py-2 {{ $t('priceTool.trackCount') }}
    .col-12.col-md-9: b-form-input(v-model="tracks" :min="1" :max="20" type="number")
  .row.pb-4
    .col-12.col-md-3.py-2 {{ $t('priceTool.musicLength') }}
    .col-12.col-md-9: b-form-input(v-model="minutes" :min="0.5" :max="15" :step="0.5"  type="number")
  .row.pb-4
    .col-12.col-md-3.py-2
    .col-12.col-md-9
      b-form-checkbox.d-inline-block.mr-4(v-if="selectedOriginal" v-model="isCommercial") {{ $t('priceTool.commercial') }}
      b-form-checkbox.d-inline-block(v-model="isPerpetual") {{ $t('priceTool.perpetual') }}
  .row.pb-4
    .col-12.col-md-3.py-2 {{ $t('priceTool.currency') }}
    .col-12.col-md-9: b-form-radio-group(v-model="selectedCurrency" :options="currencyOptions")
  .row.pb-4
    .col-12.col-md-3.py-2 {{ $t('priceTool.estimatedPrice') }}
    .col-12.col-md-9: h4 {{ selectedCurrency.toUpperCase() }}$ {{ priceEstimation }}
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext } from '@nuxtjs/composition-api'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Option<T = unknown, U = any> = T & { value: U, text: string }
type Options<T = unknown> = Option<T>[]

const originalOptionsRaw: Options<{ price: Record<string, number> }> = [
  { value: true, text: 'original', price: { ntd: 200, usd: 8 } },
  { value: false, text: 'arrangement', price: { ntd: 100, usd: 4 } },
]

const typeOptionsRaw: Options<{ tracks?: number }> = [
  { value: 'piano', text: 'piano', tracks: 1 },
  { value: 'orchestra', text: 'orchestra', tracks: 20 },
  { value: 'pop', text: 'pop', tracks: 6 },
  { value: 'other', text: 'other' },
]

const currencyOptionsRaw: Options = [
  { value: 'ntd', text: 'ntd' },
  { value: 'usd', text: 'usd' },
]

export default defineComponent({
  setup() {
    const { i18n } = useContext()
    const translateOptionText = <T>(options: Options<T>) =>
      options.map(o => ({ ...o, text: i18n.t(`priceTool.${o.text}`) }))
    const originalOptions = translateOptionText(originalOptionsRaw)
    const typeOptions = translateOptionText(typeOptionsRaw)
    const currencyOptions = translateOptionText(currencyOptionsRaw)

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
      const trackCount = 2 + Math.min(6, typeTracks || tracks.value)
      const minuteCount = 2 + Number(minutes.value)
      const ratio = (isCommercial.value && selectedOriginal.value ? 2 : 1) * (isPerpetual.value ? 3 : 1)
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
