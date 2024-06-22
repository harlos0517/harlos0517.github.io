<script lang="ts">
import '$lib/i18n'

import runeMorning from '$lib/images/rune-a.jpg'
import runeNight from '$lib/images/rune-b.jpg'

import '$lib/styles/global.sass';

let  backgroundImage = `url(${runeMorning})`
let  backgroundSize = 'auto 200%'
let  backgroundPosition = '50% 0%'

const moveBackground = () => {
  const body = document.querySelector('body');
  if (!body) return
    
  const date = new Date()
  const hour = date.getHours()
  const backgroundImageUrl = hour > 18 || hour < 6 ? runeNight : runeMorning

  const scroll = window.scrollY
  const maxScrollHeight = body.offsetHeight - window.innerHeight
  const enlargePercentage = 200
  const veritcalPercentage = (scroll / maxScrollHeight) * 100
  backgroundImage = `url(${backgroundImageUrl})`
  backgroundSize = 'auto ' + enlargePercentage + '%'
  backgroundPosition = '50% ' + veritcalPercentage + '%'
}

const onload = (e: Element) => {
  moveBackground()
  window.addEventListener('scroll', moveBackground)
  window.addEventListener('resize', moveBackground)
}
</script>

<div
  class="layout"
  use:onload
  style:background-image={backgroundImage}
  style:background-size={backgroundSize}
  style:background-position={backgroundPosition}
>
  <slot />
</div>


<style lang="sass">
.layout
  background-attachment: fixed
</style>