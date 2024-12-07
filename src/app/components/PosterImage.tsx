'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { IoLogoApple } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

function PosterImage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { src: '/mobile.jpeg', alt: "Women's Fashion" },
    { src: '/images/fashion2.jpg', alt: "Men's Fashion" },
    { src: '/images/electronics.jpg', alt: "Electronics" },
    { src: '/images/lifestyle.jpg', alt: "Home & Lifestyle" },
    { src: '/images/medicine.jpg', alt: "Medicine" },
    { src: '/images/sports.jpg', alt: "Sports & Outdoor" },
    { src: '/images/baby.jpg', alt: "Baby's & Toys" },
    { src: '/images/groceries.jpg', alt: "Groceries & Pets" },
    { src: '/images/beauty.jpg', alt: "Health & Beauty" }
  ];

  return (
    <div className="relative bg-black p-4 md:p-0 my-10">
      {/* Positioned circles at the bottom center */}
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className='w-[15px] h-[15px] rounded-full bg-gray-400 hover:border-2 hover:border-white hover:bg-red-500'
          ></div>
        ))}
      </div>

      <div className='flex flex-col md:flex-row mt-10 justify-around'>
        {/* Displaying the Selected Image */}
        <div className='text-white my-auto mx-auto'>
          <div className='flex '>
            <IoLogoApple size={60} className='mb-4'/>
            <p className='text-2xl md:xl mt-6 ml-5'>iPhone 14 Series</p>
          </div>
          <h2 className='text-4xl  md:text-6xl font-semibold mb-4'>Up to 10%</h2>
          <h2 className='text-4xl md:text-6xl font-semibold'>off Voucher</h2>
          <h3 className='flex text-xl font-semibold underline underline-offset-8 my-6'>Shop Now <span className='ml-3 mt-2 '><FaArrowRight /></span></h3>
        </div>
        <div>
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="lg:h-[370px] object-cover mt-10"
            height={370}
            width={500}
          />
          </div>
      </div>
    </div>
  );
}

export default PosterImage;
