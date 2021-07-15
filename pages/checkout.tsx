import React, { Fragment } from 'react'
import EditShipInfoModel from '../components/shipping/EditShipInfoModel'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetCart } from '../dbQuery/getCart';
import { DotLoader } from 'react-spinners';
import Head from 'next/head'
import { GetShipInfo } from "../dbQuery/getShipInfo";
import Khalti from '../components/payment/Khalti';


export default withPageAuthRequired(function Checkout() {
    const { cart, isLoading, isError } = GetCart();
    const { shipInfo, shipLoading, shipError, mutate } = GetShipInfo()
    if (isError || shipError) return <h1>Opps!! No products</h1>;

    if (isLoading || shipLoading) return <div className="flex"><DotLoader /></div>;

    var checkedCart = cart.cartProducts.filter(function (x: any) {
        return x.isChecked % 2 === 0;
    });

    let subTotal = 0;
    checkedCart.map((p: any) => {
        subTotal += p.product.price * p.quantity;
    });

    return (
        <Fragment>
            <Head>
                <title>Checkout</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex  justify-between">
                {shipInfo ? <div className="">
                    <h2>Your shipping info</h2>
                    <h3>{shipInfo.shipInfo.fullname}</h3>
                    <h3>{shipInfo.shipInfo.zone}</h3>
                    <h3>{shipInfo.shipInfo.district}</h3>
                    <h3>{shipInfo.shipInfo.area}</h3>
                    <h3>{shipInfo.shipInfo.address}</h3>
                </div> : <p>Please fill up your shipping information</p>}


                <div className="">
                    <h3>Items you are going to purchase</h3>
                    {checkedCart ? <div>
                        {checkedCart.map((cp: any) => (
                            <div key={cp._id}>
                                <h3>{cp.product.title}</h3>
                            </div>
                        ))}

                    </div> : <p>No checked cart</p>}
                    <p>GRAND TOTAL: {subTotal}</p>


                </div>
            </div>
            <div className="flex items-center  ">
                <div className="mt-7">
                    <EditShipInfoModel shipInfo={shipInfo} mutate={mutate} />
                </div>
                <div className="ml-5">
                    <Khalti totalAmt={subTotal} products={checkedCart} />
                </div>
            </div>
        </Fragment>
    )
})
