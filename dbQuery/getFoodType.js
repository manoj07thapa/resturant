import Product from '../models/Product';

export async function getFoodType() {
	const foodType = await Product.aggregate([
		{ $unwind: '$format' },
		{
			$group: {
				_id: '$format',
				count: { $sum: 1 }
			}
		}
	]);
	return foodType;
}
