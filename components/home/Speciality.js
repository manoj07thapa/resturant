import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fragment } from 'react';
import CarouselCard from './CarouselCard';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
		paritialVisibilityGutter: 60
	},
	tablet: {
		breakpoint: { max: 1024, min: 640 },
		items: 2,
		paritialVisibilityGutter: 50
	},
	mobile: {
		breakpoint: { max: 640, min: 0 },
		items: 1,
		paritialVisibilityGutter: 30
	}
};

const Speciality = ({ products }) => {
	return (
		<Fragment>
			<div className="pb-5 ">
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
