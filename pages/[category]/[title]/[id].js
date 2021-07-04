import React from 'react';
import Product from '../../../models/Product';
import dbConnect from '../../../utils/dbConnect';

export default function SingleProduct({ product }) {
	return <pre>{JSON.stringify({ product }, null, 4)}</pre>;
}

export async function getStaticProps(ctx) {
	await dbConnect();
	const id = ctx.params.id;
	const category = ctx.params.category;
	const title = ctx.params.title;

	const productPromise = Product.findById(id).lean();

	//querying for similar products suggestion in individual product page
	const resPromise = Product.find({ category, title }).limit(10);

	try {
		const [ product, res ] = await Promise.all([ productPromise, resPromise ]);
		product._id = product._id.toString();
		const suggestedProducts = JSON.parse(JSON.stringify(res));

		return { props: { product, suggestedProducts }, revalidate: 3 };
	} catch (error) {
		return { props: { err: 'No product' } };
	}
}

export const getStaticPaths = async () => {
	await dbConnect();
	try {
		const products = await Product.find({}).limit(5);

		return {
			fallback: true, //fallback set to false means we dont need this at runtime
			paths: products.map((p) => {
				return {
					params: {
						id: p._id.toString(),
						category: p.category.toString(),
						title: p.title.toString()
					}
				};
			}) // params we get in ctx object in getStaticProps function, only ids sent via paths are statically served at buildtime
		};
	} catch (error) {
		console.log(error);
	}
};
