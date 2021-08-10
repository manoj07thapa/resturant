import { useState, useEffect } from 'react';

export default function CalcTotal({ checkedCart }) {
	const [ subTotal, setSubTotal ] = useState(0);

	const calcTotal = (checkedCart) => {
		let subTotal = 0;
		checkedCart.map((p) => {
			subTotal += Math.ceil(
				p.product.price * p.quantity - p.product.discount / 100 * (p.product.price * p.quantity)
			);
		});
		setSubTotal(subTotal);
	};
	useEffect(
		() => {
			calcTotal(checkedCart);
		},
		[ checkedCart ]
	);
	return <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Rs.{subTotal}</div>;
}
