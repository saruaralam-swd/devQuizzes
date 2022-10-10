import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
  const {id, name, logo} = topic;

  return (
    <div className='border rounded-md text-white text-center shadow-lg shadow-white'>
      <img className='w-[80%] mx-auto mt-5' src={logo} alt="" />
      <h2 className='text-2xl font-semibold mt-2'> {name}</h2>
      <Link to={`/topics/quiz/${id}`} ><button className='w-full bg-blue-500 p-2 mt-3 rounded-b-md'>Start Quiz</button></Link>
    </div>
  );
};

export default Topic;