import Product from '../models/Product';
import { getAsString } from '../utils/getAsString';

export async function getPaginatedProducts(query) {
	const category = query.category;
	console.log('QUERY', query);
	const price = getValueNumber(query.value);
	const format = getValueStr(query.format);
	const criteria = getValueStr(query.criteria);

	const search = getAsString(query.search);

	const page = getValueNumber(query.page) || 1;
	const productsPerPage = getValueNumber(query.productsPerPage) || 30; //products perpage
	const skip = (page - 1) * productsPerPage;
	let params = {};

	if (search) {
		params = { $text: { $search: search } };
	}
	if (category) {
		params = { category: { $in: category } };
	}
	if (format) {
		params = { format };
	}
	if (criteria) {
		params = { criteria };
	}
	// if (price) {
	// 	params = { price: { $lte: price } };
	// }
	// if (category && format) {
	// 	params = { category: { $in: category }, format };
	// }

	const productsPromise = Product.find(params).limit(productsPerPage).skip(skip);
	const totalProductsPromise = Product.find({}).countDocuments();
	const [ products, totalProducts ] = await Promise.all([ productsPromise, totalProductsPromise ]);

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	return { products, totalPages };
}

export function getValueNumber(value) {
	const str = getValueStr(value);
	const number = parseInt(str);
	return isNaN(number) ? null : number;
}

function getValueStr(value) {
	const str = getAsString(value);
	return !str || str.toLowerCase() === 'all' ? null : str;
}
