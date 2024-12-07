import Link from 'next/link'
import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'

function CatogoryList() {
  return (
    <div>
         <ul className='ml-10 xl:ml-24'>
          <li className='flex my-2 lg:my-4'>
           { <Link href='/' >Woman&apos;s Fashion</Link>}
            <span className='ml-10'><RiArrowDropRightLine size={30}/></span>
          </li>
          <li className='flex my-2 lg:my-4'>
           { <Link href='/'>Men&apos;s Fashion</Link>}
            <span className='ml-16'><RiArrowDropRightLine  size={30}/></span>
          </li>
          <li className='my-2 lg:my-4'>
            <Link href='/'>Electronics</Link>
          </li>
          <li className='my-2 lg:my-4'>
            <Link href='/'>Home & Lifestyle</Link>
          </li>
          <li className='my-2 lg:my-4'>
            <Link href='/'>Medicine</Link>
          </li>
          <li  className='my-2 lg:my-4'>
            <Link href='/'>Sports & Outdoor</Link>
          </li>
          <li  className='my-2 lg:my-4'>
            {<Link href='/'>Baby&apos;s & Toys</Link>}
          </li>
          <li  className='my-2 lg:my-4'>
            <Link href='/'>Groceries & Pets</Link>
          </li>
          <li  className='my-2 lg:my-4'>
            <Link href='/'>Health & Beauty</Link>
          </li>
        </ul>
    </div>
  )
}

export default CatogoryList