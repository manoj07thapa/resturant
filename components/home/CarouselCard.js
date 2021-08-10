import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { addToFavourite } from '../../utils/addToFavourite';
import Favourite from '../../components/icons/Favourite';
import DiscountPrice from '../../components/product/DiscountPrice';

export default function CarouselCard({ product, mutate }) {
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

						<div className="p-6 ">
							<div>
								<div className="flex items-baseline  justify-between">
									<span className="text-gray-700  text-xs tracking-wide ml-2S">
										{product.category}
									</span>

									<span className="inline-block bg-green-200 px-2 text-green-800 rounded-full text-xs uppercase font-semibold tracking-wide">
										New
									</span>
								</div>

								<h4 className="font-semibold text-lg leading-tight truncate">{product.title}</h4>
							</div>
							<div className="mt-1 flex justify-between items-baseline">
								<DiscountPrice price={product.price} discount={product.discount} />
								{product.discount > 0 && (
									<span className="text-gray-500 text-xs line-through">Rs.{product.price}/plate</span>
								)}
							</div>
							<div className="mt-2 flex items-center">
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
								</span>

								<span className="text-gray-500 text-xs">(34 reviews)</span>
							</div>
						</div>
					</a>
				</Link>
			</div>
			<div className="absolute top-0 ml-2 mt-9 ">
				<button type="submit" onClick={() => addToFavourite(product)}>
					<Favourite />
				</button>
			</div>
		</Fragment>
	);
}
