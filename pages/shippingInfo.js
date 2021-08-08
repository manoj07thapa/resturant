import { Fragment, useEffect } from 'react';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import ShippingInfoForm from '../components/shipping/ShippingInfoForm';
import { GetShipInfo } from '../dbQuery/getShipInfo';
import router from 'next/router';
import { DotLoader } from 'react-spinners';
import Footer from '../components/footer/Footer';
import ShipInfo from '../models/ShipInfo'

export default withPageAuthRequired(function ShippingInfo() {
	// const { shipInfo, shipError, shipLoading } = GetShipInfo();
	// useEffect(() => {
	// 	if (shipInfo.shipInfo !== null) {
	// 		router.push('/checkout');
	// 	}
	// });

	// if (shipLoading)
	// 	return (
	// 		<div className="flex justify-center mt-72">
	// 			<DotLoader color="#2a9d8f" />
	// 		</div>
	// 	);
	// if (shipError) return <div>Error</div>;

	return (
		<Fragment>
			<Head>
				<title>Shipping Infoormation</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<ShippingInfoForm />
			</div>
			<Footer />
		</Fragment>
	);
});

export async function getServerSideProps(ctx) {
	const session = getSession(ctx.req, ctx.res);
	const user =  session?.user
	const ship = await ShipInfo.findOne({email:user.email})

	console.log(ship)

	if(ship !== null){
		return {
			redirect: {
				destination: '/checkout',
				permanent: false
			}
		};
	}

	return {
		props: {}
	};
}
