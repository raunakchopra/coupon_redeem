import React from "react";
import moment from 'moment'

// Coupon table row component
const CouponTableRow = ({ data, logo }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    {logo && (
                        <img
                            src={logo}
                            alt={`${data.company} Logo`}
                            className="w-10 h-10 mr-4"
                        />
                    )}
                    <div>
                        <div className="text-sm font-medium text-gray-900">{data.company}</div>
                        <div className="text-sm text-gray-500">Quota: {data.totalQuota}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{data.couponCode}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 FONT">HKD {data.amount}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{moment(data.start).format('YYYY-MM-DD HH:mm:ss')}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{moment(data.end).format('YYYY-MM-DD HH:mm:ss')}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{data.currentQuota}</div>
            </td>
        </tr>
    );
};

export default CouponTableRow;