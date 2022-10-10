import React from 'react';

const Blog = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-400'>
      <div className='bg-white rounded-md shadow-lg my-10 p-10'>
        <h2 className='text-3xl font-semibold text-center mb-10'>Which language runs in a web browser?</h2>
        <ul className='text-xl space-y-5'>
          <li className='space-x-3'>
            <input type="radio" name="answer" id="a" />
            <label htmlFor="a" >Java</label>
          </li>
          <li className='space-x-3'>
            <input type="radio" name="answer" id="b" />
            <label htmlFor="b" >Java</label>
          </li>
          <li className='space-x-3'>
            <input type="radio" name="answer" id="c" />
            <label htmlFor="c" >Java</label>
          </li>
          <li className='space-x-3'>
            <input type="radio" name="answer" id="d" />
            <label htmlFor="d" >Java</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;