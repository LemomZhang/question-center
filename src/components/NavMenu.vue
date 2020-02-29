<template>
  <nav class="menu">
    <router-link :to="{ name: 'home' }"
                 exact>首页</router-link>
    <router-link :to="{ name: 'faq' }">帮助</router-link>
    <router-link :to="{ name: 'tickets' }">问题中心</router-link>
    <div class="spacer"></div>

    <template v-if="$state.user">
      <a>{{ $state.user.username }}</a>
      <a @click="logout">退出</a>
    </template>
    <router-link v-else
                 :to="{name: 'login'}">登录</router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      const result = await this.$fetch('logout');
      if (result.status === 'ok') {
        this.$state.user = null;
        // Return to home if page is private
        if (this.$route.matched.some(m => m.meta.private)) {
          this.$router.push({ name: 'home' });
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/style/imports'
.router-link-active
  border-bottom-color $primary-color
</style>
