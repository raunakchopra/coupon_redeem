import React from 'react';

// Coupon table row component
const CouponTableRow = ({ company, logo, amount, startDate, endDate, quota, redeemed }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    {logo && (
                        <img
                            src={logo}
                            alt={`${company} Logo`}
                            className="w-10 h-10 mr-4"
                        />
                    )}
                    <div>
                        <div className="text-sm font-medium text-gray-900">{company}</div>
                        <div className="text-sm text-gray-500">Quota: {quota}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{amount}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{startDate}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{endDate}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{redeemed}</div>
            </td>
        </tr>
    );
};

// Admin screen component
const AdminScreen = () => {
    const coupons = [
        {
            company: 'Company A',
            logo: 'https://picsum.photos/100',
            amount: '$10',
            startDate: 'Oct 1, 2023',
            endDate: 'Oct 31, 2023',
            quota: '100',
            redeemed: '50',
        },
        {
            company: 'Company B',
            logo: 'https://picsum.photos/100',
            amount: '$20',
            startDate: 'Nov 1, 2023',
            endDate: 'Nov 30, 2023',
            quota: '200',
            redeemed: '100',
        },
        {
            company: 'Company C',
            logo: 'https://picsum.photos/100',
            amount: '$15',
            startDate: 'Dec 1, 2023',
            endDate: 'Dec 31, 2023',
            quota: '150',
            redeemed: '75',
        },
        // Add more coupons as needed
    ];

    return (
        <div className="flex">
            <div className="w-full p-4">
                <h2 className="text-xl font-bold mb-4">Coupon List</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Company
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
                    <tbody className="bg-white divide-y divide-gray-200">
                        {coupons.map((coupon, index) => (
                            <CouponTableRow key={index} {...coupon} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminScreen;