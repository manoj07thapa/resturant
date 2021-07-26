import React from 'react';
import Link from 'next/link';

export default function HomeBanner() {
	return (
		<div className="mt-9 md:mt-7 lg:mt-48 px-5 py-12 bg-pink-200">
			<div className="max-w-lg mx-auto">
				<h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
					Become our member and eat for less.
				</h1>
				<p className="px-3 text-md mt-2 text-gray-700 text-center">
					Our members are provied an special discount coupon. You can use the coupon for every order and save
					good amount of money over time.
				</p>
				<div className="mt-7 text-center">
					<Link href="#">
						<a className="inline-block px-12 py-3 text-center text-sm sm:text-base font-medium tracking-wideer bg-white hover:ring hover:ring-purple-900 text-gray-900  uppercase rounded-md shadow-lg hover:-translate-y-0.5  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-purple-500 active:bg-purple-600 transform transition">
							Become a member
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
