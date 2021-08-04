import React from 'react';
import Head from 'next/head';
import { GetFavourites } from '../dbQuery/getFavourites';
import { DotLoader } from 'react-spinners';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Footer from '../components/footer/Footer';
import CarouselCard from '../components/home/CarouselCard';
import axios from 'axios';

export default withPageAuthRequired(function Favourites() {
	const { favourite, isFavLoading, isFavError, mutate } = GetFavourites();

	if (isFavError) {
		return (
			<div>
				<h1>There are No favourites</h1>
			</div>
		);
	}
	if (isFavLoading) {
		return (
			<div className="flex items-center justify-center">
				<DotLoader color="#2a9d8f" />
			</div>
		);
	}

	const moveToCart = async (product) => {
		try {
			const res = await axios.put(`/api/cart`, { quantity: 1, product });
			if (res.data.success === true) {
				handleDelete(product._id);
			}
			mutate();
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (pId) => {
		try {
			await axios.delete('/api/favourite', {
				data: {
					productId: pId
				}
			});
			mutate();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Head>
				<title>Your Favourites</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-pink-300 text-white text-xs">
				<h5 className="max-w-lg md:max-w-md mx-auto py-3 text-center">
					Favourites are the dishes you saved for later use.
				</h5>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-20 mt-6 px-12">
				{favourite.favProducts.map((fav) => (
					<div key={fav._id}>
						<CarouselCard product={fav.product} mutate={mutate} />
						<div className="flex justify-between mt-7 px-2">
							<button
								className=" focus:outline-none bg-gray-100 hover:bg-gray-700 px-3 py-1 text-gray-700 hover:text-white rounded border-2 border-gray-900 w-2/3 mr-4"
								type="submit"
								onClick={() => moveToCart(fav.product)}
							>
								Move to cart
							</button>
							<button
								className="bg-gray-100 rounded-full px-2 hover:bg-gray-300 focus:outline-none"
								type="submit"
								onClick={() => handleDelete(fav.product._id)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 fill-current text-gray-400 hover:text-gray-600 focus:outline-none"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
});
