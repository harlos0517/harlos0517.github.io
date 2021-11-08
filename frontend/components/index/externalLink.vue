<template lang="pug">
  a.d-block.external-link.text-center(:href="linkUrl")
    img(:src="imageUrl")
    br
    div.mt-2: span {{ text }}
</template>

<style lang="sass" scoped>
.external-link
  width: 120px
  img
    height: 60px
    border-radius: 5px
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() imageUrl!: string
  @Prop() text!: string
  @Prop() linkUrl!: string
}
</script>
