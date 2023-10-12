import React from 'react';

// Sidebar component
const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white p-4 h-screen">
            <div className="flex flex-col items-center">
                <img
                    src="profile-image.jpg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm">HKID: XXXXXXXX</p>
            </div>
        </aside>
    );
};

// Coupon box component
const CouponBox = ({ company, logo, code, amount, validity }) => {
    return (
        <div className="bg-white rounded shadow-md p-6 mb-4 relative">
            <div className="flex items-center mb-4">
                <h3 className="text-lg font-bold">{company}</h3>
                {logo && (
                    <img
                        src={logo}
                        alt={`${company} Logo`}
                        className="w-12 h-12 ml-auto"
                    />
                )}
            </div>
            <p className="text-sm text-gray-600 mb-4">Coupon Code: {code}</p>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-600">Amount: {amount}</p>
                    <p className="text-sm text-gray-600">Validity: {validity}</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                    Redeem
                </button>
            </div>
        </div>
    );
};
// Home screen component
const HomeScreen = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-6">Coupon Redemption</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CouponBox
                        company="Company A"
                        logo="https://picsum.photos/200"
                        code="ABC123"
                        amount="$10"
                        validity="Oct 31, 2023"
                    />
                    <CouponBox
                        company="Company B"
                        logo="https://picsum.photos/200"
                        code="DEF456"
                        amount="$20"
                        validity="Nov 30, 2023"
                    />
                    <CouponBox
                        company="Company C"
                        logo="https://picsum.photos/200"
                        code="GHI789"
                        amount="$15"
                        validity="Dec 31, 2023"
                    />
                    {/* Add more coupon boxes as needed */}
                </div>
            </main>
        </div>
    );
};

export default HomeScreen;