export default {
	install(Vue, state) {
		Object.defineProperty(Vue.prototype, '$state', {
			get() {
				return state;
			}
		});
	}
};
