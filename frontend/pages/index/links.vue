<template lang="pug">
#links.text-center
  #main-links.link-class.my-4.flex-row.middle-center
    div.link.m-2(v-for="(link, key) in mainLinks" :key="key")
      a.d-block.external-link.text-center(:href="link.linkUrl" target="_blank")
        img(:src="link.imageUrl")
        br
        div.mt-2: span {{ link.text }}
  h3.mt-5 Dontaion
  #donate-links.link-class.my-4.flex-row.middle-center
    div.link.m-2(v-for="(link, key) in donateLinks" :key="key")
      a.d-block.external-link.text-center(:href="link.linkUrl" target="_blank")
        img(:src="link.imageUrl")
        br
        div.mt-2: span {{ link.text }}
  h3.mt-5 Social Media
  #other-links.link-class.my-4.flex-row.middle-center
    div.link.m-2(v-for="(link, key) in otherLinks" :key="key")
      a.d-block.external-link.text-center(:href="link.linkUrl" target="_blank")
        img(:src="link.imageUrl")
        br
        div.mt-2: span {{ link.text }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const mainLinks = [
  {
    imageUrl: require('~/assets/image/youtube.png'),
    text: 'Youtube',
    linkUrl: 'https://www.youtube.com/c/harlosmusic',
  },
  {
    imageUrl: require('~/assets/image/twitch.png'),
    text: 'Twitch',
    linkUrl: 'https://www.twitch.tv/harlosmusic',
  },
  {
    imageUrl: require('~/assets/image/twitter.png'),
    text: 'Twitter',
    linkUrl: 'https://twitter.com/Harlos_Music',
  },
  {
    imageUrl: require('~/assets/image/discord.webp'),
    text: 'Discord Server',
    linkUrl: 'https://discord.gg/6r4bvhr',
  },
  {
    imageUrl: require('~/assets/image/musescore.png'),
    text: 'musicsheets',
    linkUrl: 'https://musescore.com/user/290451/',
  },
]

const donateLinks = [
  {
    imageUrl:
      'https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e1116779fc0a9bd5bdbcc7_Frame%206.png',
    text: 'Ko-fi',
    linkUrl: 'https://ko-fi.com/harlosmusic',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Patreon_logo.svg/2048px-Patreon_logo.svg.png',
    text: 'Patreon',
    linkUrl: 'https://www.patreon.com/HarlosMusic',
  },
  {
    imageUrl:
      'https://www.opay.tw/Content/images/Announcement/opay_icon.png',
    text: '歐付寶 O\'Pay',
    linkUrl: 'https://payment.opay.tw/Broadcaster/Donate/D4219FECF2688467FC9E0B94B60CFAA6',
  },
  {
    imageUrl:
      'https://www.ecpay.com.tw/Content/images/logo100x60.png',
    text: '綠界 ECPay',
    linkUrl: 'https://p.ecpay.com.tw/D09AB0F',
  },
]

const otherLinks = [
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png',
    text: 'Harlos',
    linkUrl: 'https://www.facebook.com/harlos0517',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png',
    text: 'Harlos',
    linkUrl: 'https://www.instagram.com/harlos0517/',
  },
]

export default defineComponent({
  setup() {
    return { mainLinks, donateLinks, otherLinks }
  },
})
</script>

<style lang="sass" scoped>
@import '@/assets/style'

.link-class
  flex-wrap: wrap

.external-link
  width: 120px
  img
    height: 60px
    border-radius: 5px
</style>
