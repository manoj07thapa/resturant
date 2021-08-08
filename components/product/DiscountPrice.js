import React from 'react';

export default function DiscountPrice({ price, discount }) {
	const discountPrice = discount / 100 * price;
	const finalPrice = price - discountPrice;
	console.log(finalPrice);
	return (
		<div className="text-medium font-lg text-gray-700">
			Rs. {finalPrice}
			<span className="text-xs text-gray-500 mb-0.5 ">/plate</span>
		</div>
	);
}
