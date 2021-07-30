import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

export default function CarouselCard({ product }) {
	const addToFavourite = async (product) => {
		try {
			const res = await axios.put(`/api/favourite`, product);
			alert(res.data.message);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Fragment>
			<div className="bg-white rounded-md overflow-hidden shadow-md relative">
				<Link href={`/${product.category}/${product.title}/${product._id}`}>
					<a>
						<Image
							src={product.files[0].url}
							height={10}
							width={25}
							alt="product image"
							objectFit="cover"
							layout="responsive"
							objectPosition="center center"
						/>

						<div className="p-6">
							<div>
								<div className="flex items-baseline space-x-2">
									<h6 className="text-gray-500 text-xs  ">
										Category:
										<span className="text-gray-700 uppercase font-semibold tracking-wide">
											{product.category}
										</span>
									</h6>
									<span className="inline-block bg-green-200 px-2 text-green-800 rounded-full text-xs uppercase font-semibold tracking-wide">
										New
									</span>
								</div>

								<h4 className="font-semibold text-lg leading-tight truncate">{product.title}</h4>
							</div>
							<div className="mt-1">
								Rs. {product.price} <span className="text-gray-500 text-sm">/plate</span>
							</div>
							{/* <div className="mt-4">
							<span className="text-green-700 flex ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</span>{' '}
							<span className="text-gray-500 text-sm">(based on 34 reviews)</span>{' '}
						</div> */}
						</div>
					</a>
				</Link>
			</div>
			<div className="absolute top-0 ml-2 mt-9">
				<button type="submit" onClick={() => addToFavourite(product)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-400 hover:text-gray-700 active:text-red-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-500 active:bg-red-600 hover:-translate-y-0.5 transform transition"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</Fragment>
	);
}
