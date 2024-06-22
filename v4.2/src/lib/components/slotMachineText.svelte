<script setup lang="ts">
import { onMount } from "svelte";

export let options: {
  name: string
  value: any
}[]
export let currentOption: {
  name: string
  value: any
}

let currentIndex = options.findIndex(o => o === currentOption)
let wrapper: HTMLElement 

const changeText = () => {
  currentIndex = (currentIndex + 1) % options.length
  currentOption = options[currentIndex]
  wrapper.style.transform = `translateY(-${currentIndex * 1.5}em)`
}

onMount(() => {
  wrapper.style.transform = `translateY(-${currentIndex * 1.5}em)`
  wrapper.style.opacity = `1`
})
</script>

<template lang="pug">
button.overflow-hidden.relative.rounded-lg.border.leading-normal(
  class="border-white/50 hover:bg-white/10"
  style:height="1.5em"
  style:padding="0 0.5em"
  on:click="{changeText}"
)
  .wrapper.relative.transition.duration-200.opacity-0(bind:this="{wrapper}")
    +each('options as option')
      div {option.name}
</template>

<style lang="sass">
</style>
