<template>
  <main class="faq">
    <h1>这里查看基本问题</h1>
    <div class="error"
         v-if="hasRemoteErrors">{{remoteErrors.questionList}}</div>
    <Loading v-if="remoteDataBusy" />
    <section class="list">
      <article v-for="(question, index) in questionList"
               :key="index">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>
<script>
import RemoteData from '../mixins/RemoteData';
export default {
  mixins: [RemoteData({ questionList: 'questions' })]
};
</script>