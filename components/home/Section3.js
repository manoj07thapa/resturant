import Image from 'next/image';
import BlurAnimation from './BlurAnimation';
export default function Section3({ popularContent }) {
	return (
		<div className="px-5 md:px-12  mt-12 sm:mt-16 lg:mt-36 max-w-md mx-auto sm:max-w-xl lg:max-w-full  ">
			<div className=" lg:grid lg:grid-cols-2 gap-x-32 items-center  ">
				<div className="lg:hidden mt-6 sm:mt-8 lg:mt-5 relative mb-7 border-t border-gray-500 pt-7">
					<BlurAnimation />
					<h3 className="text-2xl sm:text-3xl  font-bold uppercase ">
						{popularContent[0].title} <br className="hidden lg:inline" />
					</h3>
					<span className="text-gray-700 lg:text-2xl ">{popularContent[0].subtitle}</span>

					<p className="mt-2 sm:mt-4 lg:mt-6 sm:text-xl text-gray-600 ">{popularContent[0].subtitle1}</p>
				</div>
				<div className=" ">
					<Image
						className="rounded-md shadow-3xl"
						src={popularContent[0].files[0].url}
						height={25}
						width={35}
						alt="hero section"
						objectFit="cover"
						layout="responsive"
						objectPosition="bottom center"
					/>
				</div>
				<div className="hidden lg:block mt-6 sm:mt-8 lg:mt-5 relative ">
					<BlurAnimation />
					<h3 className="text-2xl sm:text-3xl  font-bold uppercase ">
						{popularContent[0].title} <br className="hidden lg:inline" />
					</h3>
					<span className="text-purple-700 lg:text-2xl ">{popularContent[0].subtitle}</span>

					<p className="mt-2 sm:mt-4 lg:mt-6 sm:text-xl text-gray-600 ">{popularContent[0].subtitle1}</p>
				</div>
			</div>
		</div>
	);
}
