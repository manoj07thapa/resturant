import { array, object, string, number, boolean } from 'yup';

export const productSchema = object({
	category: string().required(),
	title: string().required(),
	subtitle: string().required(),
	ingredients: array().of(string()),
	format: array(),
	chefSpecial: boolean(),
	discount: number(),
	price: number().required().min(1),
	description: string().required(),
	popular: boolean(),
	speciality: boolean(),
	files: array(
		object({
			url: string().required()
		})
	)
});
