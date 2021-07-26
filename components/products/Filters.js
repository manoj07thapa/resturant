import { useState } from 'react';
import { CategoryModel } from '../../interfaces/Category';

export default function Filters({ categories }) {
	const [ isOpen, setIsOpen ] = useState(true);

	return (
		<section className="bg-white xl:w-72 h-screen flex">
			{isOpen && (
				<form className="xl:flex xl:flex-col xl:justify-between xl:h-full">
					<div className="bg-gray-100  py-4 ">
						<h3 className="block w-full sm:w-auto sm:inline-block font-semibold text-gray-700 px-4 py-2 rounded-lg xl:block xl:w-full">
							Eat By
						</h3>
					</div>
					<div className="lg:grid lg:grid-cols-3 lg:gap-3 xl:block xl:overflow-y-auto">
						<div className="px-4 py-4 border-t border-gray-900 xl:border-t-0  ">
							<div className="flex flex-wrap -mx-2 ">
								<label htmlFor="" className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
									<span className="text-sm font-semibold text-gray-500">Bedrooms</span>
									<select
										name=""
										id=""
										className="mt-1 block w-full rounded-lg bg-gray-700 shadow text-white "
									>
										<option value="">4</option>
									</select>
								</label>
								<label htmlFor="" className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
									<span className="text-sm font-semibold text-gray-500">Bathrooms</span>
									<select
										name=""
										id=""
										className="mt-1 block w-full rounded-lg bg-gray-700 shadow text-white"
									>
										<option value="">1</option>
									</select>
								</label>
								<label
									htmlFor=""
									className=" w-full block mt-4 sm:w-1/2 sm:mt-0 px-2 lg:w-full lg:mt-4"
								>
									<span className="text-sm font-semibold text-gray-500">Price Range</span>
									<select
										name=""
										id=""
										className="mt-1 block w-full rounded-lg bg-gray-700 shadow text-white"
									>
										<option value="">Up to $2000/wk</option>
									</select>
								</label>
							</div>
						</div>
						<div className="px-4 py-4 border-t border-gray-200 lg:border-l">
							<span className="block text-sm font-semibold text-gray-500">Category</span>
							{categories.map((c) => (
								<div className="sm:flex sm:-mx-2 lg:block lg:mx-0 " key={c._id}>
									<label
										htmlFor=""
										className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0"
									>
										<input type="checkbox" className="bg-gray-900 rounded" value={c._id} />
										{/* <span className="ml-2 text-gray-400">{c._id}</span> */}
										<span className="ml-2 text-gray-400">{`${c._id} (${c.count})`}</span>
									</label>
								</div>
							))}
						</div>
						<div className="px-4 py-4 border-t border-gray-200 lg:border-l">
							<span className="block text-sm font-semibold text-gray-500">Amenities</span>
							<div className="sm:flex sm:-mx-2 sm:flex-wrap">
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-gray-400">Balcony</span>
								</label>
							</div>
						</div>
					</div>
				</form>
			)}
		</section>
	);
}
