import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importing star icon from react-icons
import Image from 'next/image';
function Product() {
  // Sale items data with unique IDs
  const saleItems = [
    {
      id: 1,
      image: 'game.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4, // Number of filled stars
      itemCount: 67,
    },
    {
      id: 2,
      image: 'game.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
    },
    {
      id: 3,
      image: 'game.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
    },
    {
      id: 4,
      image: 'game.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
    },
    {
      id: 5,
      image: 'game.jpeg',
      title: 'HAVIT HV_G92 Gamepad',
      salePrice: '$120',
      price: '$160',
      rating: 4,
      itemCount: 67,
    },
  ];

  return (
    <div className="mt-8 max-w-screen-2xl mx-auto">
      {/* Sale Items Grid */}
      <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {saleItems.map((item) => (
          <div
            key={item.id} // Use id for unique keys
            id={`sale-item-${item.id}`} // Add id attribute to each div
            className="w-full flex flex-col items-center rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="bg-gray-100 w-full flex items-center justify-center p-4">
              <Image
                src={item.image}
                alt={item.title}
                className="w-[150px] h-[150px] object-cover"
                height={150}
                width={150}
                
              />
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

export default Product;
