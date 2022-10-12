import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

import img from '../../img//heroimg.png';

const Home = () => {
  const topics = useLoaderData();
  const { data } = topics;

  return (
    <div>
      <section className='text-[#051b29] md:flex items-center justify-around pt-10 md:pt-0'>
        <div className='p-[5%] md:m-0 space-y-2'>
          <h2 className='text-[1.8rem] md:text-5xl font-semibold leading-snug'>All you need to be a good <br /> software engineer</h2>
          <button className='bg-[#7f1052] hover:bg-[#520a35] text-white px-4 py-1 rounded'>Become a Member</button>
          <p>Get latest quiz updates related to software engineering</p>
        </div>
        <div className=''>
          <img src={img} alt="" />
        </div>
      </section>

      <section className=' h-full md:h-screen pt-20 '>
        <h1 className='blue text-4xl font-semibold text-center mb-10'>Quiz Topics </h1>
        <div className='grid md:grid-cols-4 gap-10 w-[80%] mx-auto'>
          {
            data.map(topic => <Topic key={topic.id} topic={topic}>Topic</Topic>)
          }
        </div>
      </section>

      <footer className='pt-10'>
        <p className='blue text-sm font-semibold text-center mb-10'>Copyright &copy; 2022. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;