<script setup lang="ts">
import { _ as t, locale } from 'svelte-i18n'

import YoutubeIcon from '$lib/icons/youtube.svg?raw'
import TwitchIcon from '$lib/icons/twitch.svg?raw'
import TwitterIcon from '$lib/icons/twitter.svg?raw'
import DiscordIcon from '$lib/icons/discord.svg?raw'
import MusescoreIcon from '$lib/icons/musescore.svg?raw'
import FacebookIcon from '$lib/icons/facebook.svg?raw'
import InstagramIcon from '$lib/icons/instagram.svg?raw'
import PlurkIcon from '$lib/icons/plurk.svg?raw'
import MarshmallowIcon from '$lib/icons/marshmallow.svg?raw'
import KofiIcon from '$lib/icons/kofi.svg?raw'
import DollarIcon from '$lib/icons/dollar.svg?raw'
import SonglistIcon from '$lib/icons/songlist.svg?raw'
import PaperIcon from '$lib/icons/paper.svg?raw'

import headpic2 from '$lib/images/headpic2.jpg'
import sky from '$lib/images/sky.jpg'
import item3 from '$lib/images/item3.jpg'
import item4 from '$lib/images/item4.jpg'

const isEn = $locale === 'en'

const links = [
  { class: 'hover:text-youtube', link: "https://youtube.com/c/HarlosMusic", icon: YoutubeIcon },
  { class: 'hover:text-twitch', link: "https://twitch.tv/harlosmusic", icon: TwitchIcon },
  { class: 'hover:text-twitter', link: "https://twitter.com/Harlos_Music", icon: TwitterIcon },
  { class: 'hover:text-discord', link: "https://discord.gg/6r4bvhr", icon: DiscordIcon },
  { class: 'hover:text-musescore', link: "https://musescore.com/user/290451/", icon: MusescoreIcon },
  { class: 'hover:text-facebook', link: "https://facebook.com/harlos0517", icon: FacebookIcon },
  { class: 'hover:text-facebook', link: "https://facebook.com/HarlosMusic", icon: FacebookIcon },
  { class: 'hover:text-instagram', link: "https://instagram.com/harlos0517/", icon: InstagramIcon },
  { class: 'hover:text-instagram', link: "https://instagram.com/harlos_music/", icon: InstagramIcon },
  { class: 'hover:text-plurk', link: "https://plurk.com/deemoharlos", icon: PlurkIcon },
  { class: 'hover:text-marshmallow', link: "https://marshmallow-qa.com/deemoharlos", icon: MarshmallowIcon },
  { class: 'hover:text-kofi', link: "https://ko-fi.com/harlosmusic", icon: KofiIcon },
  { class: 'hover:text-ecpay', link: "https://p.ecpay.com.tw/D09AB0F", icon: DollarIcon },
  { class: 'hover:text-opay', link: "https://payment.opay.tw/Broadcaster/Donate/D4219FECF2688467FC9E0B94B60CFAA6", icon: DollarIcon },
  { class: 'hover:text-deer', link: "https://deerdonate.herokuapp.com/donation/Harlos_Music_%7C_%E5%93%88%E6%B4%9B%E6%96%AF%E9%9F%B3%E6%A8%82", icon: DollarIcon },
]

const moreLinks = [
  { key: 'collection', link: '/collection', icon: SonglistIcon },
  { key: 'commission', link: '/commission', icon: PaperIcon },
]

const abouts = [
  { key: 'piano', imageUrl: sky },
  { key: 'arrange', imageUrl: item3 },
  { key: 'original', imageUrl: item4 },
]
</script>

<template lang="pug">
mixin withTranslation(key)
  | {$t(`index.#{key}`)}
  +if('!isEn')
    br
    | {$t(`index.#{key}`, { locale: 'en' })}

.min-h-dvh.py-12.flex.flex-col.justify-center.items-center.font-bold.drop-shadow-lg
  img.rounded-full.h-36(class="md:h-48" src=" {headpic2}" alt="Harlos")
  .text-center.mt-12
    h1.mb-6.text-3xl(class="md:text-5xl")
      +if('isEn') {$t('index.name')}
        +else
          span(class="border-r-2 pr-4 mr-4 my-4") {$t('index.name', { locale: 'en' })}
          span {$t('index.name')}
    p: +withTranslation('description')
  .links.mt-12.flex.flex-col(class="lg:flex-row lg:items-center")
    +each('[0, 1, 2] as i')
      .mr-0.mb-6(class="xl:mb-0 lg:mr-6 xl:mr-12 last:mr-0")
        +each('links.slice( 5*i,  5*i+5) as link')
          a.mr-6.inline-block.w-9.h-9(class="xl:mr-12 last:mr-0 {link.class}" href=" {link.link}" target="_blank")
            | {@html link.icon}
  .more.mt-12.flex.flex-row
    +each('moreLinks as block, i')
      a.text-center.mr-20(class="md:mr-48 last:mr-0" href=" {block.link}")
        span.inline-block.w-20.h-20.mb-4(class="md:w-32 md:h-32") {@html block.icon}
        p: +withTranslation('${block.key}')
#about.min-h-dvh
  +each('abouts as block, i')
    div.block.bg-cover.bg-fixed(style:background-image="url({block.imageUrl})")
      .max-w-screen-md.h-full.my-0.mx-auto.flex.flex-row.items-center(
        style:justify-content=" {i % 2 ? 'end' : 'start'}"
        style:text-align=" {i % 2 ? 'right' : 'left'}"
      )
        h3.px-12.drop-shadow-lg.font-bold.text-2xl: +withTranslation('${block.key}')
.min-h-dvh
</template>

<style lang="sass">
a :global(svg)
  width: 100%
  height: 100%

#about
  padding-top: 6.25dvh
  & > .block
    height: 25dvh
    margin-bottom: 6.25dvh
</style>