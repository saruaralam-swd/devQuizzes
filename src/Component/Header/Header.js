import React from 'react';
import Logo2 from '../../img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='md:flex md:justify-between items-center  px-[3%] space-y-5 md:space-y-0 p-2 border-b-2 '>
      <div>
        <Link className='text' to='/'><img className='w-[150px]' src={Logo2} alt="" /></Link>
      </div>

      <nav className='flex flex-col md:flex-row'>
        <NavLink className='text-[#051b29] uppercase font-semibold mx-2' to='/home'> {({ isActive }) => isActive ? 'active' : undefined}Home</NavLink>
        <NavLink className='text-[#051b29] uppercase font-semibold mx-2' to='/topics'>Topics</NavLink>
        <NavLink className='text-[#051b29] uppercase font-semibold mx-2' to='/pai'>Statistics</NavLink>
        <NavLink className='text-[#051b29] uppercase font-semibold mx-2' to='/blog'>Blog</NavLink>
      </nav>

      <div className='flex items-center space-x-5'>
        <Link className=' space-x-4'>
          <button className=' bg-[#197fc3] hover:bg-[#1569a1] duration-500 text-white px-4 py-1 rounded-md'>Sign Up</button>
          <button className=' ring-1 rounded-md px-4 py-1 hover:bg-[#197fc3] border-transparent duration-500'>Sign In</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;