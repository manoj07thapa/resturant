import { object, string, number, TypeOf } from 'yup';

export const shipInfoSchema = object({
	fullname: string(),
	email: string().email(),
	zone: string().required(),
	phone: number().required(),
	district: string().required(),
	city: string(),
	area: string(),
	address: string()
});

export type shipInfo = TypeOf<typeof shipInfoSchema>;
