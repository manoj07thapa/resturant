import { useState } from 'react';

export default function TestFilter() {
	const [ isOpen, setIsOpen ] = useState(true);

	return (
		<section className="bg-gray-800 xl:w-72 ">
			<div className="flex justify-between  px-4 py-3 xl:hidden">
				<div className="relative max-w-xs w-full">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>

					<input
						className="block w-full bg-gray-900 text-white rounded-lg px-11 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-600"
						type="text"
						name=""
						id=""
						placeholder="Search By Keywords"
					/>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className=" ml-4 inline-flex items-center justify-between bg-gray-900 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pr-2 pl-1 "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 pr-1 fill-current text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						/>
					</svg>
					<span className="text-white font-medium">Filters</span>
				</button>
			</div>
			{isOpen && (
				<form className="xl:flex xl:flex-col xl:justify-between xl:h-full ">
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
						<div className="px-4 py-4 border-t border-gray-900 lg:border-l">
							<span className="block text-sm font-semibold text-gray-500">Property Type</span>
							<div className="sm:flex sm:-mx-2 lg:block lg:mx-0 ">
								<label htmlFor="" className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0">
									<input type="radio" className="bg-gray-900" />
									<span className="ml-2 text-white">House</span>
								</label>
								<label
									htmlFor=""
									className=" mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0"
								>
									<input type="radio" className="bg-gray-900" />
									<span className="ml-2 text-white">Appartment</span>
								</label>
								<label
									htmlFor=""
									className=" mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0"
								>
									<input type="radio" className="bg-gray-900" />
									<span className="ml-2 text-white">Loft</span>
								</label>
								<label htmlFor="" className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0">
									<input type="radio" className="bg-gray-900" />
									<span className="ml-2 text-white">Town House</span>
								</label>
							</div>
						</div>
						<div className="px-4 py-4 border-t border-gray-900 lg:border-l">
							<span className="block text-sm font-semibold text-gray-500">Amenities</span>
							<div className="sm:flex sm:-mx-2 sm:flex-wrap">
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Balcony</span>
								</label>

								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Pool</span>
								</label>
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Beach</span>
								</label>
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Pet Friendly</span>
								</label>
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Kid Friendly</span>
								</label>
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Air Conditioning</span>
								</label>
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Air Conditioning</span>
								</label>
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Air Conditioning</span>
								</label>
								<label
									htmlFor=""
									className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full xl:w-full"
								>
									<input type="checkbox" className="bg-gray-900" />
									<span className="ml-2 text-white">Air Conditioning</span>
								</label>
							</div>
						</div>
					</div>
					<div className="bg-gray-900 px-4 py-4 sm:text-right ">
						<button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">
							Update Results
						</button>
					</div>
				</form>
			)}
		</section>
	);
}
