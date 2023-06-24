<template lang="pug">
#navbar.flex-row.position-relative.my-4
  .navbar-logo-bg.px-md-4.px-2
  NuxtLink.navbar-button.flex-row(to="/")
    img.d-md-block.d-none.full(src="~/assets/image/navbar-logo.png")
    img.d-md-none.d-block.full(src="~/assets/image/navbar-logo-mobile.png")
  .navbar-logo-bg.px-md-4.px-2
  img.full(src="~/assets/image/navbar-logo-div.png")
  .navbar-right.flex-column.flex-fill
    #buttons.flex-row.position-relative.pr-4
      div.pc.d-lg-flex.d-none.flex-row.flex-fill(v-for="link in links")
        .navbar-bg.pr-3.flex-fill
        NuxtLink.navbar-button.flex-row(:to="link.to")
          img.full(:src="require(`~/assets/image/${link.img}.png`)")
          .navbar-bg.d-flex.pl-2.text-wrapper.middle-center
            span {{ link.name }}
      div.mobile.d-lg-none.d-flex.flex-row.flex-fill(v-for="link in links")
        .navbar-bg.pr-3.flex-fill
        img.full(
          :src="require(`~/assets/image/${link.img}.png`)"
          @click="toggleLink(link)"
        )
        .navbar-button.flex-row(:to="link.to" :class="{ show: link === showLink }")
          .navbar-bg.pl-2.text-wrapper.middle-center
            span {{ link.name }}
      .navbar-bg.pr-3.flex-fill
      img.full(src="~/assets/image/navbar-end.png")
    #status-bar.flex-fill.flex-row.pr-4
      #external-links.flex-row.ml-md-3.ml-2
        div.link.mx-md-3.mx-2(v-for="(link, key) in externalLinks" :key="key")
          a.d-block.external-link.text-center(:href="link.linkUrl" target="_blank")
            img(:src="link.imageUrl")
      span.d-md-block.d-none {{ timeString }}
      span.d-md-none.d-block {{ timeStringMobile }}
</template>

<script lang="ts">
import { computed, defineComponent, ref, useRouter } from '@nuxtjs/composition-api'
import dateformat from 'dateformat'

const links = [
  { name: 'Collection', to: '/music', img: 'navbar-eighth' },
  { name: 'Commission', to: '/commission', img: 'navbar-fclef' },
  { name: 'Coding Projects', to: '/projects', img: 'navbar-commontime' },
  { name: 'Links & Donation', to: '/links', img: 'navbar-gclef' },
]

const externalLinks = [
  {
    imageUrl: require('~/assets/image/youtube.png'),
    linkUrl: 'https://www.youtube.com/c/harlosmusic',
  },
  {
    imageUrl: require('~/assets/image/twitch.png'),
    linkUrl: 'https://www.twitch.tv/harlosmusic',
  },
  {
    imageUrl: require('~/assets/image/twitter.png'),
    linkUrl: 'https://twitter.com/Harlos_Music',
  },
  {
    imageUrl: require('~/assets/image/discord.webp'),
    linkUrl: 'https://discord.gg/6r4bvhr',
  },
  {
    imageUrl: require('~/assets/image/musescore.png'),
    linkUrl: 'https://musescore.com/user/290451/',
  },
]

export default defineComponent({
  setup() {
    const router = useRouter()

    let now = ref(new Date(Date.now() + 8 * 60 * 60 * 1000))
    const timeString = computed(
      () => dateformat(now.value, 'UTC:yyyy mmm dd (ddd), HH:MM:ss "UTC+8"').toUpperCase(),
    )
    const timeStringMobile = computed(
      () => dateformat(now.value, 'UTC:mmm dd, HH:MM "+8"').toUpperCase(),
    )
    setInterval(() => {
      now.value = new Date(Date.now() + 8 * 60 * 60 * 1000)
    }, 1000)

    const showLink = ref<{ name: string, to: string, img: string } | null>(null)
    const toggleLink = (link: { name: string, to: string, img: string }) => {
      if (showLink.value === link) showLink.value = null
      else showLink.value = link
      router.push({ path: showLink.value?.to || '/' })
    }

    return { links, timeString, timeStringMobile, showLink, toggleLink, externalLinks }
  },
})
</script>

<style lang="sass" scoped>
#navbar
  height: 160px
  @media screen and (max-width: 768px)
    height: 80px
  .navbar-logo-bg
    background-image: url('~/assets/image/navbar-logo-bg.png')
    background-size: auto 100%
  img.full
    height: 100%
  .mobile img + .navbar-button
    overflow: hidden
    span
      opacity: 0
    max-width: 0
    transition: all 300ms
  .mobile img + .navbar-button.show
    span
      opacity: 1
    max-width: 50vw
  #buttons
    height: calc(100% * 234 / 350)
  .navbar-button:hover .text-wrapper
    display: flex !important
  .navbar-bg
    background-image: url('~/assets/image/navbar-bg.png')
    background-size: auto 100%
  .text-wrapper
    font-size: 1.25rem
    @media screen and (max-width: 768px)
      font-size: 1rem
  #status-bar
    justify-content: space-between
    font-family: monospace
    padding-bottom: 25px
    align-items: flex-end
    font-size: 80%
    @media screen and (max-width: 768px)
      font-size: 60%
    #external-links
      .external-link
        width: 45px
        @media screen and (max-width: 768px)
          width: 10px
        img
          height: 30px
          @media screen and (max-width: 768px)
            height: 15px
</style>
