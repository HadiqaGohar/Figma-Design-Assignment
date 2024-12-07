'use client'; 
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

function Cart() {
    const [quantity, setQuantity] = useState(1);

    // Functions for updating the quantity
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="bg-white px-6 py-8 max-w-screen-2xl mx-auto">
            <p className="text-sm text-gray-600">Home / Cart</p>

            {/* Product Table */}
            <div className="shadow-sm my-4 p-4">
                <table className="w-full text-left table-fixed">
                    <thead>
                        <tr className="font-semibold border-b">
                            <th className="py-2 w-1/4">Product</th>
                            <th className="py-2 w-1/4">Price</th>
                            <th className="py-2 w-1/4">Quantity</th>
                            <th className="py-2 w-1/4 text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* First Product */}
                        <tr className="border-b">
                            <td className="py-4 flex flex-col md:flex-row items-center space-x-4">
                                <Image src="/led.jpeg" alt="LCD Monitor" className="w-20 h-20 object-cover" height={80} width={80}/>
                                <p>LCD Monitor</p>
                            </td>
                            <td className="py-4">$650</td>
                            <td className="py-4">
                                <div className="flex items-center border-2 p-2 space-x-2 max-w-[90px]">
                                    <button onClick={decreaseQuantity} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                    <p>{quantity}</p>
                                    <button onClick={increaseQuantity} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                </div>
                            </td>
                            <td className="py-4 text-right">${650 * quantity}</td>
                        </tr>

                        {/* Second Product */}
                        <tr className="border-b">
                            <td className="py-4 flex flex-col md:flex-row  items-center space-x-4">
                                <Image src="/game.jpeg" alt="Game" className="w-20 h-20 object-cover"  height={80} width={80}/>
                                <p>Game </p>
                            </td>
                            <td className="py-4">$650</td>
                            <td className="py-4">
                                <div className="flex items-center border-2 p-2 space-x-2 max-w-[90px]">
                                    <button onClick={decreaseQuantity} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                    <p>{quantity}</p>
                                    <button onClick={increaseQuantity} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                </div>
                            </td>
                            <td className="py-4 text-right">${650 * quantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Cart Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                <button className="px-6 py-2 border-2 border-gray-600 rounded">Return To Shop</button>
                <button className="px-6 py-2 border-2 border-gray-600 rounded">Upgrade Cart</button>
            </div>

            <div className='flex flex-col sm:flex-row justify-between'>
                {/* Coupon Code Section */}
                <div className="my-6 sm:my-0">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="border px-4 py-2 w-full"
                        />
                        <button className="w-[200px] text-sm px-6 py-3 bg-[#DB4444] text-white">Apply Coupon</button>
                    </div>
                </div>

                {/* Cart Total Section */}
                <div className="border-2 rounded py-8 px-16 mt-6 sm:mt-0">
                    <h2 className="text-xl font-semibold">Cart Total</h2>
                    <div className="flex justify-between py-2">
                        <h3>Subtotal</h3>
                        <p>$1750</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-2">
                        <h3>Shipping</h3>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-2">
                        <h3>Total</h3>
                        <p>$1750</p>
                    </div>
                    <hr />
                    <Link href='/checkout'>
                        <button className="w-full py-3 px-3 mt-4 bg-[#DB4444] text-white rounded">Proceed to Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
