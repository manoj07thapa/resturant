import Product from '../models/Product';
import { getValueNumber } from '../utils/getValueNumber';
import { getValueString } from '../utils/getValueString';

export async function getPaginatedProducts(query) {
	const category = getValueString(query.category);
	const search = getValueString(query.search);
	const title = getValueString(query.title);

	const page = getValueNumber(query.page) || 1;
	const productsPerPage = getValueNumber(query.productsPerPage) || 4; //products perpage
	const skip = (page - 1) * productsPerPage;
	let params = {};

	if (search) {
		params = { $text: { $search: search } };
	} else if (category && !title) {
		params = { category: { $all: category } };
	} else if (!category && title) {
		params = { title };
	} else if (category && title) {
		params = { category, title };
	} else if (!search && !category && !title) {
		params = {};
	}

	const productsPromise = Product.find(params).limit(productsPerPage).skip(skip);
	const totalProductsPromise = Product.find({}).countDocuments();
	const [ products, totalProducts ] = await Promise.all([ productsPromise, totalProductsPromise ]);

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	return { products, totalPages };
}
