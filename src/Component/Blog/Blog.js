import React from 'react';

const Blog = () => {
  return (
    <section className=' max-w-3xl mx-auto'>
      <div className='p-4'>
        <h1 className='text-2xl text-[#197fc3] hover:underline'>#. What is the purpose of react router?</h1>
        <p> React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API. it's makes our root component clear, maintainable and readable</p>
      </div>

      <div className='p-4'>
        <h1 className='text-2xl text-[#197fc3] hover:underline'>#. How does conText API Works?</h1>
        <p ><span className='text-gray-500 font-semibold'>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</span> In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. </p>
      </div>

      <div className='p-4'>
        <h1 className='text-2xl text-[#197fc3] hover:underline'>#. What is useRef() ?</h1>
        <p ><span className=' text-gray-500 font-semibold'> useRef is like a “box” that can hold a mutable value in its .current property</span> It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        <p>Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries</p>
      </div>
    </section>
  );
};

export default Blog;