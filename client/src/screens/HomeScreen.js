import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../components/Sidebar';
import CouponBox from '../components/CouponBox';

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

// Home screen component
const HomeScreen = () => {
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
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
                <h1 className="text-2xl ml-40 font-bold mb-6">Coupon Redemption</h1>
                <div className='mb-20'>
                    <button onClick={() => sortStartEnd()} class="bg-green-500 mr-4 float-right hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4">Sort by Total Redeemed</button>
                    <button onClick={() => sortRecentEndCoupon()} class="bg-blue-500 hover:bg-blue-600 float-right text-white font-bold py-2 px-4 rounded">Sort by Recent End</button>
                </div>
                {responseState ? (
                    <div className="ml-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {coupons.map((coupon) => (
                            <CouponBox data={coupon} logo="https://picsum.photos/200" key={coupon.id} />
                        ))}
                    </div>
                ) : (
                    <p>Loading coupons...</p>
                )}
            </main>
        </div>
    );
};

export default HomeScreen;