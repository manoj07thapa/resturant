import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurAnimation from './BlurAnimation';

export default function ChefSpecial({ chefContent }) {
	return (
		<Fragment>
			<div className=" lg:grid lg:grid-cols-2 gap-x-32 items-center mt-12 sm:mt-16 lg:mt-48 ">
				<div className="px-5 md:px-12  mt-4  max-w-md mx-auto sm:max-w-xl lg:max-w-full  ">
					<div>
						<div className=" lg:hidden border">
							<Image
								className="rounded-md shadow-3xl"
								src={chefContent[0].files[0].url}
								height={20}
								width={35}
								alt="hero section"
								objectFit="cover"
								layout="responsive"
								objectPosition="bottom center"
							/>
						</div>

						<div className="mt-6 sm:mt-8 lg:mt-5 relative">
							<BlurAnimation />
							<h3 className="text-2xl sm:text-3xl  font-bold text-gray-900 uppercase ">
								{chefContent[0].title} <br className="hidden lg:inline" />
								<span className="text-purple-500 lg:text-2xl lowercase">{chefContent[0].subtitle}</span>
							</h3>
							<p className="mt-2 sm:mt-4 lg:mt-6 sm:text-xl text-gray-600 ">
								{chefContent[0].description}
							</p>
						</div>
						<div className="mt-6 sm:mt-9 ">
							<Link href="/products">
								<a className="inline-block px-12 py-3 text-center text-sm sm:text-base font-medium tracking-wideer bg-purple-900 hover:bg-purple-500 text-white uppercase rounded-md shadow-lg hover:-translate-y-0.5  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-purple-500 active:bg-purple-600 transform transition">
									try chef special
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="hidden lg:block  pr-12 ">
					<Image
						className=" inset-0 w-full h-full border rounded-md shadow-3xl"
						src={chefContent[0].files[0].url}
						height={25}
						width={35}
						alt="hero section"
						objectFit="cover"
						layout="responsive"
						objectPosition="bottom center"
						quality={30}
					/>
				</div>
			</div>
		</Fragment>
	);
}
