<template>
  <div class="app-wrapper">
    <div class="app-wrapper-header">
      <header-bar></header-bar>
    </div>
    <div class="app-wrapper-cont">
      <div class="app-wrapper-left"><app-main></app-main></div>
      <div class="app-wrapper-right"><right-bar></right-bar></div>
    </div>
    <div class="app-wrapper-footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import { HeaderBar, FooterBar, AppMain, RightBar } from './components'
export default {
  components: {
    HeaderBar,
    FooterBar,
    AppMain,
    RightBar
  }
}
</script>