import Image from 'next/image';
import AnimateLoading from '../icons/AnimateLoading';
export default function CartDetail({ cartItems }) {
	return (
		<div className="pt-2">
			{cartItems.length === 0 ? (
				<AnimateLoading />
			) : (
				cartItems.map((item) => (
					<div key={item.product._id} className=" py-5 border-b border-gray-400 ">
						<Image
							src={item.product.files[0].url}
							alt="product image"
							width={10}
							height={5}
							objectFit="cover"
							layout="responsive"
							quality={30}
							className="rounded-md shadow"
						/>
						<div className="py-3 flex justify-between">
							<div>
								<p className="text-medium font-medium text-gray-700 truncate">{item.product.title}</p>
								<p className="text-sm  text-gray-500 ">Rs: {item.product.price}</p>
								<p className="text-sm  text-gray-500">Quantity : {item.quantity}</p>
							</div>
							<div>
								<p className="inline-block bg-green-200 px-2 py-1 text-green-700 rounded-full text-xs uppercase font-semibold tracking-wide">
									Free shipping
								</p>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);
}
