
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';
import CatogoryList from './components/CatogoryList';
import Clock from './components/Clock';
import PosterImage from './components/PosterImage';
import Sale from './sale/page';
import Arrow from './components/Arrow';
import CatogoryImageList from './components/CatogoryImageList';
import BigPicture from './components/BigPicture';
import Arrival from './components/Arrival';
import Round from './components/Round';


function Home() {

  return (
    <div className='relative max-w-screen-2xl mx-auto '>
      <div className='flex flex-col lg:flex-row gap-6 '>

        {/* Category List */}
        <div className='w-full  lg:w-1/5 mt-8'>
          <CatogoryList />
        </div>

        <div className="hidden lg:flex h-[400px] min-w-0.5 bg-gray-300 ">
        </div>

        {/* Image Carousel with Radio Buttons */}
        <div className='flex-1 lg:w-1/2 ml-5'>
          <PosterImage />
        </div>
      </div>

      {/* Flash Sale */}
      <div className='flex gap-3 '>
        <div className='h-[30px] w-[15px] bg-[#DB4444] rounded ml-10 md:ml-24 mt-14'></div>
        {<div className='text-sm font-semibold text-[#DB4444]  font-sans  mt-16'>Today&apos;s</div>}
      </div>

      <div className='flex flex-col md:flex-row justify-between '>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold ml-10 md:ml-24 mt-6'>Flash Sales</h2>
        <div className='ml-10 lg:ml-0 xl:mr-[350px] mt-3'>
          <Clock />
        </div>

        {/* Arrow */}
       <div className='mr-12'>
       <Arrow />
       </div>
      </div>


      <div className='mx-10 md:mx-24 '>
        {/* Sales */}
        <Sale />
        {/* Centered Button */}
        <div className="flex justify-center mt-8">
          <button className="px-14 py-3 text-white rounded bg-[#DB4444] hover:bg-red-700">
            View All Products
          </button>
        </div>
      </div>

      <hr className='mt-10' />

      {/* Catogory */}
      <div className='flex gap-3 '>
        <div className='h-[30px] w-[15px] bg-[#DB4444] rounded ml-10 md:ml-24 mt-14'></div>
        <div className='text-sm font-semibold text-[#DB4444]  font-sans  mt-16'>Categories</div>
      </div>

      <div className='flex flex-col md:flex-row justify-between '>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold ml-10 md:ml-24 mt-6'>Browser By Category</h2>
        <div className='ml-10 lg:ml-0  mt-3  mx-10 md:mx-24 '>
          <Arrow />
        </div>
      </div>

      <div className=' mt-5 mx-auto md:mx-24 '>
        <CatogoryImageList />
      </div>

      <hr className='mt-10' />


      {/* product */}
      <div className='flex gap-3 '>
        <div className='h-[30px] w-[15px] bg-[#DB4444] rounded ml-10 md:ml-24 mt-14'></div>
        <div className='text-sm font-semibold text-[#DB4444]  font-sans  mt-16'>This Month</div>
      </div>

      <div className='flex flex-col md:flex-row justify-between '>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold ml-10 md:ml-24 mt-6'>Best Selling Products</h2>
        <div className="flex justify-center mt-8">
          <button className="px-14 py-3 text-white rounded bg-[#DB4444] hover:bg-red-700  mx-10 md:mx-24 ">
            View All
          </button>
        </div>

      </div>
      <div className='mx-10 md:mx-24 '>
        <Sale />
      </div>



      <div className='mt-6  md:mx-24 '>
        <BigPicture />
      </div>



      {/* Our Products */}
      <div className='flex gap-3 '>
        <div className='h-[30px] w-[15px] bg-[#DB4444] rounded ml-10 md:ml-24 mt-14'></div>
        <div className='text-sm font-semibold text-[#DB4444]  font-sans  mt-16'>Our Products</div>
      </div>

      <div className='flex flex-col md:flex-row justify-between '>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold ml-10 md:ml-24 mt-6'>Explore Our Products</h2>


        <div className='mx-10 md:mx-24 '>
          {/* Arrow */}
          <Arrow />
        </div>
      </div>


      <div className='mx-10 md:mx-24 '>
        {/* Sales */}
        <Sale />
        <Sale />
        {/* Centered Button */}
        <div className="flex justify-center mt-8 ">
          <button className="px-14 py-3 text-white rounded bg-[#DB4444] hover:bg-red-700">
            View All Products
          </button>
        </div>
      </div>


      <div className='flex gap-3 '>
        <div className='h-[30px] w-[15px] bg-[#DB4444] rounded ml-10 md:ml-24 mt-14'></div>
        <div className='text-sm font-semibold text-[#DB4444]  font-sans  mt-16'>Featured</div>
      </div>

      <div className='flex flex-col md:flex-row justify-between '>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold ml-10 md:ml-24 mt-6'>New Arrival</h2>
      </div>
      <div className=' mx-10 md:mx-24 mt-8 '>
        <Arrival />
      </div>



     {/* ROUNDED DIV */}
     <div className='mt-64 mb-10 xl:my-16'>
     <Round/>
     </div>



    </div>
  );
}

export default Home;
