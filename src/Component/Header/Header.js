import React from 'react';
import Logo from '../../img/logo.png'
import {  MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=' md:flex md:justify-between items-center bg-[#140342] text-white px-[3%] space-y-5 md:space-y-0 p-3'>
      <div>
        <Link className='text' to='/'><img className='w-[210px]' src={Logo} alt="" /></Link>
      </div>

      <nav className='space-x-10'>
        <Link to='/'>Home</Link>
        <Link to='/topics'>Topics</Link>
        <Link to='/statist'>Statist</Link>
        <Link to='/chart'>Chart</Link>
        <Link to='/blog'>Blog</Link>
      </nav>

      <div className='flex items-center space-x-5'>
        <MagnifyingGlassIcon className='h-6 w-6' />
        <ShoppingCartIcon className='h-6 w-6' />
        <Link>
          <button className='bg-white text-[#140342] hover:bg-blue-600 hover:text-white font-semibold duration-500 border-transparent py-2 px-8 rounded-md'>Log in</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;