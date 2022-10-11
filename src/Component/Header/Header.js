import React from 'react';
import Logo from '../../img/logo-1.svg'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className=' md:flex md:justify-between items-center bg-[#140342] text-white px-[3%] space-y-5 md:space-y-0 p-3'>
      <div>
        <Link className='text' to='/'><img className='w-[180px]' src={Logo} alt="" /></Link>
      </div>

      <nav className='space-x-10'>
        <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
        <NavLink to='/topics'>Topics</NavLink>
        <NavLink to='/statist'>Statist</NavLink>
        <NavLink to='/chart'>Chart</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
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