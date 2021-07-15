import KhaltiCheckout from 'khalti-checkout-web';
import { useState } from 'react';
import router from 'next/router';
import axios from 'axios';

export default function Khalti({ products, totalAmt }: any) {
    console.log('KHALTIPRODUCTS', products);

    let config = {
        // replace this key with yours
        publicKey: 'test_public_key_2994c415529b494595ebb5d4c6118235',
        productIdentity: products,
        productName: 'Drogon',
        productUrl: 'http://gameofthrones.com/buy/Dragons',
        eventHandler: {
            async onSuccess(payload: any) {
                // hit merchant api for initiating verfication
                console.log('PAYMENTINFO', payload);


                try {
                    const res = await axios.post('/api/payment/khalti', {
                        payload


                    });

                    if (res.data.success === true) {
                        router.push('/paymentSuccess');
                    } else {
                        router.push('/paymentFailed');
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            // onError handler is optional
            onError(error: any) {
                // handle errors
                console.log(error);
            },
            onClose() {
                console.log('widget is closing');
            }
        },
        paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT']
    };

    const checkout = new KhaltiCheckout(config);

    const handleClick = () => {
        checkout.show({ amount: totalAmt * 100 });
    };

    return (
        <button onClick={handleClick} className="px-4 py-2 bg-purple-700 rounded-sm shadow text-white" >
            Khalti
        </button>
    );
}
