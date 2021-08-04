import { array, object, string } from 'yup';

export const resourceSchema = object({
	category: string().required(),
	title: string().required().max(30),
	subtitle: string().required(),
	subtitle1: string(),
	subtitle2: string(),
	files: array(
		object({
			url: string().url().required()
		})
	),
	description: string().required()
});
