import { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import axios from 'axios';
import { shipInfoSchema } from "../../middlewares/shipInfoSchema";
import { useUser } from '@auth0/nextjs-auth0';
import { GetShipInfo } from "../../dbQuery/getShipInfo";
import { DotLoader } from 'react-spinners';

export default function ShippingInfoForm() {
    const { user, error, isLoading } = useUser();
    const { shipInfo, shipLoading, shipError } = GetShipInfo()
    const router = useRouter();



    if (isLoading || shipLoading) return <div><DotLoader /></div>;
    if (error || shipError) return <div>Error</div>;

    const initialValues = {
        fullname: '',
        email: user?.email,
        zone: '',
        district: '',
        phone: '',
        city: '',
        area: '',
        address: ''
    };


    const handleSubmit = async (values: any, actions: any) => {

        try {
            const res = await axios.post('/api/user/shipInfo', { values })
            if (res) {
                router.push('/checkout')
            }

        } catch (error) {
            console.log(error.response.data.message);
            if (error.response) {
                actions.setErrors(error.response.data);
            }
        }
    };

    return (
        <>
            <div><h3>Product Shippment Form</h3></div>
            <div>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                    {({ errors, isSubmitting, isValid, values }) => (
                        <Form >
                            <div >
                                <div >
                                    <label htmlFor="fullname">Fullname:</label>
                                    <Field
                                        name="fullname"
                                        type="text"
                                    />
                                </div>
                                <div> {errors.fullname && errors.fullname}</div>

                                {/* <div className="mt-5">
                                    <label >Email:</label>

                                    <Field
                                        name="email"
                                        type="text"
                                    />
                                </div> */}
                                <div className="mt-5">
                                    <label >Zone:</label>

                                    <Field
                                        name="zone"
                                        type="text"
                                    />
                                </div>
                                <div> {errors.zone && errors.zone}</div>

                                <div className="mt-5">
                                    <label >District:</label>

                                    <Field
                                        name="district"
                                        type="text"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label >Phone:</label>

                                    <Field
                                        name="phone"
                                        type="number"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label >City:</label>

                                    <Field
                                        name="city"
                                        type="text"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label >Area:</label>

                                    <Field
                                        name="area"
                                        type="text"
                                        id="area"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label >Address:</label>

                                    <Field
                                        name="address"
                                        type="text"
                                        id="area"
                                    />
                                </div>
                            </div>
                            {errors && <p className="text-red-700">{errors.address}</p>}

                            <button

                                type="submit"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </>
    )
}
