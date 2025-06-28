import React from 'react';

const Responsive = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className='bg-white p-6 rounded shadow-md text-center w-80 md:w-[30rem]'>
        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-blue-600'>Hello responsive</h1>
        <p className='mt-4 text-sm md:text-base lg:text-lg text-gray-600'>The font and container changes conform the screen size</p>
      </div>
    </div>
  )
}

export default Responsive;