import React from 'react';

function MyAccount() {
    return (
        <div className="bg-white px-6 py-8 max-w-screen-2xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 ml-6">Home / My Account</p>
                    <span className="text-lg font-medium">Welcome! <strong>User</strong></span>
                </div>
                <h2 className="text-2xl font-semibold mt-8 ml-6">Billing Details</h2>
            </div>

            {/* Sidebar and Form Section */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-1/3 lg:w-1/4 p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
                    <ul className="ml-4 space-y-2 text-sm text-gray-700">
                        <li className="hover:text-red-500 cursor-pointer">My Profile</li>
                        <li className="hover:text-red-500 cursor-pointer">Address Book</li>
                        <li className="hover:text-red-500 cursor-pointer">My Payment Options</li>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
                    <ul className="ml-4 space-y-2 text-sm text-gray-700">
                        <li className="hover:text-red-500 cursor-pointer">My Returns</li>
                        <li className="hover:text-red-500 cursor-pointer">My Cancellations</li>
                    </ul>
                    <h2 className="text-lg font-medium mt-6 mb-4">My Wishlist</h2>
                </div>

                {/* Edit Profile Form */}
                <div className="w-full md:w-2/3 lg:w-3/4 xl:w-1/1 bg-white p-6 rounded-md shadow-lg">
                    <form className="lg:mx-28 sm:mx-8">
                        <h3 className="text-xl font-semibold mb-6 text-red-500">Edit Your Profile</h3>

                        {/* Name Fields */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label htmlFor="firstName" className="text-sm mb-2">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="border border-gray-300 p-2 rounded-md text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label htmlFor="lastName" className="text-sm mb-2">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="border border-gray-300 p-2 rounded-md text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        {/* Email and Address Fields */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label htmlFor="email" className="text-sm mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border border-gray-300 p-2 rounded-md text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label htmlFor="address" className="text-sm mb-2">Address</label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Enter your address"
                                    className="border border-gray-300 p-2 rounded-md text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        {/* Password Fields */}
                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex flex-col w-full">
                                <label htmlFor="currentPassword" className="text-sm mb-2">Password Change</label>
                                <input
                                    id="currentPassword"
                                    type="password"
                                    placeholder="Current Password"
                                    className="border border-gray-300 p-2 rounded-md text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <input
                                    id="newPassword"
                                    type="password"
                                    placeholder="New Password"
                                    className="border border-gray-300 p-2 rounded-md text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm New Password"
                                    className="border border-gray-300 p-2 rounded-md text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4">
                            <button type="button" className="text-gray-700 border border-gray-300 py-2 px-4 rounded-md">
                                Cancel
                            </button>
                            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
