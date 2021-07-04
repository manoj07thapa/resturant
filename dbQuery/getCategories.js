import Product from '../models/Product';

export async function getCategories() {
	const categories = await Product.aggregate([
		{
			$group: {
				_id: '$category',
				count: { $sum: 1 }
			}
		}
	]);
	return categories;
}
