<template lang="pug">
#commission.container
  h2 {{ $t('commission.harlosMusicCommission') }}
  ul
    li
      BIconCheckCircleFill.text-success.mr-1
      | {{ $t('commission.preferStyle') }}
    li
      BIconExclamationTriangleFill.text-warning.mr-1
      | {{ $t('commission.notPreferStyle') }}
    li
      BIconCheckCircleFill.text-success.mr-1
      | {{ $t('commission.preferArr') }}
    li
      BIconExclamationTriangleFill.text-warning.mr-1
      | {{ $t('commission.notPreferArr') }}
    li
      BIconMusicNoteBeamed.text-info.mr-1
      i18n(path="commission.collectionReference")
        template(v-slot:collection)
          NuxtLink(to="/music") {{ $t('navbar.collection') }}
  b-alert(variant="warning" show).
    {{ $t('commission.arrNoCommercial') }}
  b-alert(variant="warning" show)
    i18n(path="commission.mixNotice")
      template(v-slot:iAmNotProMix)
        b {{ $t('commission.iAmNotProMix') }}
      template(v-slot:br)
        br
      template(v-slot:otherThan)
        b {{ $t('commission.otherThan') }}
      template(v-slot:musescore4)
        a(href="https://www.youtube.com/watch?v=nrmnHo-aXz8" target="_blank")
          | {{ $t('commission.example') }}
      template(v-slot:uvi)
        a(href="https://www.youtube.com/watch?v=QuZRjmUx7M4" target="_blank")
          | {{ $t('commission.example') }}

  h2 {{ $t('commission.process') }}
  b-list-group
    b-list-group-item(variant="primary")
      h5: b 1. {{ $t('commission.dm') }}
      ul
        li {{ $t('commission.yourName') }}
        li {{ $t('commission.musicUsage') }}
        li {{ $t('commission.commercialPerpetual') }}
        li {{ $t('commission.musicLength') }}
        li {{ $t('commission.musicStyle') }}
        li {{ $t('commission.useInstrument') }}
        li {{ $t('commission.reference') }}
        li {{ $t('commission.repeat') }}
        li {{ $t('commission.mixing') }}
        li {{ $t('commission.other') }}
        li {{ $t('commission.deadline') }}
    b-list-group-item(variant="primary")
      h5: b 2. {{ $t('commission.discussion') }}
      ul
        li {{ $t('commission.screenshot') }}
    b-list-group-item(variant="warning")
      h5: b 3. {{ $t('commission.draft') }}
      ul
        li {{ $t('commission.draftModify') }}
        li {{ $t('commission.deposit') }}
        li {{ $t('commission.depositNoReturn') }}
    b-list-group-item(variant="warning")
      h5: b 4. {{ $t('commission.beforeMix') }}
      ul
        li {{ $t('commission.beforeMixModify') }}
    b-list-group-item(variant="success")
      h5: b 5. {{ $t('commission.mixStage') }}
      ul
        li {{ $t('commission.recieveFile') }}
        li {{ $t('commission.googleDrive') }}
    b-list-group-item(variant="info")
      h5: b 6. {{ $t('commission.after') }}

  h2 {{ $t('commission.priceEstimationTool') }}
  b-alert(variant="warning" show).
    {{ $t('commission.priceDisclaimer') }}
  Price-Tool

  h2 {{ $t('commission.commercialPerpetualTitle') }}
  div.table-wrapper
    b-table-simple(table-variant="dark" striped bordered fixed)
      col(style="width: 40px")
      b-thead
        b-tr.text-center
          b-th
          b-th {{ $t('commission.noComNoPer') }}<br>{{ $t('commission.price') }} x 1
          b-th {{ $t('commission.comNoPer') }}<br>{{ $t('commission.price') }} x 2
          b-th {{ $t('commission.noComPer') }}<br>{{ $t('commission.price') }} x 3
          b-th {{ $t('commission.comPer') }}<br>{{ $t('commission.price') }} x 6
          b-th {{ $t('commission.fullPer') }}<br>{{ $t('commission.price') }} x 10
      b-tbody
        b-tr.allow
          b-th(sticky-column)
            With-Perm(:allow="true") {{ $t('commission.iCan') }}
          b-td(colspan=2)
            With-Perm(:allow="true")  {{ $t('commission.publicProcess') }}
            With-Perm(:allow="true") {{ $t('commission.publishPersonally') }}
            With-Perm(:allow="true") {{ $t('commission.putInCollection') }}
            With-Perm(:allow="true") {{ $t('commission.modifyAndPublish') }}
          b-td(colspan=2)
            With-Perm(:allow="true"): span(v-html="$t('commission.share')")
          b-td
            With-Perm(:allow="true") {{ $t('commission.preserveCopyright') }}
        b-tr.disallow
          b-th(sticky-column)
            With-Perm(:allow="false") {{ $t('commission.iCant') }}
          b-td(colspan=2)
            With-Perm(:allow="false") {{ $t('commission.sell') }}
            With-Perm(:allow="false") {{ $t('commission.submit') }}
          b-td(colspan=2)
            With-Perm(:allow="false") {{ $t('commission.publicProcessInAdvance') }}
            With-Perm(:allow="false") {{ $t('commission.putInCollection') }}
            With-Perm(:allow="false") {{ $t('commission.modifyAndPublish') }}
            With-Perm(:allow="false") {{ $t('commission.sell') }}
            With-Perm(:allow="false") {{ $t('commission.submit') }}
          b-td
            With-Perm(:allow="false") {{ $t('commission.publish') }}
            With-Perm(:allow="false") {{ $t('commission.putInCollection') }}
            With-Perm(:allow="false") {{ $t('commission.modifyAndPublish') }}
            With-Perm(:allow="false") {{ $t('commission.sell') }}
            With-Perm(:allow="false") {{ $t('commission.submit') }}
        b-tr.allow
          b-th(rowspan=3 sticky-column)
            With-Perm(:allow="true") {{ $t('commission.youCan') }}
          b-td.text-center(colspan=4)
            With-Perm(:allow="true") {{ $t('commission.publishPersonally') }} {{ $t('commission.credit') }}
          b-td
            With-Perm(:allow="true") {{ $t('commission.publishPersonally') }}
        b-tr.allow
          b-td(rowspan=2)
          b-td(rowspan=2)
            With-Perm(:allow="true") {{ $t('commission.commercialUse') }}
          b-td.text-center(colspan=3)
            With-Perm(:allow="true") {{ $t('commission.getFiles') }}
            With-Perm(:allow="true") {{ $t('commission.modify') }}
        b-tr.allow
          b-td
          b-td
            With-Perm(:allow="true") {{ $t('commission.commercialUse') }}
            With-Perm(:allow="true") {{ $t('commission.sell') }} {{ $t('commission.credit') }}
          b-td
            With-Perm(:allow="true") {{ $t('commission.commercialUseAndPublish') }}
            With-Perm(:allow="true") {{ $t('commission.sell') }}
        b-tr.disallow
          b-th(rowspan=2 sticky-column)
            With-Perm(:allow="false") {{ $t('commission.youCant') }}
          b-td.text-center(colspan=5)
            With-Perm(:allow="false") {{ $t('commission.sayYouDidIt') }}
        b-tr.disallow
          b-td
            With-Perm(:allow="false") {{ $t('commission.commercialUse') }}
            With-Perm(:allow="false") {{ $t('commission.modify') }}
            With-Perm(:allow="false") {{ $t('commission.sell') }}
          b-td
            With-Perm(:allow="false") {{ $t('commission.modify') }}
            With-Perm(:allow="false") {{ $t('commission.sell') }}
          b-td
            With-Perm(:allow="false") {{ $t('commission.commercialUse') }}
            With-Perm(:allow="false") {{ $t('commission.sell') }}
          b-td
          b-td
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import {
  BIconCheckCircleFill,
  BIconExclamationTriangleFill,
  BIconMusicNoteBeamed,
  BIconXCircleFill,
} from 'bootstrap-vue'

export default defineComponent({
  components: {
    BIconCheckCircleFill,
    BIconExclamationTriangleFill,
    BIconMusicNoteBeamed,
    BIconXCircleFill,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="sass" scoped>
#commission
  margin-bottom: 5rem
  h2
    background-color: black
    position: sticky
    top: 0
    z-index: 2
    padding: 1rem 0
    margin: 1rem 0
    border-bottom: #999999 solid 1px
  ul
    margin: 0
    padding-left: 30px
  li
    margin: .5rem 0
  a
    color: #999999
  .alert-warning
    background-color: #856404
    color: #fff3cd
    border-color: #ffeeba
    a
      color: #00BBBB
  .list-group
    .list-group-item
      border-color: #DDDDDD
      h5
        margin-top: .5rem
    .list-group-item-primary
      background-color: #002042
      color: #b8daff
    .list-group-item-warning
      background-color: #423202
      color: #fff3cd
    .list-group-item-success
      background-color: #0A2B12
      color: #c3e6cb
    .list-group-item-info
      background-color: #062A30
      color: #bee5eb
  .table-wrapper
    overflow-x: auto
    table
      min-width: 800px
      td, th
        border-color: #999999
        align-content: center
        justify-content: center
</style>
