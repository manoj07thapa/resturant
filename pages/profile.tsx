import React from 'react'
import Head from 'next/head'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


export default withPageAuthRequired(function profile() {
    return (
        <div>
            <Head>
                <title>Your Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            profile
        </div>
    )
})
