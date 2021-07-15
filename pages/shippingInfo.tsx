import React, { Fragment } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import ShippingInfoForm from '../components/shipping/ShippingInfoForm';
import { GetShipInfo } from "../dbQuery/getShipInfo";
import router from 'next/router';
import { DotLoader } from 'react-spinners';





export default withPageAuthRequired(function ShippingInfo() {
    return (
        <>
            <Head>
                <title>Shipping Infoormation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <ShippingInfoForm />
            </div>

        </>
    )
})

