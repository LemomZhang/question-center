<template>
  <main class="login">
    <h1>请登录</h1>
    <SmartForm class="form"
               :title="title"
               :operation="operation"
               :valid="valid">
      <!-- TODO -->
      <FormInput name="username"
                 v-model="username"
                 placeholder="用户名" />
      <FormInput name="password"
                 type="password"
                 v-model="password"
                 placeholder="密码" />
      <template v-if="mode ==='signup'">
        <FormInput name="verify-password"
                   type="password"
                   v-model="password2"
                   placeholder="再次输入密码"
                   :invalid="retypePasswordError" />
        <FormInput name="email"
                   type="email"
                   v-model="email"
                   placeholder="邮箱" />
      </template>

      <template slot="actions">
        <template v-if="mode ==='login'">
          <button type="button"
                  class="secondary"
                  @click="mode ='signup'">
            注册
          </button>
          <button type="submit"
                  :disabled="!valid">
            登录
          </button>
        </template>
        <template v-else-if="mode ==='signup'">
          <button type="button"
                  class="secondary"
                  @click="mode ='login'">
            去登录
          </button>
          <button type="submit"
                  :disabled="!valid">
            注册
          </button>
        </template>
      </template>
    </SmartForm>

  </main>
</template>

<script>
export default {
  data() {
    return {
      mode: 'login',
      username: '',
      password: '',
      password2: '',
      email: ''
    };
  },
  computed: {
    title() {
      return this.mode == 'login' ? '登录' : '创建新用户';
    },
    retypePasswordError() {
      return this.password2 && this.password !== this.password2;
    },
    signupValid() {
      return this.password2 && this.email && !this.retypePasswordError;
    },
    valid() {
      return (
        this.username &&
        this.password &&
        (this.mode !== 'signup' || this.signupValid)
      );
    }
  },
  methods: {
    async operation() {
      await this[this.mode]();
    },
    async login() {
      this.$state.user = await this.$fetch('login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });
      this.$router.replace(
        this.$route.params.wantedRoute || { name: 'tickets' }
      );
    },
    async signup() {
      await this.$fetch('signup', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email
        })
      });
      this.mode = 'login';
    }
  }
};
</script>
<style lang="stylus" scoped>
.form
  >>> .content
    max-width 400px
</style>