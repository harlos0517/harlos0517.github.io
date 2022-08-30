<template lang="pug">
  #music.position-relative
    .container.pb-4(v-for="worktype in worktypes")
      .row.head-wrapper.flex-wrap.mb-3
        .col-12.text-center
          span.worktype-name {{ worktype.name }}
        .col-12: hr.mb-0
      .row.work.my-2.py-2(v-for="work in works.filter(w => w.type === worktype.type)")
        .col-md-10.col-8 {{ work.name }}
        .col-md-1.col-2.text-center
          a(v-if="work.youtube" :href="work.youtube" target="_blank")
            img.icon(src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png")
        .col-md-1.col-2.text-center
          a(v-if="work.musescore" :href="work.musescore" target="_blank")
            img.icon(src="~/assets/image/musescore.png")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const worktypes = [
  { type: 'original', name: 'Original Music' },
  { type: 'orchestraarr', name: 'Orchestra Arrangement' },
  { type: 'windbandarr', name: 'Wind Band Arrangement' },
  { type: 'chamberarr', name: 'Chamber Arrangement' },
  { type: 'pianoarr', name: 'Piano Arrangement' },
  { type: 'pianocover', name: 'Piano Cover' },
  { type: 'remix', name: 'Remix' },
  { type: 'fulltranscript', name: 'Full Transcript' },
  { type: 'leadsheet', name: 'Lead Sheet' },
  { type: 'dpsp', name: 'DPSP (Deemo Piano Score Project)' },
  { type: 'condensed', name: 'Wind Band Condensed Score (for Educational Purposes)' },
  { type: 'other', name: 'Other' },
]

const works = [
  { type: 'original', name: '海の旋律 (The Melody of Sea)', youtube: 'https://youtu.be/a0SUS6HOh9Y', musescore: 'https://musescore.com/user/290451/scores/6264353' },
  { type: 'original', name: '淡聲 - 王馨瑜/Deemo Harlos/陳昱廷 (mutual work) ', youtube: 'https://youtu.be/ghsKRMIduRs' },
  { type: 'original', name: 'Origin of the Winds', musescore: 'https://musescore.com/user/290451/scores/6579664' },
  { type: 'original', name: 'Fiery Phoenix Queen (The Day of The Phoenix) - KFP (mutual work)', musescore: 'https://musescore.com/user/290451/scores/6863066' },

  { type: 'orchestraarr', name: 'The Phoenix (Orchestral Suite from Takanashi Kiara)', youtube: 'https://youtu.be/bDkLQRXu-HU', musescore: 'https://musescore.com/user/290451/scores/8172327' },
  { type: 'orchestraarr', name: 'The Phoenix Will Go On (from HINOTORI by Takanashi Kiara)', musescore: 'https://musescore.com/user/290451/scores/6799869' },
  { type: 'orchestraarr', name: 'Astrogirl - Tsukumo Sana', youtube: 'https://youtu.be/ukP-5RvJE9Q', musescore: 'https://musescore.com/user/290451/scores/8362872' },

  { type: 'windbandarr', name: 'Taiwanese Folk Song Suite', musescore: 'https://musescore.com/user/290451/scores/5461968' },
  { type: 'windbandarr', name: '成名在望 - 五月天', musescore: 'https://musescore.com/user/290451/scores/5482144' },
  { type: 'windbandarr', name: 'Baba Yetu (Civilization 4 Theme) - Christopher Tin', musescore: 'https://musescore.com/user/290451/scores/5542450' },

  { type: 'chamberarr', name: '紅蓮華 (鬼滅之刃 OP) - 草野華余子/LiSA (打擊八重奏)', musescore: 'https://musescore.com/user/290451/scores/6376177' },

  { type: 'pianoarr', name: 'Altale - 削除 (Piano Duet)', musescore: 'https://musescore.com/user/290451/scores/5151406' },
  { type: 'pianoarr', name: 'Chicken Attack - Takeo Ischi', musescore: 'https://musescore.com/user/290451/scores/5384667' },
  { type: 'pianoarr', name: '僕が死のうと思うたのは - amazarashi', musescore: 'https://musescore.com/user/290451/scores/5163003' },
  { type: 'pianoarr', name: '還願 - 草東沒有派對', musescore: 'https://musescore.com/user/290451/scores/5538371' },
  { type: 'pianoarr', name: 'Lemon - 米津玄師', musescore: 'https://musescore.com/user/290451/scores/5264329' },
  { type: 'pianoarr', name: 'Loser - 米津玄師', musescore: 'https://musescore.com/user/290451/scores/5659530' },
  { type: 'pianoarr', name: 'Loser (Kobasolo Cover Ver.) - 米津玄師', musescore: 'https://musescore.com/user/290451/scores/5659436' },
  { type: 'pianoarr', name: 'Used to be (Cytus II ED) - KIVΛ', musescore: 'https://musescore.com/user/290451/scores/5605839' },
  { type: 'pianoarr', name: 'Sincerely (Violet Evergarden OP) - TRUE', musescore: 'https://musescore.com/user/290451/scores/5656574' },
  { type: 'pianoarr', name: '紅蓮華 (鬼滅之刃 OP) - 草野華余子/LiSA', musescore: 'https://musescore.com/user/290451/scores/6088143' },

  { type: 'pianocover', name: 'SPARKS - Takanashi Kiara', youtube: 'https://youtu.be/DMdNnHve8mU' },
  { type: 'pianocover', name: 'SPARKS (Melancholic Ver.) - Takanashi Kiara', youtube: 'https://youtu.be/_1Jyw5Hrrqc' },
  { type: 'pianocover', name: 'ALiCE&u - Ayunda Risu / Feryquitous', youtube: 'https://youtu.be/1yvW5GtfG4E' },
  { type: 'pianocover', name: 'Daydream - Ouro Kronii / Tatsuya Yano', youtube: 'https://youtu.be/4u_6Nqpz_cA' },

  { type: 'remix', name: 'SITCON 2018 OP Animation BGM', youtube: 'https://youtu.be/U_7qPitWoAo' },
  { type: 'remix', name: 'SITCON 2019 OP Animation BGM', youtube: 'https://youtu.be/FGcAzTdwOCE' },

  { type: 'fulltranscript', name: 'Moon without the Stars - Jerry Barnes Quiana', musescore: 'https://musescore.com/user/290451/scores/1849821' },
  { type: 'fulltranscript', name: 'Reflection - VK 克', musescore: 'https://musescore.com/user/290451/scores/1941551' },
  { type: 'fulltranscript', name: 'Wings of Piano - VK 克', musescore: 'https://musescore.com/user/290451/scores/5461885' },
  { type: 'fulltranscript', name: 'Dream - Rabpit', musescore: 'https://musescore.com/user/290451/scores/268761' },
  { type: 'fulltranscript', name: 'Friction - Mili', musescore: 'https://musescore.com/user/290451/scores/463321' },
  { type: 'fulltranscript', name: 'Utopiosphere - Mili', musescore: 'https://musescore.com/user/290451/scores/5195857' },

  { type: 'leadsheet', name: 'Diamond City Lights - LazuLight', musescore: 'https://musescore.com/user/290451/scores/7120834' },

  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6431197', name: '幾年月 (Ikutoshitsuki) - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384729', name: 'Witch\'s Invitation - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5434399', youtube: 'https://youtu.be/nRbzOaDFDFA', name: 'Starting wind - Edmund Fu' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384679', name: 'Fluquor - Onoken' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5149737', youtube: 'https://youtu.be/Epm2ln8Eqhw', name: 'ANiMA - xi' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5259223', youtube: 'https://youtu.be/-A9JkDrqIhA', name: 'Jumpy Star - Yuk-cheung Chun, Jeff Li, Justine Lu' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384674', name: 'Ephemeral - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5657290', name: 'Nine Point Eight - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384726', name: 'Suspenseful Third Day - Kaeru Underground' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384698', youtube: 'https://youtu.be/tM9CSN9Gquo', name: 'Magnolia - M2U ft. Guriri' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5196812', youtube: 'https://youtu.be/g1ArozilLZ4', name: 'Utopiosphere - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5887332', name: 'I Hate To Tell You - Yuk-cheung Chun' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5702016', name: 'Scherzo -pain in rain- - xi vs. Ice' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6431136', name: 'DK - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6418713', name: 'Ga1ahad and Scientific Witchery - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6410773', name: 'Bathtub Mermaid - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6409274', name: 'UFO - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6407605', name: 'Imagined Flight - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6408025', name: 'Space Colony - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/6404223', name: 'Sunset - Alex Vourtsanis' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5898033', name: 'Cerebrite - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5891773', name: '指切りげんまん (Yubikiri Genman) - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5895875', name: 'Rosetta - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5894541', name: 'Past the Stargazing Season - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5887465', name: 'Amber Wishes - Ice' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5897381', name: 'A Turtle\'s Heart - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5888426', name: 'Saika - Rabpit' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5739174', name: 'Platinum - Sta' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5729021', name: 'Noblesse Obilige - Powerless' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5699156', name: 'RE:UNION -Duo Blade Against- - Ice vs. Morimori Atsushi' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5733089', name: 'Undo - Yukcheung Chun feat. Misi Ke' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5696785', name: 'Light Pollution - Yuk-cheung Chun ft. Europa Huang' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5576125', youtube: 'https://youtu.be/KzgxDT_E2oU', name: 'Aragami - xi' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5420467', youtube: 'https://youtu.be/I-YEpikOy6E', name: 'Run Lads Run - KillerBlood (Piano Duet)' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5386499', name: 'Entrance - Ice' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384718', name: 'Rainbow\'s End - Edmund Fu' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384713', name: 'Myosotis - M2U & Nicode' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384707', name: 'Milk - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384704', name: 'Marigold - M2U ft. Guriri' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5384688', name: 'H - orangentle (Piano Solo)' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5349449', youtube: 'https://youtu.be/MxxBQrHLC2o', name: 'Deerstalker - NICODE (Piano Duet)' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5244683', youtube: 'https://youtu.be/0lRNswXbXoM', name: 'Dream - Rabpit' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5221109', youtube: 'https://youtu.be/mKGwWu9-J7g', name: 'Lune - M2U & Nicode' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5213320', youtube: 'https://youtu.be/ka682BUSKj4', name: 'White Fantasy - SLS (Piano Solo)' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5149788', youtube: 'https://youtu.be/_yZjlkMLmuU', name: 'Altale - Sakuzyo' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5185026', youtube: 'https://youtu.be/bXHb7GVEm1Q', name: 'Fable - Mili' },
  { type: 'dpsp', musescore: 'https://musescore.com/user/290451/scores/5141328', youtube: 'https://youtu.be/qyQAgI9mn2A', name: 'Lost in the Nowhere - Rave Cyanide & Lunatic Sound' },

  { type: 'condensed', musescore: 'https://musescore.com/user/290451/scores/5171734', name: 'Mystery on Mena Mountain - Julie Giroux-West' },
  { type: 'condensed', musescore: 'https://musescore.com/user/290451/scores/5231702', name: '時つ風 ~我が智謀の剣~ The time has come - Masanori Taruya 樽屋雅徳' },
  { type: 'condensed', musescore: 'https://musescore.com/user/290451/scores/5316244', name: 'DeSalvo - Carl Strommen' },

  { type: 'other', musescore: 'https://musescore.com/user/290451/scores/7099755', name: 'Grace Kelly - MIKA (chorus A Capella Choir Arr. by Enna Alouette)' },
  { type: 'other', musescore: 'https://musescore.com/user/290451/scores/6767070', name: 'Hot Cross Buns (Recorder Solo Cover by Mori Calliope)' },
  { type: 'other', musescore: 'https://musescore.com/user/290451/scores/5422822', name: 'Sdorica Main Theme (Piano Ver.) - Chamber Chu' },
  { type: 'other', musescore: 'https://musescore.com/user/290451/scores/1720561', name: '[imcomplete] The Bells of Notre Dame (Windband Arr. Deemo Harlos)' },

]

export default defineComponent({
  setup() {
    return { worktypes, works }
  },
})
</script>

<style lang="sass" scoped>
#music
  .head-wrapper
    background-color: #000000
    position: sticky
    top: 0
    z-index: 1
    .worktype-name
      font-size: 1.5rem
    hr
      border-top: 1px solid #FFFFFF22
  .row.work
    &.work:hover
      border-radius: 5px
      background-color: #FFFFFF22
    img.icon
      height: 1.5rem
</style>
