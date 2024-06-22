<script setup lang="ts">
import { _ as t, locale } from 'svelte-i18n'

import CheckCircleIcon from '$lib/icons/checkcircle.svg?raw'
import XCircleIcon from '$lib/icons/xcircle.svg?raw'

const isEn = $locale === 'en'
const verticalClass = isEn ? 'vertical' : ''
</script>

<template lang="pug">
mixin withPerm(allow)
  if allow
    span.text-green-400.mr-2.inline-icon {@html CheckCircleIcon}
  else
    span.text-red-600.mr-2.inline-icon {@html XCircleIcon}
  block
  br

div.table-wrapper
  table.table
    col(style="width: 40px")
    thead
      tr.text-center.text-white
        th
        th {$t('commission.noComNoPer')}
        th {$t('commission.comNoPer')}
        th {$t('commission.noComPer')}
        th {$t('commission.comPer')}
        //- th {$t('commission.fullPer')}
    tbody
      tr.allow
        th(class="{verticalClass}")
          +withPerm(true) {$t('commission.iCan')}
        td(colspan=2)
          +withPerm(true) {$t('commission.publicProcess')}
          +withPerm(true) {$t('commission.publishPersonally')}
          +withPerm(true) {$t('commission.putInCollection')}
          +withPerm(true) {$t('commission.modifyAndPublish')}
          +withPerm(true) {$t('commission.sell')}
          +withPerm(true) {$t('commission.submit')}
        td(colspan=2)
          +withPerm(true) {$t('commission.share')}
        //- td
        //-   +withPerm(true) {$t('commission.preserveCopyright')}
      tr.disallow
        th(class="{verticalClass}")
          +withPerm(false) {$t('commission.iCant')}
        td(colspan=2)
        td(colspan=2)
          +withPerm(false) {$t('commission.publicProcessInAdvance')}
          +withPerm(false) {$t('commission.putInCollection')}
          +withPerm(false) {$t('commission.modifyAndPublish')}
          +withPerm(false) {$t('commission.sell')}
          +withPerm(false) {$t('commission.submit')}
        //- td
        //-   +withPerm(false) {$t('commission.publish')}
        //-   +withPerm(false) {$t('commission.putInCollection')}
        //-   +withPerm(false) {$t('commission.modifyAndPublish')}
        //-   +withPerm(false) {$t('commission.sell')}
        //-   +withPerm(false) {$t('commission.submit')}
      tr.allow
        th(class="{verticalClass}" rowspan=3)
          +withPerm(true) {$t('commission.youCan')}
        td.text-center(colspan=4)
          +withPerm(true) {$t('commission.publishPersonally')} {$t('commission.credit')}
        //- td
        //-   +withPerm(true) {$t('commission.publishPersonally')}
      tr.allow
        td(rowspan=2)
        td(rowspan=2)
          +withPerm(true) {$t('commission.commercialUse')}
        td.text-center(colspan=2)
          +withPerm(true) {$t('commission.getFiles')}
          +withPerm(true) {$t('commission.modify')}
      tr.allow
        td
        td
          +withPerm(true) {$t('commission.commercialUse')}
          +withPerm(true) {$t('commission.sell')} {$t('commission.credit')}
        //- td
        //-   +withPerm(true) {$t('commission.commercialUseAndPublish')}
        //-   +withPerm(true) {$t('commission.sell')}
      tr.disallow
        th(class="{verticalClass}" rowspan=2)
          +withPerm(false) {$t('commission.youCant')}
        td.text-center(colspan=4)
          +withPerm(false)  {$t('commission.sayYouDidIt')}
      tr.disallow
        td
          +withPerm(false) {$t('commission.commercialUse')}
          +withPerm(false) {$t('commission.modify')}
          +withPerm(false) {$t('commission.sell')}
        td
          +withPerm(false) {$t('commission.modify')}
          +withPerm(false) {$t('commission.sell')}
        td
          +withPerm(false) {$t('commission.commercialUse')}
          +withPerm(false) {$t('commission.sell')}
        td
        //- td
</template>

<style lang="sass">
.inline-icon
    :global(svg)
      width: 1.25em
      height: 1.25em
.table-wrapper
  overflow-x: auto
  table
    min-width: 992px
    margin-bottom: 0
    table-layout: fixed
    td, th
      border: solid 1px #999999
      background-color: #00000066
      align-content: center
      justify-content: center
    th.vertical
      text-orientation: mixed
      writing-mode: vertical-rl
      padding-left: 0.5rem
      padding-right: 0.5rem
      span
        vertical-align: text-top
        margin: 0
</style>
