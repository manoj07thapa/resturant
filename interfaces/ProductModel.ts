export interface ProductModel {
	_id: string;
	title: string;
	category: string;
	price: string;
	description: string;
	files?: string[];
	rating?: number;
	message?: string;
}
