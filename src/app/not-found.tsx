import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className="bg-white px-4 py-8 sm:px-6 md:py-12 max-w-screen-2xl mx-auto">
            {/* Breadcrumb */}
            <p className="text-xs sm:text-sm text-gray-600 mb-4">Home / 404 Error</p>
            <h2 className='text-7xl text-center mt-16 font-semibold'>404 Not Found</h2>
            <p className='text-center my-10'>Your visited page is not found. You may go back to the home page.</p>
            <div className="flex justify-center">
                <Link href='/'>
                    <button className="my-16 w-[300px] py-3 px-3 mt-4 bg-[#DB4444] text-white rounded">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
