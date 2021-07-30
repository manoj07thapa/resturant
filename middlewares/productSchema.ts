import { array, object, string, number, TypeOf } from 'yup';

export const productSchema = object({
	category: string().required(),
	title: string().required(),
	price: number().required(),
	description: string().required(),
	files: array(
		object({
			url: string().required().url()
		})
	)
});

export type product = TypeOf<typeof productSchema>;
