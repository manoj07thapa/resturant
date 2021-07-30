import React, { Fragment } from 'react';
import EditShipInfoModel from '../components/shipping/EditShipInfoModel';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetCart } from '../dbQuery/getCart';
import { DotLoader } from 'react-spinners';
import Head from 'next/head';
import { GetShipInfo } from '../dbQuery/getShipInfo';
import Khalti from '../components/payment/Khalti';
import Footer from '../components/footer/Footer';
import Image from 'next/image';
import CheckoutIcon from '../public/iconmonstr-checkout-2.svg';
import CheckoutItemsInfo from '../components/checkout/CheckoutItemsInfo';

export default withPageAuthRequired(function Checkout() {
	const { cart, isLoading, isError } = GetCart();
	const { shipInfo, shipLoading, shipError, mutate } = GetShipInfo();
	if (isError || shipError) return <h1>Opps!! No products</h1>;

	if (isLoading || shipLoading)
		return (
			<div className="flex">
				<DotLoader />
			</div>
		);

	var checkedCart = cart.cartProducts.filter(function(x) {
		return x.isChecked % 2 === 0;
	});

	return (
		<Fragment>
			<Head>
				<title>Checkout</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className=" max-w-md md:max-w-xl lg:max-w-full mx-auto px-3 md:px-12 mt-24 lg:mt-28">
				<div className="flex space-x-9 justify-between border-b border-gray-200">
					<h2 className="text-2xl font-bold uppercase tracking-widest">Checkout</h2>
					<span>
						<Image src={CheckoutIcon} alt="checkout icon" />
					</span>
				</div>
				<div className="lg:grid lg:grid-cols-3 gap-9 mt-7">
					<div className="lg:col-span-2 ">
						<div className="lg:flex lg:justify-between bg-gray-100 py-5 px-4">
							<h3 className="text-lg font-bold uppercase tracking-wider text-gray-700">Delivery zone</h3>
							<h5 className="text-lg font-medium text-gray-500">{shipInfo.shipInfo.zone}</h5>
						</div>
						<div className="lg:flex lg:justify-between bg-gray-100 py-5 px-4 mt-3">
							<h3 className="text-medium font-bold uppercase tracking-wider text-gray-700">
								Promo/student code or vouchers
							</h3>
							<span className="text-lg font-medium text-gray-500">None</span>
						</div>
						<div className="lg:flex lg:justify-between bg-gray-100 py-5 px-4 mt-3">
							<h3 className="text-medium font-bold uppercase tracking-wider text-gray-700">
								Email address
							</h3>
							<span className="text-lg font-medium text-gray-500">{shipInfo.shipInfo.email}</span>
						</div>
						<div className=" bg-gray-100 py-5 px-4 mt-3 flex justify-between">
							<div>
								<h3 className="text-medium font-bold uppercase tracking-wider text-gray-700">
									Delivery address
								</h3>
								<div className="py-5 text-gray-500 space-y-2 text-sm font-semibold">
									<p className="">{shipInfo.shipInfo.fullname}</p>
									<p className="">{shipInfo.shipInfo.district}</p>
									<p className="">{shipInfo.shipInfo.city}</p>
									<p className="">{shipInfo.shipInfo.area}</p>
									<p className="">{shipInfo.shipInfo.address}</p>
									<p className="">{shipInfo.shipInfo.phone}</p>
								</div>
							</div>
							<div>
								<EditShipInfoModel shipInfo={shipInfo} mutate={mutate} />
							</div>
						</div>
						<div className=" bg-gray-100 py-5 px-4 mt-3 ">
							<h3 className="text-medium font-bold uppercase tracking-wider text-gray-700">
								Delivery options
							</h3>
							<p className="text-sm font-bold mt-3">
								Rs.100 <span className="text-medium text-gray-600 ml-2">On express delivery</span>
							</p>
							<p className="text-xs text-gray-400 ml-16 mt-3">
								Delivered on or before Thursday, 5 August, 2021
							</p>
							<div className="flex mt-3 ml-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-xs text-gray-400 "
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="text-xs text-gray-400 ml-2 ">
									No delivery on Public Holidays. All orders are subject to Customs and Duty charges,
									payable by the recipient of the order.
								</p>
							</div>
						</div>
					</div>
					<div className="bg-gray-100 mt-5 lg:mt-0 ">
						<CheckoutItemsInfo checkedCart={checkedCart} />
					</div>
				</div>
			</div>

			<Footer />
		</Fragment>
	);
});
