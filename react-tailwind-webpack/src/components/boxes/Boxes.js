import React from 'react';

const Sandbox = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
      <div className='bg-white p-6 rounded shadow-md flex flex-col gap-4'>
        <div className='bg-green-500 text-white p-4 rounded w-32 text-center'>Box two (1)</div>
        <div className='bg-yellow-400 text-white p-4 rounded w-32 text-center'>Box one (2)</div>
        <div className='bg-red-500 text-white p-4 rounded w-32 text-center'>Box three (3)</div>
      </div>
    </div>
  );
};

export default Sandbox;
