import { Fragment } from 'react';
import Link from 'next/link';
import CarouselCard from './CarouselCard';
import Arrow from '../icons/Arrow';

export default function ChefSpecial1({ ChefSpecDishes }) {
	return (
		<Fragment>
			<div className="px-5 md:px-12  mt-12 sm:mt-16 lg:mt-32 max-w-md mx-auto sm:max-w-xl lg:max-w-full  ">
				<div className="mb-7 flex justify-between items-center">
					<h2 className="text-2xl font-bold textgray-700 tracking-wider">Chef Special</h2>
					<div className="flex items-center space-x-7">
						<Link
							href={{
								pathname: '/products',
								query: { criteria: 'Chef Special' }
							}}
						>
							<a className="border-b-4 border-purple-700 pb-1 text-lg font-medium text-gray-500 hover:text-gray-200 flex items-center space-x-3 hover:bg-gray-700 px-3 py-1 rounded-md transition duration-500 ease-in-out ">
								<span>see more</span> <Arrow />
							</a>
						</Link>
					</div>
				</div>
				<div className="lg:grid lg:grid-cols-4 items-center gap-x-7 space-y-9 lg:space-y-0">
					{ChefSpecDishes.map((cs) => <CarouselCard product={cs} key={cs._id} />)}
				</div>
			</div>
		</Fragment>
	);
}
