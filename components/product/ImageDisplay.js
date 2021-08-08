import React from 'react';
import Image from 'next/image';
import { addToFavourite } from '../../utils/addToFavourite';
import Favourite from '../icons/Favourite';
import DiscountPrice from './DiscountPrice';
export default function ImageDisplay({ product }) {
	return (
		<div className="md:col-span-2">
			<div className="flex justify-between">
				<div>
					<h3 className="text-lg font-bold tracking-wide">{product.title}</h3>
					<p className="flex items-center space-x-1 text-green-700">
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
						<span className="text-xs text-gray-500">(150 reviews)</span>
					</p>
				</div>
				<div>
					{product.discount === 0 ? (
						<div className="text-medium font-lg text-gray-700 ">
							Rs. {product.price} <span className="text-xs text-gray-500 mb-0.5 ">/plate</span>
						</div>
					) : (
						<div className="">
							<DiscountPrice price={product.price} discount={product.discount} />
							<div className="text-sm text-gray-400  line-through">Rs.{product.price}</div>
						</div>
					)}
				</div>
			</div>
			<div className="mt-5 relative">
				<Image
					src={product.files[0].url}
					alt="product image"
					width={10}
					height={7}
					objectFit="cover"
					layout="responsive"
					quality={30}
					className="rounded-md shadow  "
				/>

				<div className="absolute top-0 left-0 bg-gray-100 rounded-full px-2 py-1 ml-1 mt-1 text-center shadow">
					<button className="pt-1 focus:outline-none " type="submit" onClick={() => addToFavourite(product)}>
						<Favourite />
					</button>
				</div>
				<div className="absolute bottom-0 right-0 text-white mr-2 mb-2 bg-purple-600 text-xs px-2 py-1 rounded-full shadow">
					{product.criteria && <div>{product.criteria[0]}</div>}
				</div>
			</div>
		</div>
	);
}
