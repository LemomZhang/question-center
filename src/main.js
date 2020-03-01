import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Loading from './components/Loading.vue';
import VueFetch from './plugins/fetch';
import state from './state';
import VueState from './plugins/state';
import { $fetch } from './plugins/fetch';
import * as filters from './filters';
import './global-components';
Vue.use(VueFetch, {
	baseUrl: 'http://47.105.174.230:3000/'
});
Vue.use(VueState, state);
Vue.config.productionTip = false;
Vue.component('Loading', Loading);
for (const key in filters) {
	Vue.filter(key, filters[key]);
}
async function main() {
	try {
		state.user = await $fetch('user');
	} catch (e) {
		console.warn(e);
	}
	new Vue({
		router,
		data: state,
		store,
		render: h => h(App)
	}).$mount('#app');
}
main();
