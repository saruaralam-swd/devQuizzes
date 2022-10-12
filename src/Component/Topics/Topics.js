import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData();
  const { data } = topics;

  return (
    <div className='h-full md:h-screen py-20'>
      <div className='grid md:grid-cols-4 gap-10 w-[80%] mx-auto'>
        {
          data.map(topic => <Topic key={topic.id} topic={topic}>Topic</Topic>)
        }
      </div>
    </div>
  );
};

export default Topics;