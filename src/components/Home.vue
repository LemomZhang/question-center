<template>
  <main class="home">
    <h1>欢迎来到你问我答</h1>
    <p>
      点击 <router-link :to="{name: 'faq'}">这里</router-link> 可查看帮助，
      如果您没有找到您想要的答案，可<router-link :to="{name: 'tickets'}">发送任何问题</router-link>给我们！
    </p>
  </main>
</template>