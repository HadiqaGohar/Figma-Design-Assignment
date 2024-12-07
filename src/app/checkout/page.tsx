import React from 'react';
import Image from 'next/image';

function Checkout() {
    return (
        <div className="bg-white px-6 py-8 max-w-screen-2xl mx-auto">
            <p className="text-sm text-gray-600 ml-6">Account / My Account / Product / View Cart / <span>CheckOut</span></p>

            <h2 className="text-2xl font-semibold mt-8 ml-6">Billing Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                {/* Billing Form Section */}
                <div className="bg-white p-6 rounded-lg ">
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-400">First Name*</label>
                                <input type="text" id="first-name" className="w-full p-2 bg-gray-100  rounded" />
                            </div>
                            <div>
                                <label htmlFor="company-name" className="block text-sm font-medium text-gray-400">Company Name*</label>
                                <input type="text" id="company-name" className="w-full p-2 bg-gray-100  rounded" />
                            </div>
                            <div>
                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-400">Street Address*</label>
                                <input type="text" id="street-address" className="w-full p-2 bg-gray-100  rounded" />
                            </div>
                            <div>
                                <label htmlFor="apartment" className="block text-sm font-medium text-gray-400">Apartment, floor, etc (optional)</label>
                                <input type="text" id="apartment" className="w-full p-2 bg-gray-100  rounded" />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-400">Town/City*</label>
                                <input type="text" id="city" className="w-full p-2 bg-gray-100 rounded" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone Number*</label>
                                <input type="text" id="phone" className="w-full p-2 bg-gray-100  rounded" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email Address*</label>
                                <input type="email" id="email" className="w-full p-2 bg-gray-100 rounded" />
                            </div>
                        </div>
                        {/* Checkbox */}
                        <div className="mt-4 flex items-center ">
                            <input type="checkbox" id="save-info" className="h-4 w-4  text-red-500" />
                            <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">Save this information for faster checkout next time</label>
                        </div>
                    </form>
                </div>

                {/* Cart Summary Section */}
                <div className="bg-white p-6 rounded-lg lg:mx-20">
                    {/* <h3 className="text-xl font-semibold">Order Summary</h3> */}
                    <div className="space-y-4 mt-6">
                        {/* Product Listing */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Image src="led.jpeg" alt="LCD Monitor" className="w-16 h-16 object-cover mr-4" height={64} width={64}/>
                                <p>LCD Monitor</p>
                            </div>
                            <p>$650</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Image src="game.jpeg" alt="LCD Monitor" className="w-16 h-16 object-cover mr-4" height={64} width={64}/>
                                <p>Game</p>
                            </div>
                            <p>$1750</p>
                        </div>

                        {/* Cart Totals */}
                        <div className="flex justify-between items-center">
                            <p>Subtotal:</p>
                            <p>$650</p>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <p>Total:</p>
                            <p>$1750</p>
                        </div>

                        {/* Payment Methods */}
                        <div className="my-6">
                            <div className="space-y-4">
                                {/* Bank Payment Method with Checkboxes */}
                                <div className="flex items-center">
                                    <input type="checkbox" id="bank" className="h-5 w-5 text-red-500" />
                                    <label htmlFor="bank" className="ml-2 text-sm text-gray-700">
                                        Bank
                                    </label>
                                    <div className="ml-4">
                                        <Image src="https://ahkhan.com/wp-content/uploads/2018/07/Bkash-Customer-Care1.png" alt="Bank" className="w-12 h-12 inline-block mr-2" height={48} width={48}/>
                                        <Image src="https://static.vecteezy.com/system/resources/previews/020/975/576/non_2x/visa-logo-visa-icon-transparent-free-png.png" alt="Payment Option" className="w-8 h-8 inline-block mr-2" height={32} width={32}/>
                                        <Image src="https://logos-download.com/wp-content/uploads/2016/03/Mastercard_Logo_1979.png" alt="Payment Option" className="w-8 h-8 inline-block mr-2" height={32} width={32}/>
                                    </div>
                                </div>

                                {/* Cash on Delivery Option */}
                                <div className="flex items-center">
                                    <input type="checkbox" id="cash-on-delivery" className="h-5 w-5 text-red-500" />
                                    <label htmlFor="cash-on-delivery" className="ml-2 text-sm text-gray-700">
                                        Cash on delivery
                                    </label>
                                </div>
                            </div>
                        </div>


                        {/* Coupon Code Section */}
                        <div className="my-6 justify-center">
                            <div className="flex items-center justify-center space-x-2">
                                <input type="text" placeholder="Coupon Code" className="w-[350px] p-2 bg-gray-100 border border-gray-300 rounded" />
                                <button className="w-[150px] text-sm px-6 py-3 bg-[#DB4444] text-white rounded">Apply Coupon</button>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <div className="flex justify-left mt-6">
                            <button className="w-[200px] py-3 bg-[#DB4444] text-white rounded">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
