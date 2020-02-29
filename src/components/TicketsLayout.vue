<template>
  <main class="tickets-layout">
    <h1>您的问题</h1>

    <!-- <Tickets /> -->

    <div class="actions">
      <router-link v-if="$route.name !== 'tickets'"
                   tag="button"
                   class="secondary"
                   :to="{name: 'tickets'}">查看全部</router-link>
      <router-link v-if="$route.name !== 'new-ticket'"
                   tag="button"
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
