import { getValueString } from './getValueString';

export function getValueNumber(value) {
	const str = getValueString(value);
	const number = parseInt(str);
	return isNaN(number) ? null : number;
}
