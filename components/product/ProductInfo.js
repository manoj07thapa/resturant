import { useState, Fragment } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import SlideoverCartPanel from '../cart/SlideoverCartPanel';
import Ingredients from './Ingredients';

export default function ProductInfo({ product }) {
	const { user, error, isLoading } = useUser();
	const [ quantity, setQuantity ] = useState(1);
	const [ cartItems, setCartItems ] = useState([]);

	const values = {
		quantity,
		product
	};

	const addToCart = async () => {
		try {
			const res = await axios.put(`/api/cart`, values);
			setCartItems(res.data.newCart.products);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Fragment>
			<div className="md:col-span-1 mt-5 md:mt-20">
				<div className="flex justify-between">
					<h4 className="text-lg font-medium text-gray-800">
						Dietry <span className="text-sm font-lg text-gray-700 lowercase">(Non-vegeterian)</span>
					</h4>
					<p className="text-xs  px-1 py-1 rounded-full shadow bg-purple-500 text-white">chefs special</p>
				</div>
				<div className="mt-3">
					<p className="text-sm text-gray-500 mb-1">Choose up to 7</p>
					<select
						defaultValue={1}
						onChange={(e) => setQuantity(parseInt(e.target.value))}
						className="w-full rounded-md focus:outline-none"
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
						<option value={7}>7</option>
					</select>
				</div>
				<div className="mt-3">
					{user ? (
						<SlideoverCartPanel addToCart={addToCart} cartItems={cartItems} />
					) : (
						<button className="uppercase px-2 py-3 bg-gray-900 hover:bg-gray-700 text-white rounded-md shadow w-full text-lg">
							<Link href="/api/auth/login">
								<a>Login to purchase</a>
							</Link>
						</button>
					)}
				</div>
				<div className="mt-3 pb-2">
					<p className="text-xs text-gray-500">*The mexican tacos comes with a special sauce</p>
				</div>
				<div className="mt-3 border-t border-gray-200 py-3">
					<Ingredients description={product.description} />
				</div>
				<div className="mt-3 border-t border-gray-200 py-3 flex justify-between">
					<h5 className="text-medium font-medium px-2">
						Cousine <span className="text-gray-700 text-sm lowercase">({product.category})</span>
					</h5>
					<h6 className="text-medium font-medium px-2">
						Discount <span className="text-gray-700 text-sm lowercase">(none)</span>
					</h6>
				</div>
			</div>
		</Fragment>
	);
}
