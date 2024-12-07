import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { CiDeliveryTruck } from 'react-icons/ci';
import { GrPowerCycle } from 'react-icons/gr';
import Image from 'next/image';

const saleData = [
  {
    id: 1,
    images: [
      '/game.jpeg',
      '/game.jpeg',
      '/game.jpeg',
      '/game.jpeg',
      // 'https://via.placeholder.com/150/5',
    ],
    title: 'HAVIT HV_G92 Gamepad',
    stock: 'In Stock',
    reviews: '(150 Reviews)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati neque maxime, temporibus aperiam culpa iste iusto facere repudiandae veritatis hic illo id? Blanditiis recusandae aspernatur beatae eligendi dolorem temporibus?',
    salePrice: '$120',
    price: '$160',
    catogorie : "Gaming",
    rating: 4,
  },
  {
    id: 2,
    images: [
      '/keyboard.jpeg',
      '/keyboard.jpeg',
      '/keyboard.jpeg',
      '/keyboard.jpeg',
      // 'https://via.placeholder.com/150/5',
    ],
    title: 'Keyboard Multi Light',
    stock: 'In Stock',
    reviews: '(150 Reviews)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati neque maxime, temporibus aperiam culpa iste iusto facere repudiandae veritatis hic illo id? Blanditiis recusandae aspernatur beatae eligendi dolorem temporibus?',
    salePrice: '$120',
    price: '$160',
    catogorie : "Keyboard",
    rating: 3,
  },
  {
    id: 3,
    images: [
      '/led.jpeg',
      '/led.jpeg',
      '/led.jpeg',
      '/led.jpeg',
      // 'https://via.placeholder.com/150/5',
    ],
    title: 'LED ',
    stock: 'In Stock',
    reviews: '(150 Reviews)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati neque maxime, temporibus aperiam culpa iste iusto facere repudiandae veritatis hic illo id? Blanditiis recusandae aspernatur beatae eligendi dolorem temporibus?',
    salePrice: '$120',
    price: '$160',
    catogorie : "LED",
    rating: 5,
  },
  {
    id: 4,
    images: [
      '/chair.jpeg',
      '/chair.jpeg',
      '/chair.jpeg',
      '/chair.jpeg',
      // 'https://via.placeholder.com/150/5',
    ],
    title: 'Classic Chair',
    stock: 'Out Stock',
    reviews: '(150 Reviews)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati neque maxime, temporibus aperiam culpa iste iusto facere repudiandae veritatis hic illo id? Blanditiis recusandae aspernatur beatae eligendi dolorem temporibus?',
    salePrice: '$120',
    price: '$160',
    catogorie : "Chair",
    rating: 4,
  },
  {
    id: 5,
    images: [
      '/blackgame.jpeg',
      '/blackgame.jpeg',
      '/blackgame.jpeg',
      '/blackgame.jpeg',
      // 'https://via.placeholder.com/150/5',
    ],
    title: 'Gamepad',
    stock: 'In Stock',
    reviews: '(150 Reviews)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati neque maxime, temporibus aperiam culpa iste iusto facere repudiandae veritatis hic illo id? Blanditiis recusandae aspernatur beatae eligendi dolorem temporibus?',
    salePrice: '$120',
    price: '$160',
    catogorie : "Gaming",
    rating: 4,
  },
  
];

// Helper function to render stars
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} className={index < fullStars ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    ));
  return stars;
};

// Dynamic page component
const SaleIdPage = ({ params }: { params: { id: string } }) => {
  const saleItem = saleData.find((item) => item.id === parseInt(params.id, 10));

  if (!saleItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className='max-w-screen-2xl mx-auto  '>
      {/* Breadcrumb */}
      <p className="mt-10 md:ml-20 mx-auto text-center text-xs sm:text-sm text-gray-600 mb-4">Account / {saleItem.catogorie} / {saleItem.title} </p>

   
    <div className="justify-around p-6 flex flex-col md:flex-row gap-6 lg:mx-20">
        
      {/* Image Section */}
      <div className="md:w-1/2  flex flex-col md:flex-row">
        {/* Thumbnail Images */}
        <div className="hidden md:flex mt-8 md:flex-col gap-3 flex-row md:space-y-2 my-4 mx-auto">
          {saleItem.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              height={120}
              width={120}
              className="md:w-[120px] md:h-[120px] w-16 h-16 object-cover  cursor-pointer"
            />
          ))}
        </div>

        {/* Big Image */}
        <div className="ml-4 ">
          <Image
            src={saleItem.images[0]}
            alt={saleItem.title}
            height={700}
            width={600}
            className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] object-contain"
          />
        </div>

         {/* Thumbnail Images */}
         <div className=" md:hidden flex md:flex-col gap-3 flex-row md:space-y-2 my-4 mx-auto">
          {saleItem.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              height={128}
              width={128}
              className="md:w-32 md:h-32 w-16 h-16 object-cover  cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="md:w-1/3 mt-10 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{saleItem.title}</h2>
        <p className='flex'>
          <span className="flex">
            {renderStars(saleItem.rating)}
          </span>{' '}
          <span className="ml-3 text-gray-500">{saleItem.reviews}</span> <span className='ml-3'>  | </span> {' '}
          <span className="ml-3 text-green-600">{saleItem.stock}</span>
        </p>
        <p className="text-2xl">
          <span className="text-red-500">{saleItem.salePrice}</span>{' '}
          <span className="line-through text-gray-400">{saleItem.price}</span>
        </p>
        <p>{saleItem.description}</p>

      

        <hr />

        <div className='flex'>
          <h3>Colour:</h3>
          <span className='flex ml-3 gap-2'>
            <div className='h-[25px] w-[25px] bg-gray-400 border-2 border-gray-500 hover:border-black rounded-full'></div>
            <div className='h-[25px] w-[25px] bg-red-400 border-2 border-gray-500 hover:border-black rounded-full'></div>
          </span>
        </div>


        <div className='flex'>
          <h3>Size :</h3>
          <span className='ml-3 flex gap-2'>
            <div className='h-[30px] w-[30px] border-2 pl-1 rounded hover:bg-red-500 hover:text-white'>xs</div>
            <div className='h-[30px] w-[30px] border-2 pl-2 rounded hover:bg-red-500 hover:text-white'>s</div>
            <div className='h-[30px] w-[30px] border-2 pl-1.5 rounded hover:bg-red-500 hover:text-white'>M</div>
            <div className='h-[30px] w-[30px] border-2 pl-2 rounded hover:bg-red-500 hover:text-white'>L</div>
            <div className='h-[30px] w-[30px] border-2 pl-1 rounded hover:bg-red-500 hover:text-white'>XL</div>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center border-2 ">
            <button className='border-r-2 hover:bg-red-500 hover:text-white text-xl w-8 h-8 pb-1'>-</button>
            <span className="px-4 text-xl">1</span>
            <button className='border-l-2 hover:bg-red-500 hover:text-white text-xl w-8 h-8 pb-1'>+</button>
          </div>
          <button className="bg-red-500 text-white px-10 py-2 rounded-md">
            Buy Now
          </button>
          <button>
            <IoMdHeartEmpty className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-4 border-2 p-4 ">
          <div className="flex items-center gap-2">
            <CiDeliveryTruck className="text-3xl" />
            <div>
              <p className="font-semibold">Free Delivery</p>
              <p className="text-sm text-gray-500">
                Enjoy free delivery on eligible orders.
              </p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <GrPowerCycle className="text-3xl" />
            <div>
              <p className="font-semibold">Return Policy</p>
              <p className="text-sm text-gray-500">
                Hassle-free returns within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SaleIdPage;
