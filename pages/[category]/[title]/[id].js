import React, { Fragment } from 'react';
import Product from '../../../models/Product';
import dbConnect from '../../../utils/dbConnect';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DotLoader } from 'react-spinners';
import ImageDisplay from '../../../components/product/ImageDisplay';
import ProductInfo from '../../../components/product/ProductInfo';
import Speciality from '../../../components/home/Speciality';

export default function SingleProduct({ product, suggested }) {
	console.log(suggested);

	const router = useRouter();

	if (!product) {
		return <p>Product doesnot exist</p>;
	}

	if (router.isFallback) {
		<div className="flex">
			<DotLoader />
		</div>;
	}

	return (
		<Fragment>
			<Head>
				<title>
					{product.category} | {product.title}
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="px-3 mt-5 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-x-9 ">
				<ImageDisplay product={product} />
				<ProductInfo product={product} />
			</div>
			<div className="mt-32  px-3 md:px-12">
				<h3 className=" pt-6  text-md font-bold  uppercase">You might also like</h3>

				<Speciality products={suggested} />
			</div>
		</Fragment>
	);
}

export const getStaticProps = async (ctx) => {
	await dbConnect();
	const id = ctx.params.id;
	const category = ctx.params.category;
	const title = ctx.params.title;

	const productPromise = Product.findById(id).lean();

	//querying for similar products suggestion in individual product page
	const resPromise = Product.find({ category }).limit(10);

	try {
		const [ product, res ] = await Promise.all([ productPromise, resPromise ]);
		product._id = product._id.toString();
		const suggestedProducts = JSON.parse(JSON.stringify(res));

		return {
			props: {
				product: product || null,
				suggested: suggestedProducts || null
			},
			revalidate: 3
		};
	} catch (error) {
		return { props: { err: 'No product' } };
	}
};

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
						category: p.category,
						title: p.title
					}
				};
			}) // params we get in ctx object in getStaticProps function, only ids sent via paths are statically served at buildtime
		};
	} catch (error) {
		console.log(error);
	}
};
