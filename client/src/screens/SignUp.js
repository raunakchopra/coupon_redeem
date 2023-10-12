import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        hkid: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateHKID = (hkid) => {
        // HKID format regex (allows both uppercase and lowercase characters)
        const hkidRegex = /^[a-zA-Z]{1,2}[0-9]{6}([0-9aA])$/;

        return hkidRegex.test(hkid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (!validateHKID(formData.hkid)) {
                alert('Invalid HKID format');
                return;
            }
            const response = await axios.post('http://localhost:8080/user/signup', formData);
            window.location.href = '/login'
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block mb-1 font-medium">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full border-gray-300 border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-1 font-medium">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full border-gray-300 border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="hkid" className="block mb-1 font-medium">
                                HKID
                            </label>
                            <input
                                type="text"
                                id="hkid"
                                name="hkid"
                                className="w-full border-gray-300 border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                value={formData.hkid}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border-gray-300 border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border-gray-300 border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block mb-1 font-medium">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="w-full border-gray-300 border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;