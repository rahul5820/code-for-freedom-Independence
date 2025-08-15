import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center  h-20 bg-gradient-to-b from-orange-500 via-white to-green-600 font-bold pl-10 pr-10'>
      <a href='/' className='text-orange-600'>Project Tiranga </a>
      <a href='/' className='text-black'>HOME</a>  
      <a href='/about' className='text-black'>About</a>  
      <a href='/reels' className='text-black'>Reels</a>  
      <a href='/contrubute' className='text-black'>Contribute</a>  
    </div>
  )
}

export default Navbar
