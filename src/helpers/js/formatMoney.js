export class FormatMoney {
	static real (num) {
		if (!num || /[a-z]/i.test(num)) {
			return '';
		}

		let int = parseInt(num.toFixed(2).toString().replace(/[^\d]+/g, ''), 0);
		let tmp = int + '';
		tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
		if (tmp.length > 6) {
			tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
		}
		return tmp;
	}
}