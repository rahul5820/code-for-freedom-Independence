import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center  h-20 text-black font-bold pl-10 pr-10'>
      <h3 className='text-orange-500'>Project Tiranga </h3>
      <h3 className='text-green-500'>HOME</h3>  
      <h3 className='text-orange-600'>Reels</h3>  
      <h3 className='text-green-600'>About</h3>  
      <h3 className='text-orange-400'>Contribute</h3>  
    </div>
  )
}

export default Navbar
