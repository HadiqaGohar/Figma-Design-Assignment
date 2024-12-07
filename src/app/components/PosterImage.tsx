'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function PosterImage() {
    const [selectedImage, setSelectedImage] = useState(0);

    const images = [
      { src: '/header.png', alt: "Women's Fashion" },
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
      <div className="relative">
        {/* Positioned circles at the bottom center */}
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {[...Array(7)].map((_, index) => (
            <div 
              key={index} 
              className='w-[15px] h-[15px] rounded-full bg-gray-400 hover:border-2 hover:border-white hover:bg-red-500' 
            ></div>
          ))}
        </div>

        {/* Displaying the Selected Image */}
        <Image 
          src={images[selectedImage].src} 
          alt={images[selectedImage].alt} 
          className="lg:h-[370px] object-cover mt-10"
          height={370} 
          width={1500}
        />
      </div>
    );
}

export default PosterImage;
