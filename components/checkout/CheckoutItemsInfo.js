import router from 'next/router';
import React from 'react';
import Image from 'next/image';
import CalcTotal from '../cart/CalcTotal';
import AnimateLoading from '../icons/AnimateLoading';
import DiscountPrice from '../product/DiscountPrice';

export default function CheckoutItemsInfo({ checkedCart }) {
	return (
		<div className="py-5 px-4 ">
			<div className="flex justify-between">
				<h3 className="text-lg font-bold uppercase tracking-wider text-gray-700">{checkedCart.length} Items</h3>
				<button
					onClick={() => router.push('/cart')}
					className="px-3 bg-gray-200 uppercase rounded-md shadow text-gray-500 text-xs"
				>
					edit
				</button>
			</div>
			<div className=" mt-4 bg-gray-50 px-3 pb-2 h-96 overflow-y-auto ">
				<div className="   ">
					{checkedCart.length !== 0 ? (
						checkedCart.map((cItem) => (
							<div className=" border-b border-gray-200 py-5" key={cItem._id}>
								<Image
									src={cItem.product.files[0].url}
									alt="product image"
									width={500}
									height={200}
									objectFit="cover"
									quality={30}
									className="rounded-md shadow flex-shrink-0  "
								/>
								<div className="flex justify-between">
									<DiscountPrice price={cItem.product.price} discount={cItem.product.discount} />
									<p className="text-sm font-semibold text-gray-600">Quantity: {cItem.quantity}</p>
								</div>
								<p className="text-sm  text-gray-500  ">{cItem.product.title}</p>
							</div>
						))
					) : (
						<AnimateLoading />
					)}
				</div>
			</div>
			<div className=" border-t border-gray-200 ">
				<div className="flex justify-between pt-4">
					<h6 className="text-medium  text-gray-600  ">Sub-total</h6>
					<CalcTotal checkedCart={checkedCart} />
				</div>
				<div className="flex justify-between items-center mt-1 ">
					<h6 className="text-medium  text-gray-600  ">Delivery</h6>
					<p className="text-xs bg-green-200 text-green-700 px-3 rounded-full shadow">free</p>
				</div>
				<div className="flex justify-between items-center mt-3 pb-1 ">
					<h6 className="text-lg font-bold uppercase tracking-widest  text-gray-800  ">Total to pay</h6>
					<CalcTotal checkedCart={checkedCart} />
				</div>
			</div>
		</div>
	);
}
