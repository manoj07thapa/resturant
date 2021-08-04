import { object, string } from 'yup';

export const prodCatSchema = object({
	productCategory: string().required().max(20)
});
