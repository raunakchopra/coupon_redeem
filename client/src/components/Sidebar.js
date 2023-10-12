import React from 'react';

// Sidebar component
const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <aside className="bg-gray-800 text-white p-4 h-screen fixed top-0 left-0 overflow-y-auto">
            <div className="flex flex-col items-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png"
                    alt="Profile"
                    className="w-16 h-16 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold">HKID: {user.user.hkid}</h2>
            </div>
        </aside>
    );
};

export default Sidebar;