import { array, object, string, number, boolean } from 'yup';

export const productSchema = object({
	category: string().required(),
	title: string().required().max(30),
	subtitle: string().required().max(30),
	ingredients: array().of(string().max(20)),
	format: array(),
	discount: number(),
	price: number().required().min(1),
	description: string().required().max(300),
	criteria: array(),
	files: array(
		object({
			url: string().required()
		})
	)
});
