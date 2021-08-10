import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlurAnimation from './BlurAnimation';
import HeroImage from '../../public/undraw_On_the_way_re_swjt-removebg-preview.png';

export default function HeroContent({ heroContent }) {
	return (
		<Fragment>
			<div className="  lg:grid lg:grid-cols-2  items-center bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-pink-500/30 lg:h-screen">
				<div className="px-5 md:px-12  max-w-md mx-auto sm:max-w-xl lg:max-w-full pb-12  ">
					<div className="">
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
								<span className="text-purple-700 lg:text-3xl font-semibold uppercase tracking-wide">
									{heroContent[0].subtitle}
								</span>
							</h1>
							<p className="mt-2 sm:mt-4 lg:mt-6 sm:text-xl text-gray-600 ">
								{heroContent[0].description}
							</p>
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
