export interface DishModel {
	_id: string;
	title: string;
	category: string;
	price: number;
	description: string;
	files?: string[];
	rating?: number;
	message?: string;
}
