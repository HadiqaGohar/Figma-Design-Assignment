'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5'; // Close icon import
import { LuUser } from 'react-icons/lu';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // Function to close the menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Element;

        // Close menu if clicked outside of the menu
        if (menuOpen && !target.closest('.menu') && !target.closest('.lg:hidden')) {
            setMenuOpen(false);
        }

        // Close user menu if clicked outside of the user menu
        if (userMenuOpen && !target.closest('.user-menu') && !target.closest('.user-menu-button')) {
            setUserMenuOpen(false);
        }
    };

    // Adding an event listener for clicks outside the menu
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [menuOpen, userMenuOpen]);

    return (
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl bg-[#FFFFFF] px-4 py-3 mt-5">
            {/* Logo */}
            <div className="font-bold text-2xl lg:ml-20">
                <h1>Exclusive</h1>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="lg:hidden">
                <GiHamburgerMenu
                    size={25}
                    className="text-gray-800 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>

            {/* Navigation Links for Desktop */}
            <div className={`hidden lg:flex gap-6`}>
                <ul className="flex gap-4 lg:gap-14 text-gray-800 font-sans">
                    <li>
                        <Link href="/" className="hover:underline hover:underline-offset-8">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline hover:underline-offset-8">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline hover:underline-offset-8">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup" className="hover:underline hover:underline-offset-8">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Navigation Links for Mobile */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} menu`}>
                <ul className="flex flex-col gap-4 text-gray-800 font-sans absolute top-16 left-0 right-0 bg-[#FFFFFF] py-4 px-4 border-t border-gray-200">
                    <li>
                        <Link
                            href="/"
                            className="hover:underline hover:underline-offset-8"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:underline hover:underline-offset-8"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:underline hover:underline-offset-8"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/signup"
                            className="hover:underline hover:underline-offset-8"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {/* Close Button */}
                <div className="absolute top-20  right-4">
                    <IoCloseSharp
                        size={30}
                        className="text-gray-800 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    />
                </div>
            </div>

            {/* Search and Icons */}
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                {/* Search Bar */}
                <div className="flex items-center bg-[#F5F5F5] border hover:border-gray-500 rounded-md px-2 py-1 flex-grow sm:flex-grow-0">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="outline-none text-sm w-full bg-[#F5F5F5] p-1"
                    />
                    <CiSearch className="text-gray-800 text-lg mr-2" size={25} />
                </div>

                {/* Icons */}
                <div className="flex gap-4 text-gray-800 text-xl">
                    <Link href="/wishlist">
                        <IoMdHeartEmpty size={25} />
                    </Link>
                    <Link href="/cart">
                        <IoCartOutline size={25} />
                    </Link>
                    <div
                        className="bg-[#DB4444] h-[27px] w-[27px] p-0.5 rounded-full cursor-pointer user-menu-button"
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                    >
                        <LuUser size={23} color="white" />
                    </div>
                    {/* User Menu */}
                    {userMenuOpen && (
                        <div className="z-10 absolute mt-14 ml-24 md:ml-0 md:top-32 md:right-8 lg:right-10 right-40 text-xs text-white bg-[#6a646b] shadow-lg rounded-md w-48 p-2 user-menu">
                            <ul className="text-white text-left">
                                <li className="py-2 hover:bg-gray-200 hover:text-black px-2">
                                    <Link href="/account">Manage My Account</Link>
                                </li>
                                <li className="py-2 hover:bg-gray-200 hover:text-black px-2">
                                    <Link href="/profile">My Order</Link>
                                </li>
                                <li className="py-2 hover:bg-gray-200 hover:text-black px-2">
                                    <Link href="/settings">My Cancellations</Link>
                                </li>
                                <li className="py-2 hover:bg-gray-200 hover:text-black px-2">
                                    <Link href="/orders">My Reviews</Link>
                                </li>
                                <li className="py-2 hover:bg-gray-200 hover:text-black px-2">
                                    <Link href="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
