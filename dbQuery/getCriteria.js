import Product from '../models/Product';

export async function getCriteria() {
	const criteria = await Product.aggregate([
		{ $unwind: '$criteria' },
		{
			$group: {
				_id: '$criteria',
				count: { $sum: 1 }
			}
		}
	]);
	return criteria;
}
