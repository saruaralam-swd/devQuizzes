import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
  const Topics = useLoaderData();
  const { data } = Topics;

  return (
    <div>
      <section className='hero-section flex justify-center items-center'>
        <h1 className='text-7xl text-white font-semibold leading-tight'>Test your knowledge by <br></br> taking quizzes</h1>
      </section>

      <section className=' bg-[#404b61] h-full md:h-screen pt-20'>
        <div className='grid md:grid-cols-4 gap-10 w-[80%] mx-auto'>
          {
            data.map(topic => <Topic key={topic.id} topic={topic}>Topic</Topic>)
          }
        </div>
      </section>
    </div>
  );
};

export default Home;