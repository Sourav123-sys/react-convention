import React, { useEffect, useState } from 'react';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useQuery } from 'react-query';
import OrderCard from './OrderCard';
import Modal from '../Modal';
import Spinner from '../../Spinner/Spinner';
const MyOrder = () => {
    const [user] = useAuthState(auth)
    // const [orders, setOrders] = useState([])
    //console.log(orders);
    //const navigate = useNavigate()
    const [modal, setModal] = useState({})

    const email = user?.email
    //console.log(email, 'order-email');
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://hidden-brushlands-28019.herokuapp.com/singleOrder?email=${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    //console.log(orders, 'fetch-order');
    if (isLoading) {
        return <Spinner />
    }

    const orderDelete = (id) => {



        fetch(`https://hidden-brushlands-28019.herokuapp.com/myorder/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch()
                    setModal({})
                    toast.success('Order cancel successfully')
                }
                else {
                    toast.error(`Can't Cancel the Order`)
                }
            })

    }
    return (
        <div>
            {orders?.length ? <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Here is the {orders?.length} {orders?.length == 1 ? 'package' : 'packages'} that you ordered :-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>You Don't Have any order</h1>}
            {
                modal?._id && <Modal
                    modal={modal}
                    setModal={setModal}
                    sendEvent={orderDelete}


                ></Modal>
            }
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Package</th>
                            <th>Price</th>
                            <th>Adults</th>
                            <th>Child</th>
                            <th>CheckIn</th>
                            <th>StartTme</th>
                            <th>Extra</th>

                            <th>Cancel</th>
                            <th>Proceed</th>
                            <th>Transaction Id</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((o, index) => <OrderCard
                                key={o._id}
                                o={o}
                                index={index}
                                refetch={refetch}
                                sendEvent={orderDelete}
                                setModal={setModal}
                            ></OrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;