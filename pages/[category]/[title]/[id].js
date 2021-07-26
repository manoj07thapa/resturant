import React, { Fragment, useState } from 'react';
import Product from '../../../models/Product';
import dbConnect from '../../../utils/dbConnect';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { ProductModel } from '../../../interfaces/ProductModel';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DotLoader } from 'react-spinners';
import SlideoverCartPanel from '../../../components/cart/SlideoverCartPanel';
import { mutate } from 'swr';
import ImageDisplay from '../../../components/product/ImageDisplay';
import ProductInfo from '../../../components/product/ProductInfo';

export default function SingleProduct({ product }) {
	console.log(product);
	const { user, error, isLoading } = useUser();
	const [ quantity, setQuantity ] = useState(1);
	const [ cartItems, setCartItems ] = useState([]);
	const router = useRouter();

	const values = {
		quantity,
		product
	};

	const addToCart = async () => {
		try {
			const res = await axios.put(`/api/cart`, values);
			setCartItems(res.data.newCart.products);
		} catch (error) {
			console.log(error);
		}
	};

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
			<div className="px-3 mt-9 md:px-12 grid grid-cols-1  lg:grid-cols-3 gap-y-5 lg:gap-x-9 ">
				<ImageDisplay images={product.files} />
				<ProductInfo product={product} />
			</div>
			<select defaultValue={1} onChange={(e) => setQuantity(parseInt(e.target.value))}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
			</select>
			<div>
				{user ? (
					<SlideoverCartPanel addToCart={addToCart} cartItems={cartItems} />
				) : (
					<button className="px-2 py-3 bg-yellow-500">
						<Link href="/api/auth/login">
							<a>Login</a>
						</Link>
					</button>
				)}
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
	const resPromise = Product.find({ category, title }).limit(10);

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
