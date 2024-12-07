import React from 'react'
import TopText from './TopText'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='mx-auto  text-center'>
      <TopText />
      <div className='max-w-screen-2xlm mx-auto'>
        <Navbar />
      </div>

      <hr />
    </div>
  )
}

export default Header