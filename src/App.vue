<template>
  <div class="app-layout">
    <header class="header">
      <div><img class="img"
             src="./assets/question.svg" /></div>
      <div>你问我答</div>
    </header>
    <nav-menu></nav-menu>
    <!-- 菜单将放在这里 -->
    <router-view />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
export default {
  components: {
    NavMenu
  }
};
</script>

<style lang="stylus">
@import './assets/style/main'
</style>
<style lang="stylus" scoped>
.header
  .img
    width 64px
    height 64px
</style>

