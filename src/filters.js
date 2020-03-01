import moment from 'moment';

export function date(value) {
	moment.locale('zh-cn');
	return moment(value)
		.startOf('hour')
		.fromNow();
}
