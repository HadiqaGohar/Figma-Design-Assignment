import React from 'react';
import { IoSendSharp } from 'react-icons/io5';
import { BiLogoPlayStore } from 'react-icons/bi';
import { SiApple } from 'react-icons/si';
import { TiSocialFacebook } from 'react-icons/ti';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { RiLinkedinLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto max-w-screen-2xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Subscribe Section */}
                <div>
                    <h2 className="text-xl font-bold">Exclusive</h2>
                    <h3 className="text-lg font-semibold mt-4">Subscribe</h3>
                    <p className="text-sm mt-2">Get 10% off all your first orders</p>
                    <div className="flex items-center mt-4">
                        <div className="relative flex items-center w-full">
                            {/* Icon inside the input */}
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-2 text-sm text-white  bg-transparent border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <IoSendSharp className="absolute right-3 text-gray-400 text-xl" />
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div>
                    <h2 className="text-xl font-bold">Support</h2>
                    <p className="text-sm mt-4">111 Bijoy Sarani, Dhaka,</p>
                    <p className="text-sm">DH 1515, Bangladesh.</p>
                    <p className="text-sm mt-2">exclusive@gmail.com</p>
                    <p className="text-sm mt-2">+12345-12345-1234</p>
                </div>

                {/* Account Section */}
                <div>
                    <h2 className="text-xl font-bold">Account</h2>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link href='/myaccount'>My Account</Link>
                        </li>
                        <li><Link href='/login'>Login / Register</Link></li>
                        <li><Link href='/cart'>Cart</Link></li>
                        <li><Link href='/wishlist'>Wishlist</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                    </ul>
                </div>

                {/* Quick Link Section */}
                <div>
                    <h2 className="text-xl font-bold">Quick Link</h2>
                    <ul className="mt-4 space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Download App Section */}
                <div>
                    <h2 className="text-xl font-bold">Download App</h2>
                    <p className="text-sm mt-4">Save $3 with App New User Only</p>
                    <div className="flex items-center mt-4">
                        {/* Placeholder for QR Code */}
                        <div className="w-24 h-24 bg-gray-400 rounded mr-4">
                            <Image src="https://www.hellotech.com/guide/wp-content/uploads/2020/05/HelloTech-qr-code-1024x1024.jpg" alt="" height={96} width={96} />
                        </div>
                        <div className="space-y-2">
                            {/* Google Play */}
                            <div className="flex items-center border rounded p-0.5">
                                <BiLogoPlayStore className="text-2xl mr-2" />
                                <div>
                                    <p className="text-xs">GET IT ON</p>
                                    <p className="font-semibold">Google Play</p>
                                </div>
                            </div>
                            {/* App Store */}
                            <div className="flex items-center border rounded p-0.5">
                                <SiApple className="text-2xl mr-2" />
                                <div>
                                    <p className="text-xs">Download on the</p>
                                    <p className="font-semibold">App Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-6">
                        <TiSocialFacebook className="text-2xl cursor-pointer" />
                        <CiTwitter className="text-2xl cursor-pointer" />
                        <FaInstagram className="text-2xl cursor-pointer" />
                        <RiLinkedinLine className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
            {/* Powered by Hadiqa Gohar and Place Logo */}
            <div className="text-center text-sm mt-6">
                <p>&copy; 2024 Hadiqa Gohar | Powered by <span className="font-semibold">Place</span> Logo</p>
            </div>
        </footer>
    );
}

export default Footer;
