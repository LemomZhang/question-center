<template>
  <main class="tickets-layout">
    <h1>问题</h1>

    <!-- <Tickets /> -->

    <div class="actions">
      <router-link tag="button"
                   class="secondary"
                   :to="{name: 'all-ticket'}">全部问题</router-link>
      &nbsp;
      <router-link tag="button"
                   class="secondary"
                   :to="{name: 'tickets'}">您的问题</router-link>
      &nbsp;
      <router-link tag="button"
                   class="secondary"
                   :to="{name: 'new-ticket'}">新的问题</router-link>

    </div>

    <router-view />
  </main>
</template>

<!-- <script>
import Tickets from './Tickets.vue'

export default {
  components: {
    Tickets,
  }
}
</script> -->

<style lang="stylus" scoped>
.actions
  margin-bottom 32px
</style>
