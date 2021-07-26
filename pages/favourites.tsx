import React from 'react'
import Head from 'next/head'
import { GetFavourites } from "../dbQuery/getFavourites";
import { DotLoader } from 'react-spinners';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


export default withPageAuthRequired(function Favourites() {
    const { favourite, isFavLoading, isFavError, mutate } = GetFavourites()
    if (isFavError) {
        return <div><h1>There are No  favourites</h1></div>
    }
    if (isFavLoading) {
        return <div className="flex items-center justify-center"><DotLoader color="#2a9d8f" /></div>
    }
    return (
        <div>
            <Head>
                <title>Your Favourites</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <pre>{JSON.stringify(favourite, null, 4)}</pre>
            </div>
        </div>
    )
})
