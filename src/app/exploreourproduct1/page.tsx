import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import Image from 'next/image';

function ExplorOurProduct1() {
  // Sale items data with unique IDs
  const saleItems = [
    {
      id: 1,
      image: '/game.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4, // Number of filled stars
      itemCount: 67,
      href : '/exploreourproduct1/1'
    },
    {
      id: 2,
      image: '/camera.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
      href : '/exploreourproduct1/2'
    },
    {
      id: 3,
      image: '/laptop.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
      href : '/exploreourproduct1/3'
    },
    {
      id: 4,
      image: '/beauty.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
      href : '/exploreourproduct1/4'
    },
    {
      id: 5,
      image: '/chair.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
      href : '/exploreourproduct1/5'
    },
  ];

  return (
    <div className="mx-16 mt-8 max-w-screen-2xl md:mx-auto">
      {/* Sale Items Grid */}
      <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {saleItems.map((item) => (
          <div
            key={item.id} // Use id for unique keys
            id={`sale-item-${item.id}`} // Add id attribute to each div
            className="w-full flex flex-col items-center rounded-lg overflow-hidden group" // Added group class for hover effect
          >
            {/* Image Section */}
            <div className="relative bg-gray-100 w-full flex flex-col items-center justify-center p-4 group">
              <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Top-right 30px divs in column layout with icons */}
                <div className="bg-white h-[25px] w-[25px] p-1 rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty />
                </div>
                <div className="bg-white h-[25px] w-[25px] p-1 rounded-full flex items-center justify-center">
                  <IoEyeOutline />
                </div>
              </div>
              <div className="mb-36 mr-40 absolute text-xs h-[25px] p-1 w-[45px] rounded text-white font-normal bg-red-500">
                -20%
              </div>
              <Image
                src={item.image}
                alt={item.title}
                className="w-[150px] h-[150px] object-cover"
                height={150}
                width={150}
              />
              {/* Button Section */}
              <Link href={item.href}>
              <div className="absolute mt-36 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="md:w-60 w-full flex items-center justify-center text-white rounded bg-gray-800 py-2">
                  <span className="mr-2">
                    <AiOutlineShoppingCart />
                  </span>
                  Add to Cart
                </button>
              </div>
              </Link>
            </div>


            {/* Text Section */}
            <div className="p-4 bg-white w-full text-left text-sm">
              {/* Title */}
              <h3 className="text-lg font-medium mb-1">{item.title}</h3>
              {/* Prices */}
              <div className="flex items-center justify-start gap-2 mb-2">
                <span className="text-red-500 font-semibold">{item.salePrice}</span>
                <span className="line-through text-gray-400">{item.price}</span>
              </div>
              {/* Rating */}
              <div className="flex items-start justify-start mb-2">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={starIndex < item.rating ? 'text-yellow-500' : 'text-gray-300'}
                  />
                ))}
                <span className="text-gray-500 ml-3">({item.itemCount})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorOurProduct1;
