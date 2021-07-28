import React, { Fragment, useState, useEffect } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetCart } from '../dbQuery/getCart';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { DotLoader } from 'react-spinners';
import CartPaymentDetail from '../components/cart/CartPaymentDetail';
import CartQuantity from '../components/cart/CartQuantity';
import CalcTotal from '../components/cart/CalcTotal';

export default withPageAuthRequired(function Cart() {
	const { cart, isLoading, isError, mutate } = GetCart();
	if (isError) return <h1>Opps!! No products</h1>;

	if (isLoading)
		return (
			<div className="flex items-center justify-center">
				<DotLoader color="#2a9d8f" />
			</div>
		);

	var checkedCart = cart.cartProducts.filter(function(x) {
		return x.isChecked % 2 === 0;
	});

	const handleCheckBox = async (checkedItem) => {
		try {
			const res = await axios.put(`/api/cart/checkedCartItems`, {
				checkedItem
			});

			mutate();
		} catch (error) {
			console.log(error);
		}
	};

	const deleteCart = async (pId) => {
		try {
			const res = await axios.delete('/api/cart', {
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
		<Fragment>
			<Head>
				<title>Your Cart</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="px-3 mt-5 md:px-24 grid grid-cols-1 lg:grid-cols-6 gap-y-9 lg:gap-x-9 ">
				<div className="lg:col-span-4 lg:col-start-1 ">
					<div className=" bg-gray-100 ">
						<div className="md:flex md:justify-between px-4 py-6">
							<h4 className="text-lg font-bold uppercase tracking-wide">My cart</h4>
							<p className=" text-xs text-gray-700">
								<span className="text-red-700 font-bold">*</span>please select the dishes you want to
								purchase
							</p>
						</div>
					</div>
					<div className="mt-3 bg-gray-100 px-4 py-4">
						{cart.cartProducts.map((item) => (
							<div
								key={item.product._id}
								className="  sm:flex  sm:space-x-5  pt-5 pb-4 border-b border-gray-300 "
							>
								<div className="sm:flex sm:items-center  ">
									<input
										type="checkbox"
										checked={item.isChecked % 2 === 0 ? true : false}
										onChange={() => {
											handleCheckBox(item);
										}}
										className="hidden sm:block  sm:mr-7"
									/>

									<div className="block sm:hidden">
										<Image
											src={item.product.files[0].url}
											alt="product image"
											width={500}
											height={200}
											objectFit="cover"
											quality={30}
											className="rounded-md shadow flex-shrink-0  "
										/>
									</div>
									<div className="hidden sm:block">
										<Image
											src={item.product.files[0].url}
											alt="product image"
											width={100}
											height={120}
											objectFit="cover"
											quality={30}
											className="rounded-md shadow flex-shrink-0  "
										/>
									</div>
								</div>

								<div className="flex justify-between flex-1">
									<div className="">
										<h4 className="text-lg font-semibold">Rs.{item.product.price}</h4>
										<h5 className="text-medium font-medium text-gray-700">{item.product.title}</h5>

										<p className="text-xs text-gray-700  py-1 font-medium">discount(10%)</p>
										<div className="mt-1 sm:flex sm:justify-between">
											<button
												className="pt-1 flex items-center "
												type="submit"
												onClick={() => addToFavourite(product)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 text-gray-400 hover:text-gray-700 active:text-red-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-500 active:bg-red-600 hover:-translate-y-0.5 transform transition"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="text-xs hover:text-gray-600 pb-0.5 pl-1">
													save for later
												</span>
											</button>
											<span className="text-gray-400  mt-4 ml-3 hidden sm:block">|</span>
											<div className=" sm:px-3 sm:pb-3 mt-1">
												<CartQuantity
													qty={item.quantity}
													productId={item.product._id}
													mutate={mutate}
												/>
											</div>
										</div>
									</div>

									<div className="flex flex-col items-center space-y-9 sm:space-y-0 ">
										<input
											type="checkbox"
											checked={item.isChecked % 2 === 0 ? true : false}
											onChange={() => {
												handleCheckBox(item);
											}}
											className="sm:hidden mt-2 "
										/>
										<button
											onClick={() => {
												deleteCart(item.product._id);
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
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
							</div>
						))}
					</div>
					<div className="mt-5 px-4 py-6 bg-gray-100 lg:flex justify-between hidden ">
						<h4 className="text-lg font-semibold uppercase tracking-wide">Sub-total</h4>
						<CalcTotal checkedCart={checkedCart} />
					</div>
				</div>
				<div className="lg:col-span-2  bg-gray-100 h-96 px-4 py-6 ">
					<CartPaymentDetail checkedCart={checkedCart} />
				</div>
			</div>
		</Fragment>
	);
});
