import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetShipInfo } from "../../dbQuery/getShipInfo";
import { DotLoader } from "react-spinners";



export default function CartPaymentDetail({ checkedCart }: any) {
    const router = useRouter()
    const [subTotal, setSubTotal] = useState(0);
    const { shipInfo, loading, error, mutate } = GetShipInfo();

    useEffect(
        () => {
            calcTotal(checkedCart);
        },
        [checkedCart]
    );

    const calcTotal = (checkedCart: any) => {
        let subTotal = 0;
        checkedCart.map((p: any) => {
            subTotal += p.product.price * p.quantity;
        });
        setSubTotal(subTotal);
    };

    if (error) return <h1>Opps!! no ShipInfo</h1>;

    if (loading) return <div className="flex"><DotLoader /></div>;
    return (
        <div className="mr-4">
            <h1>Payment Detail</h1>
            <p>{subTotal}</p>
            <button onClick={() => {
                shipInfo ? router.push('/checkout') : router.push('/shippingInfo');
            }}
                className="px-4 py-2 bg-green-700 rounded-md shadow text-white">Proceed to payment</button>
        </div >
    )
}

