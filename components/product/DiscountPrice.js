export default function DiscountPrice({ price, discount }) {
	const discountPrice = discount / 100 * price;
	const finalPrice = Math.ceil(price - discountPrice);
	return (
		<div className="text-medium font-semibold text-gray-600">
			Rs. {finalPrice}
			<span className="text-xs text-gray-500 mb-0.5 ">/plate</span>
		</div>
	);
}
