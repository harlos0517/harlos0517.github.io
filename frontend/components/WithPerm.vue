<template lang="pug">
.with-permission
  BIconCheckCircleFill.text-success.mr-1(v-if="allow")
  BIconXCircleFill.text-danger.mr-1(v-else="allow")
  slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import {
  BIconCheckCircleFill,
  BIconXCircleFill,
} from 'bootstrap-vue'

export default defineComponent({
  components: {
    BIconCheckCircleFill,
    BIconXCircleFill,
  },
  props: {
    allow: Boolean,
  },
})
</script>

<style lang="sass" scoped></style>

