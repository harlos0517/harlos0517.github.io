<template lang="pug">
  #footer.flex-row.middle-center
    div.link.m-3(v-for="(link, key) in mainLinks" :key="key")
      a.d-block.external-link.text-center(:href="link.linkUrl" target="_blank")
        img(:src="link.imageUrl")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const mainLinks = [
  {
    imageUrl:
      'https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png',
    linkUrl: 'https://www.youtube.com/c/harlosmusic',
  },
  {
    imageUrl:
      'https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg',
    linkUrl: 'https://www.twitch.tv/deemoharlos',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png',
    linkUrl: 'https://twitter.com/DeemoHarlos',
  },
  {
    imageUrl:
      'https://static.wikia.nocookie.net/kong/images/e/e9/Discord-icon.png',
    linkUrl: 'https://discord.gg/6r4bvhr',
  },
  {
    imageUrl: require('~/assets/image/musescore.png'),
    linkUrl: 'https://musescore.com/deemoharlos',
  },
]

export default defineComponent({
  setup() {
    return { mainLinks }
  },
})
</script>

<style lang="sass" scoped>
#footer
  .external-link
    width: 60px
    @media screen and (max-width: 768px)
      width: 40px
    img
      height: 40px
      border-radius: 5px
      @media screen and (max-width: 768px)
        height: 30px
</style>
