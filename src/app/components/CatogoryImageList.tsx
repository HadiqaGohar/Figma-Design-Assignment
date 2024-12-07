import React from 'react';
import { SlScreenSmartphone } from 'react-icons/sl'; // Smartphone Icon
import { HiOutlineComputerDesktop } from 'react-icons/hi2'; // Computer Icon
import { GiWatch } from 'react-icons/gi'; // Smartwatch Icon
import { FiCamera, FiHeadphones } from 'react-icons/fi'; // Camera & Headphones Icons
import { IoGameControllerOutline } from 'react-icons/io5'; // Game Controller Icon

function CatogoryImageList() {
  return (
    <div className="p-2 rounded-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4  text-center">
      {/* Category Item */}
      <div className="flex flex-col text-black hover:text-white items-center justify-center h-[150px] w-[180px] bg-white border rounded transition-all duration-300 hover:bg-[#db4444] ">
        <SlScreenSmartphone size={40}  />
        <p className="mt-2 font-semibold">Phone</p>
      </div>
      <div className="flex flex-col items-center text-black justify-center h-[150px] w-[180px] bg-white border rounded transition-all duration-300 hover:bg-[#db4444] hover:text-white">
        <HiOutlineComputerDesktop size={40}  />
        <p className="mt-2 font-semibold">Computer</p>
      </div>
      <div className="flex flex-col items-center text-black justify-center h-[150px] w-[180px] bg-white border rounded transition-all duration-300 hover:bg-[#db4444] hover:text-white">
        <GiWatch size={40}  />
        <p className="mt-2 font-semibold">SmartWatch</p>
      </div>
      <div className="flex flex-col items-center text-black justify-center h-[150px] w-[180px] bg-white border rounded transition-all duration-300 hover:bg-[#db4444] hover:text-white">
        <FiCamera size={40}  />
        <p className="mt-2 font-semibold">Camera</p>
      </div>
      <div className="flex flex-col items-center text-black justify-center h-[150px] w-[180px] bg-white border rounded transition-all duration-300 hover:bg-[#db4444] hover:text-white">
        <FiHeadphones size={40}  />
        <p className="mt-2 font-semibold">HeadPhones</p>
      </div>
      <div className="flex flex-col items-center text-black justify-center h-[150px] w-[180px] bg-white border rounded transition-all duration-300 hover:bg-[#db4444] hover:text-white">
        <IoGameControllerOutline size={40}  />
        <p className="mt-2 font-semibold">Gaming</p>
      </div>
    </div>
  );
}

export default CatogoryImageList;
