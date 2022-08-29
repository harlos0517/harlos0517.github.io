<template lang="pug">
  #index-content.h-100.flex-column
    #banner.position-relative
      .container.flex-md-row.flex-column.middle-center.my-md-5.my-3
        img#headpic.mr-md-5.mr-0(src="~/assets/image/headpic.jpg")
        #description
          .name Deemo Harlos
          p.mb-0.text-md-left.text-center.
            Pop Pianist, Percussionist, <br>
            Arranger, Composer, <br>
            Web Developer
    #items.flex-fill.flex-row.text-center.flex-wrap
      .item.item1.col-md-3.col-6.middle-center
        span Piano
      .item.item2.col-md-3.col-6.middle-center
        span Covers &amp; Arrangements
      .item.item3.col-md-3.col-6.middle-center
        span Original Music
      .item.item4.col-md-3.col-6.middle-center
        span Web Develop
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="sass" scoped>
#index-content
  overflow: hidden
  #banner
    background-image: url('~/assets/image/sky.jpg')
    background-size: cover
    background-position: center
    .container
      #headpic
        border-radius: 50%
        height: 200px
        filter: drop-shadow(0 0 8px #000000CC)
        @media screen and (max-width: 768px)
          height: 150px
      #description
        filter: drop-shadow(0 0 8px #000000CC)
        .name
          font-size: 3rem
          @media screen and (max-width: 768px)
            font-size: 2rem
  #items
    .item
      background-size: cover
      background-position: center
      font-size: 1.5rem
      box-shadow: 0 0 0 #00000000
      transform: scale(1)
      transition: box-shadow 300ms, transform 300ms
      span
        filter: drop-shadow(0 0 8px #000000CC)
      &:hover
        box-shadow: 0 0 16px #000000CC
        z-index: 1
        transform: scale(1.05)
    .item1
      background-image: url('~/assets/image/item1.jpg')
    .item2
      background-image: url('~/assets/image/item2.jpg')
    .item3
      background-image: url('~/assets/image/item3.jpg')
    .item4
      background-image: url('~/assets/image/item4.jpg')
  #footer
    font-family: monospace
</style>
