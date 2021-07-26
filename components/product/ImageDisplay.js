import React from 'react';
import Image from 'next/image';

export default function ImageDisplay({ images }) {
	console.log(images);
	return (
		<div className="md:col-span-2">
			<Image
				src={images[0].url}
				alt="product image"
				width={10}
				height={7}
				objectFit="cover"
				layout="responsive"
				quality={30}
				className="rounded-md shadow"
			/>
		</div>
	);
}
