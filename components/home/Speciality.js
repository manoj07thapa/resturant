import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fragment } from 'react';
import CarouselCard from './CarouselCard';
import ProductCard from '../products/ProductCard';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		paritialVisibilityGutter: 60
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		paritialVisibilityGutter: 50
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		paritialVisibilityGutter: 30
	}
};

const Speciality = ({ products }) => {
	return (
		<Fragment>
			<div className="px-5 md:px-12  mt-12 sm:mt-16 lg:mt-48  max-w-md mx-auto sm:max-w-xl lg:max-w-full bg-purple-100 ">
				<div>
					<h3 className=" py-6 lg:ml-4 text-xl font-bold text-gray-900 uppercase">Our specialities</h3>
				</div>
				<Carousel
					responsive={responsive}
					itemClass="image-item"
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={5000}
					keyBoardControl={true}
					transitionDuration={1000}
				>
					{products.map((product) => {
						return <CarouselCard product={product} key={product._id} />;
					})}
				</Carousel>
			</div>
		</Fragment>
	);
};

export default Speciality;
