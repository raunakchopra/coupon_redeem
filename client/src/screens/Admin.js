import React, { useState, useEffect } from 'react';
import axios from 'axios'

import CouponTableRow from '../components/CouponTableRow';

const sortByDates = (coupon1, coupon2) => {
    const date1 = new Date(coupon1.start);
    const date2 = new Date(coupon2.start);
    return date1 - date2;
};

const sortByDatesAndQuota = (coupon1, coupon2) => {
    const date1 = new Date(coupon1.start);
    const date2 = new Date(coupon2.start);

    if (date1 < date2) {
        return -1;
    } else if (date1 > date2) {
        return 1;
    } else {
        return coupon2.currentQuota - coupon1.currentQuota;
    }
};

// Admin screen component
const AdminScreen = () => {

    const [coupons, setCoupons] = useState([]);
    const [responseState, setResponseState] = useState(false);

    const sortStartEnd = () => {
        let couponsTemp = coupons
        couponsTemp = [...couponsTemp];

        // Sort the coupons based on start and end dates
        couponsTemp.sort(sortByDates);
        // Sort the coupons based on currentQuota
        couponsTemp.sort((coupon1, coupon2) => coupon2.currentQuota - coupon1.currentQuota);

        setCoupons([...couponsTemp])
    }

    const sortRecentEndCoupon = () => {
        let couponsTemp = coupons
        couponsTemp = [...couponsTemp];

        // Sort the coupons based on start and end dates, and totalQuota
        couponsTemp.sort(sortByDatesAndQuota);
        setCoupons([...couponsTemp])
    }

    useEffect(() => {
        const fetchCouponData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/coupon');
                setCoupons(response.data.coupons);
                setResponseState(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCouponData();
    }, []);

    return (
        <div className="flex" >
            <div className="w-full p-4">
                <h2 className="text-xl font-bold mb-4">Coupon List</h2>
                <button onClick={() => sortStartEnd()} class="bg-green-500 mr-4 mb-4 float-right hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4">Sort by Total Redeemed</button>
                <button onClick={() => sortRecentEndCoupon()} class="bg-blue-500 hover:bg-blue-600 float-right text-white font-bold py-2 px-4 rounded">Sort by Recent End</button>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Company
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Coupon Code
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Start Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                End Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Redeemed
                            </th>
                        </tr>
                    </thead>
                    {
                        responseState ? (
                            <tbody className="bg-white divide-y divide-gray-200">
                                {coupons.map((coupon, index) => (
                                    <CouponTableRow key={index} data={coupon} logo="https://picsum.photos/100" />
                                ))}
                            </tbody>) : <p>Loading Coupons</p>
                    }

                </table>
            </div>
        </div >
    );
};

export default AdminScreen;