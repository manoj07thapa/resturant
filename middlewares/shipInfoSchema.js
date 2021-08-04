import { object, string, number } from 'yup';

export const shipInfoSchema = object({
	fullname: string().required().min(6).max(25),
	email: string().email(),
	zone: string().required(),
	phone: number().required().max(10),
	district: string().required(),
	city: string(),
	area: string().required(),
	address: string()
});
