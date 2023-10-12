import React from 'react';
import moment from 'moment';
import axios from 'axios';

const CouponBox = ({ data, logo }) => {
    const validity = moment(data.end).format('YYYY-MM-DD HH:mm:ss');

    const handleRedeem = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user')); // Retrieve the bearer token from local storage
            const token = user.token.token
            const response = await axios.post(`http://localhost:8080/coupon/redeem/${data._id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the bearer token in the request headers
                },
            }
            );
            alert(response.data.message)
        } catch (error) {
            console.log(error)
            console.error(error);
        }
    };

    return (
        <div className="bg-white rounded shadow-md p-6 mb-4 relative">
            <div className="flex items-center mb-4">
                <h3 className="text-lg font-bold">{data.company}</h3>
                {logo && (
                    <img
                        src={logo}
                        alt={`${data.company} Logo`}
                        className="w-12 h-12 ml-auto"
                    />
                )}
            </div>
            <p className="text-sm text-gray-600 mb-4">Coupon Code: {data.couponCode}</p>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-600">Amount: HKD {data.amount}</p>
                    <p className="text-sm text-gray-600">Validity: {validity}</p>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    onClick={handleRedeem} // Call handleRedeem function when the button is clicked
                >
                    Redeem
                </button>
            </div>
        </div>
    );
};

export default CouponBox;