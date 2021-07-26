import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlurAnimation from './BlurAnimation';
import HeroImage from '../../public/undraw_On_the_way_re_swjt-removebg-preview.png';

export default function HeroContent({ heroContent }) {
	return (
		<Fragment>
			<div className=" lg:grid lg:grid-cols-2  items-center">
				<div className="px-5 md:px-12 mt-4  max-w-md mx-auto sm:max-w-xl lg:max-w-full  ">
					<div>
						<div className=" lg:hidden ">
							<Image
								className="rounded-md shadow-3xl"
								src={HeroImage}
								height={30}
								width={40}
								alt="hero section"
								objectFit="cover"
								layout="responsive"
								objectPosition="center"
							/>
						</div>

						<div className="mt-6 sm:mt-8 lg:mt-5 relative  ">
							<BlurAnimation />
							<h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 ">
								{heroContent[0].title} <br className="hidden lg:inline" />
								<span className="text-purple-500 lg:text-4xl">{heroContent[0].subtitle}</span>
							</h1>
							<p className="mt-2 sm:mt-4 lg:mt-6 sm:text-xl text-gray-600 ">
								{heroContent[0].description}
							</p>
						</div>
						<div className="mt-6 sm:mt-9 ">
							<Link href="/products">
								<a className="inline-block px-12 py-3 text-center text-sm sm:text-base font-medium tracking-wideer bg-purple-900 hover:bg-purple-500 text-white uppercase rounded-md shadow-lg hover:-translate-y-0.5  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-purple-500 active:bg-purple-600 transform transition">
									dig in
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="hidden lg:block  pr-12 ">
					<Image
						className=" inset-0 w-full h-full rounded-md shadow-3xl"
						src={HeroImage}
						height={30}
						width={40}
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
