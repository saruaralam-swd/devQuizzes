import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/error.png'

const Error = () => {
  return (
    <div className=' h-screen flex items-center justify-center bg-[#F8F8F8]'>
      <div className='text-center space-y-4'>
        <img  src={img} alt="" />
        <h1 className='text-6xl text-gray-500'>404 </h1>
        <p className=' text-gray-400 text-2xl'>Page not found</p>
        <div>
          <Link to='/home'>
            <button className=' text-white bg-[#8e44ad] hover:bg-[#732d91] px-5 py-1 text-[1.1rem] font-semibold rounded-full'>go home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;