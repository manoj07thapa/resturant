import React from 'react';
import Head from 'next/head';
import { GetFavourites } from '../dbQuery/getFavourites';
import { DotLoader } from 'react-spinners';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Footer from '../components/footer/Footer';
import CarouselCard from '../components/home/CarouselCard';

export default withPageAuthRequired(function Favourites() {
	const { favourite, isFavLoading, isFavError, mutate } = GetFavourites();
	console.log(favourite);

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
				{favourite.favProducts.map((fav) => <CarouselCard product={fav.product} key={fav._id} />)}
			</div>
			<Footer />
		</div>
	);
});
