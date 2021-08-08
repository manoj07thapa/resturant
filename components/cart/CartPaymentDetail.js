import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetShipInfo } from '../../dbQuery/getShipInfo';
import { DotLoader } from 'react-spinners';
import CalcTotal from './CalcTotal';

export default function CartPaymentDetail({ checkedCart }) {
	const router = useRouter();
	const { shipInfo, loading, error } = GetShipInfo();

	if (error) return <h1>Opps!! no ShipInfo</h1>;

	if (loading)
		return (
			<div className="flex justify-center mt-72">
				<DotLoader color="#2a9d8f" />
			</div>
		);
	return (
		<div className="lg:fixed bg-gray-100 h-80 xl:h-96 px-4 py-6 lg:w-80 xl:w-96 ">
			<h4 className="text-lg font-bold uppercase tracking-wide pb-4">Total</h4>
			<div className="flex justify-between pt-3 pb-2 border-t border-gray-200">
				<h5 className="text-lg font-medium text-gray-600">Sub-total</h5>
				<CalcTotal checkedCart={checkedCart} />
			</div>
			<div className="flex justify-between items-center">
				<h5 className="text-lg font-medium text-gray-600">Delivery fee</h5>
				<span className="px-3 text-center bg-purple-400 text-purple-900 text-xs rounded-full shadow">free</span>
			</div>
			<button
				onClick={() => {
					shipInfo.shipInfo === null ? router.push('/shippingInfo') : router.push('/checkout');
				}}
				disabled={checkedCart.length === 0}
				className={`${checkedCart.length === 0
					? 'px-4 py-2 mt-7  bg-gray-400  rounded-md shadow text-white text-center w-full uppercase tracking-wide text-medium focus:outline-none'
					: 'px-4 py-2 mt-7 bg-green-900 hover:bg-green-700 rounded-md shadow text-white text-center w-full uppercase tracking-wide text-medium focus:outline-none'}`}
			>
				Proceed to payment
			</button>
			<div className="mt-5 border-t border-gray-200 pt-2">
				<h5 className="text-xs text-gray-400  tracking-wide">we accept:</h5>
				<div className="inline-flex space-x-4 mt-1">
					<span className="bg-purple-500 px-2 py-1 text-white  rounded-md shadow text-xs">khalti</span>
					<span className="bg-green-500 px-2 py-1 text-white rounded-md shadow text-xs">e-sewa</span>
					<span className="bg-gray-500 px-2 py-1 text-white rounded-md shadow text-xs">cash on delivery</span>
				</div>
				<p className="text-gray-400 text-xs mt-4">Got a discount code? Add it in the next step.</p>
			</div>
		</div>
	);
}
