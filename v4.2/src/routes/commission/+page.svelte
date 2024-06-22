<script setup lang="ts" context="module">
import { _ as t, locale, waitLocale } from 'svelte-i18n'

import BackIcon from '$lib/icons/back.svg?raw'
import CheckCircleIcon from '$lib/icons/checkcircle.svg?raw'
import XCircleIcon from '$lib/icons/xcircle.svg?raw'
import WarningIcon from '$lib/icons/warning.svg?raw'
import MusicNoteIcon from '$lib/icons/musicnote.svg?raw'

import PriceTool from '$lib/components/priceTool.svelte'

const commissionList = [
  { key: 'originalMusic', link: 'https://youtu.be/keNRuTFXM6M' },
  { key: 'accompaniment', link: 'https://youtu.be/oq0SiF6CWWE' },
  { key: 'bgm', link: 'https://youtu.be/qFEwRpiRMW4' },
  { key: 'musicArrangement', link: 'https://youtu.be/Xmg3N5rk464' },
]

const arrList = [
  { key: 'orchestra', link: 'https://youtu.be/bDkLQRXu-HU' },
  { key: 'concertBand', link: 'https://youtu.be/-ejAZXnl9ao' },
  { key: 'piano', link: 'https://youtu.be/eCkMQraVsUA' },
  { key: 'pop', link: 'https://youtu.be/2HxwV5iEhSk' },
]

const styleList = [
  { key: 'europe', link: 'https://youtu.be/TX2VKDkIT_I' },
  { key: 'emotional', link: 'https://youtu.be/ukP-5RvJE9Q' },
  { key: 'mysterious', link: 'https://youtu.be/qFEwRpiRMW4' },
  { key: 'epic', link: 'https://youtu.be/bDkLQRXu-HU' },
  { key: 'hope', link: 'https://youtu.be/2HxwV5iEhSk' },
  { key: 'soft', link: 'https://youtu.be/_1Jyw5Hrrqc' },
]
</script>

<template lang="pug">
.px-4.bg-black.bg-opacity-50.min-h-dvh(class="md:px-12")
  .container.mx-auto.p-4
    .my-8
      .relative
        #back.absolute.top-0.left-0.py-8.text-center
          a(href="/") {@html BackIcon}
        h2.py-8.px-12.text-center.text-4xl.leading-tight
          +if('$locale === "en"') {$t('commission.harlosMusicCommission')}
            +else
              | {$t('commission.harlosMusicCommission')}
              br
              small {$t('commission.harlosMusicCommission', { locale: 'en' })}
      .my-8
        .my-4.grid.grid-cols-1.gap-4.text-3xl(class="md:grid-cols-2")
          +each('commissionList as item')
            a.block.h-24.text-center.flex.flex-col.justify-center.rounded-xl.border.transition-all.duration-200(
              href=" {item.link}"
              target="_blank"
              class="border-white/50 hover:border-white hover:bg-white/10 hover:text-white md:h-48"
            ) {$t(`commission.${item.key}`)}
        .my-4.grid.grid-cols-2.gap-4.text-2xl(class="md:grid-cols-4")
          +each('arrList as item')
            a.block.py-4.text-center.flex.flex-col.justify-center.rounded-lg.transition-all.duration-200(
              href=" {item.link}"
              target="_blank"
              class="bg-white/10 hover:bg-white/50 hover:text-white"
            ) {$t(`commission.${item.key}`)}
        .my-4.grid.grid-cols-3.gap-4(class="md:grid-cols-6")
          +each('styleList as item')
            a.block.py-4.text-center.flex.flex-col.justify-center.rounded-lg.transition-all.duration-200(
              href=" {item.link}"
              target="_blank"
              class="bg-white/10 hover:bg-white/50 hover:text-white"
            ) {$t(`commission.${item.key}`)}
        a.block.py-4.text-center.text-4xl.flex.flex-col.justify-center.rounded-lg.transition-all.duration-200(
          href="/collection"
          class="bg-white/10 hover:bg-white/50 hover:text-white"
        ) {$t('commission.more')}
    .my-24: PriceTool

    .my-8
      h2.py-8.px-12.text-center.text-4xl.leading-tight
        | {$t('commission.process')}
      ol.process-list
        li.collapse
          input(type="checkbox")
          h5.collapse-title: b {$t('commission.discussion')}
          .collapse-content
            p {$t('commission.discussionDesc')}
            ul
              li {$t('commission.yourName')}
              li {$t('commission.email')}
              li {$t('commission.musicUsage')}
              li {$t('commission.commercial')}
              li {$t('commission.musicLength')}
              li {$t('commission.musicStyle')}
              li {$t('commission.useInstrument')}
              li {$t('commission.reference')}
              li {$t('commission.mixing')}
              li {$t('commission.other')}
              li {$t('commission.deadline')}
        li.collapse
          input(type="checkbox")
          h5.collapse-title: b {$t('commission.deposit')}
          .collapse-content
            p {$t('commission.depositDesc')}
        li.collapse
          input(type="checkbox")
          h5.collapse-title: b {$t('commission.draft')}
          .collapse-content
            p {$t('commission.draftDesc')}
        li.collapse
          input(type="checkbox")
          h5.collapse-title: b {$t('commission.complete')}
          .collapse-content
            p {$t('commission.completeDesc')}
        li.collapse
          input(type="checkbox")
          h5.collapse-title: b {$t('commission.after')}
          .collapse-content
            p {$t('commission.afterDesc')}
  .min-h-dvh
</template>

<style lang="sass">
ul
  list-style: disc
#back :global(svg)
  width: 1.5rem
  height: 1.5rem

ul
  margin: 0
  padding-left: 30px
li
  margin: .5rem 0
.process-list
  counter-reset: section
  & > li
    overflow: initial
  & > li::before
    counter-increment: section
    content: counter(section)
    position: absolute
    left: 2rem
    top: 0.5rem
    margin: .65rem
    font-size: 1.5rem
    font-weight: bold
    width: 1.5em
    height: 1.5em
    border-radius: 50%
    border: #FFFFFF66 solid 1px
    line-height: initial
    text-align: center
    @media screen and (max-width: 640px)
      left: .5rem
  & > li::after
    position: absolute
    height: 100%
    width: 100%
    opacity: 1
    content: ''
    border-radius: 8px
    background-color: #FFFFFF22
  & > li:hover::after
    background-color: #FFFFFF44
  .collapse-title
    font-size: 1.5rem
    line-height: 1.5rem
    pointer-events: none
    padding: 1.5rem 6rem 1.5rem 6rem
    @media screen and (max-width: 640px)
      padding: 1.5rem 1rem 1.5rem 4rem
  .collapse-content
    padding: 0 6rem 0 4rem
    @media screen and (max-width: 640px)
      padding: 0 1rem 0 4rem
    & > *:last-child
      padding-bottom: 1rem
</style>
