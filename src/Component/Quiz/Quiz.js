import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const quiz = useLoaderData();
  const { questions } = quiz.data;

  return (
    <div className='bg-[#E8EDF3] h-full md:h-screen'>
      <div>
        {
          questions.map(question => <li key={question.id}>A</li>)
        }
      </div>
    </div>
  );
};

export default Quiz;