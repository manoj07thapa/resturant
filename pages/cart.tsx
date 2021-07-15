import React, { Fragment } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetCart } from '../dbQuery/getCart';
import Head from 'next/head';
import Image from 'next/image'
import axios from 'axios';
import { DotLoader } from "react-spinners";
import CartPaymentDetail from '../components/cart/CartPaymentDetail'
import CartQuantity from '../components/cart/CartQuantity'


export default withPageAuthRequired(function Cart() {


	const { cart, isLoading, isError, mutate } = GetCart();

	if (isError) return <h1>Opps!! No products</h1>;

	if (isLoading) return <div className="flex"><DotLoader /></div>;


	var checkedCart = cart.cartProducts.filter(function (x: any) {
		return x.isChecked % 2 === 0;
	});

	const handleCheckBox = async (checkedItem: any) => {
		try {

			const res = await axios.put(`/api/cart/checkedCartItems`, {
				checkedItem

			});

			mutate();
		} catch (error) {
			console.log(error);
		}
	};

	const deleteCart = async (pId: string) => {
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
			<div className="flex items-center justify-between">
				<div>
					{cart?.cartProducts.map((item: any) => (
						<div key={item.product._id}>
							<div className="ml-7 mb-7 flex items-center space-x-7">
								<input type="checkbox" checked={item.isChecked % 2 === 0 ? true : false}
									onChange={() => {
										handleCheckBox(item);
									}} className="mr-7" />
								<Image src={item.product.files[0].url} alt="" width={30} height={30} />
								<p>{item.product.title}</p>
								<p>Rs: {item.product.price}</p>
								<div className="ml-7">
									<CartQuantity qty={item.quantity} productId={item.product._id} mutate={mutate} />
								</div>
								<button onClick={() => {
									deleteCart(item.product._id);
								}}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg></button>
							</div>
						</div>
					))}
				</div>
				<div>
					<CartPaymentDetail checkedCart={checkedCart} />
				</div>
			</div>
		</Fragment>
	);
});
