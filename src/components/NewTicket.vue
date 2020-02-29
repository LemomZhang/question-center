<template>
  <div class="new-ticket">
    <h1>发表问题</h1>
    <SmartForm title="新的问题"
               :operation="operation"
               :valid="valid">
      <FormInput name="title"
                 v-model="title"
                 placeholder="短标题 (不超过100个字符)"
                 maxlength="100"
                 required />

      <FormInput type="textarea"
                 name="description"
                 v-model="description"
                 placeholder="详细记录你的问题"
                 required
                 rows="4" />

      <template slot="actions">
        <router-link tag="button"
                     :to="{name: 'tickets'}"
                     class="secondary">
          返回
        </router-link>
        <button type="submit"
                :disabled="!valid">
          发表问题
        </button>
      </template>
    </SmartForm>
  </div>
</template>

<!--<script>
export default {
  data () {
    return {
      title: '',
      description:'',
    }
  },
}
</script>-->

<script>
import PersistantData from '../mixins/PersistantData';

export default {
  mixins: [PersistantData('NewTicket', ['title', 'description'])],

  data() {
    return {
      title: '',
      description: ''
    };
  },

  computed: {
    valid() {
      return !!this.title && !!this.description;
    }
  },

  methods: {
    async operation() {
      const result = await this.$fetch('tickets/new', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          description: this.description
        })
      });
      this.title = this.description = '';
      this.$router.push({ name: 'ticket', params: { id: result._id } });
    }
  }
};
</script>
