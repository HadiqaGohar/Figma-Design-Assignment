import React from 'react';
import Image from 'next/image';

function Arrival() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {/* Container for the first item */}
      <div className="relative h-[300px] xl:h-[600px] mb-14 md:mb-0">
        <Image src="/gsp.jpeg" alt="PlayStation 5" className=" object-cover " height={300} width={1000} />
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end items-start bg-black bg-opacity-50 text-white text-left p-6">
          <h2 className="text-2xl sm:text-3xl font-bold">PlayStation 5</h2>
          <p className="text-xs sm:text-sm">Black and White version of the PS5</p>
          <p className="text-xs sm:text-sm">Coming out on sale.</p>
          <br />
          <p className="text-md underline">Shop Now</p>
        </div>
      </div>

      {/* Container for other items */}
      <div className="grid gap-4 h-[300px] xl:h-[800px]">
        <div className="relative h-[150px] xl:h-[360px]">
          <Image src="/girl.jpeg" alt="Woman Collections" className=" h-full object-cover" height={100} width={700} />
          <div className="absolute inset-0 flex flex-col justify-end items-start bg-black bg-opacity-50 text-white text-left p-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Woman Collections</h2>
            <p className="text-xs sm:text-sm">Featured woman collections that</p>
            <p className="text-xs sm:text-sm">Give you another vibe.</p>
            <br />
            <p className="text-md underline">Shop Now</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[400px]">
          <div className="relative h-[140px] sm:h-[280px]">
            <Image src="/3sp.jpeg" alt="Speakers" className=" h-full object-cover" width={350} height={200} />
            <div className="absolute inset-0 flex flex-col justify-end items-start bg-black bg-opacity-50 text-white text-left p-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Speakers</h2>
              <p className="text-xs sm:text-sm">Amazon wireless speakers</p>
              <br />
              <p className="text-md underline">Shop Now</p>
            </div>
          </div>
          <div className="relative h-[140px] mb-32 md:mb-0 sm:h-[280px]">
            <Image src="https://img.freepik.com/premium-photo/luxurious-perfume-bottle-with-black-details-dark-background_7023-57047.jpg" alt="Perfume" className=" h-full object-cover" width={350} height={200} />
            <div className="absolute inset-0 flex flex-col justify-end items-start bg-black bg-opacity-50 text-white text-left p-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Perfume</h2>
              <p className="text-xs sm:text-sm">GUCCI INTENSE OUD EDP</p>
              <br />
              <p className="text-md underline">Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;
