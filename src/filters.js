import moment from 'moment';

export function date(value) {
	return moment(value).format('YYYY年MM月DD日');
}
