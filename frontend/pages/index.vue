<template lang="pug">
  #main-container.text-white
    #head-page.text-center
      #headpic.bg-contain
        img(src="@/assets/image/deemo.jpg")
        br
        .my-4: h1 Deemo Harlos
      #logo.text-center
        img(src="@/assets/image/HARLOS_BLACK.png")
        br
        .my-4: h2 Harlos Music / Harlos Gaming
      #main-links.my-4.flex-row-center
        div.link.mx-2(v-for="(link, key) in mainLinks" :key="key")
          index-externalLink(:imageUrl="link.imageUrl" :text="link.text" :linkUrl="link.linkUrl")
      h3.mt-5 Dontaion 贊助
      #donate-links.my-4.flex-row-center
        div.link.mx-2(v-for="(link, key) in donateLinks" :key="key")
          index-externalLink(:imageUrl="link.imageUrl" :text="link.text" :linkUrl="link.linkUrl")
      h3.mt-5 Other Links 其他
      #other-links.my-4.flex-row-center
        div.link.mx-2(v-for="(link, key) in otherLinks" :key="key")
          index-externalLink(:imageUrl="link.imageUrl" :text="link.text" :linkUrl="link.linkUrl")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  readonly mainLinks = [
    {
      imageUrl:
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png',
      text: 'Harlos Music',
      linkUrl: 'https://www.youtube.com/c/harlosmusic',
    },
    {
      imageUrl:
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png',
      text: 'Harlos Gaming',
      linkUrl: 'https://www.youtube.com/channel/UCZJCh43j24Xk14uzyA7Vwzw',
    },
    {
      imageUrl:
        'https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg',
      text: 'Twitch',
      linkUrl: 'https://www.twitch.tv/deemoharlos',
    },
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/zh/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png',
      text: 'Twitter',
      linkUrl: 'https://twitter.com/DeemoHarlos',
    },
    {
      imageUrl:
        'https://static.wikia.nocookie.net/kong/images/e/e9/Discord-icon.png',
      text: 'Harlos\' Studio (Discord Server)',
      linkUrl: 'https://discord.gg/6r4bvhr',
    },
    {
      imageUrl:
        'http://s.musescore.org/about/images/musescore-mu-transbg-m.png',
      text: 'Harlos Music (musicsheets)',
      linkUrl: 'https://musescore.com/deemoharlos',
    },
  ]
  readonly donateLinks = [
    {
      imageUrl:
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/ko_fi_logo_icon_169373.png',
      text: 'Ko-fi',
      linkUrl: 'https://ko-fi.com/deemoharlos',
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
  readonly otherLinks = [
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png',
      text: 'Harlos\' Music',
      linkUrl: 'https://www.facebook.com/HarlosMusic',
    },
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png',
      text: 'Harlos\' Music',
      linkUrl: 'https://www.instagram.com/Deemo_Harlos/',
    },
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png',
      text: 'Deemo Harlos',
      linkUrl: 'https://www.facebook.com/deemoharlos/',
    },
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png',
      text: 'Deemo Harlos',
      linkUrl: 'https://www.instagram.com/deemo_0517/',
    },
  ]
}
</script>

<style lang="sass" scoped>
@import '@/assets/style'

#main-container
  min-height: 100vh
  background-color: black

  #head-page
    padding: 8vh 0

    #headpic
      img
        height: 200px

    #logo
      position: relative
      img
        height: 300px
      div
        position: absolute
        bottom: -1rem
        width: 100%
</style>
