import { getAsString } from './getAsString';

export function getValueString(value) {
	const str = getAsString(value);
	return !str || str.toLowerCase() === 'all' ? null : str;
}
