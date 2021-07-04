import Image from 'next/image';
import Link from 'next/link';
export default function ProductCard({ product }) {
	return (
		<div className="mt-8 ml-8 px-8 grid lg:grid-cols-3 gap-7">
			<Link href={`/${product.category}/${product.title}/${product._id}`}>
				<a>
					<div className="card" key={product._id}>
						<Image
							src={product.files[0].url}
							alt=""
							className="w-full h-32 sm:h-48 object-cover"
							height={200}
							width={400}
						/>
						<div className="m-4">
							<span className="font-bold ">{product.title}</span>
							<span className="block text-gray-500 text-sm">{product.category}</span>
						</div>
						<div className="badge">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 inline-block"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span className="pl-1 pt-2">Rs. {product.price}</span>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}
