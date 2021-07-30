import { Fragment, useEffect } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import ShippingInfoForm from '../components/shipping/ShippingInfoForm';
import { GetShipInfo } from '../dbQuery/getShipInfo';
import router from 'next/router';
import { DotLoader } from 'react-spinners';
import Footer from '../components/footer/Footer';

export default withPageAuthRequired(function ShippingInfo() {
	const { shipInfo, shipError, shipLoading } = GetShipInfo();

	if (shipLoading)
		return (
			<div className="flex justify-center">
				<DotLoader color="#2a9d8f" />
			</div>
		);
	if (shipError) return <div>Error</div>;

	return (
		<Fragment>
			<Head>
				<title>Shipping Infoormation</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<ShippingInfoForm shipInfo={shipInfo} />
			</div>
			<Footer />
		</Fragment>
	);
});
