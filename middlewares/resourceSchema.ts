import { array, object, string, TypeOf } from 'yup';

export const resourceSchema = object({
	category: string().required(),
	title: string().required().min(9),
	subtitle: string().required(),
	subtitle1: string().required(),
	subtitle2: string().required(),
	files: array(
		object({
			url: string().url().required()
		})
	),
	description: string().required()
});

export type resource = TypeOf<typeof resourceSchema>;
