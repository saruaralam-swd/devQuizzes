import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData();
  const { questions } = quiz.data;

  return (
    <div className='bg-[#E8EDF3]'>
      <div className='flex flex-col items-center justify-center bg-gray-400'>
        {
          questions.map(question => <Question key={question.id} question={question}></Question>)
        }
        <button className='w-[90%] md:w-[60%]  bg-[#8e44ad] hover:bg-[#732d91] p-4 text-white text[1.1rem] font-semibold rounded-md'>Submit All</button>
      </div>
    </div>
  );
};

export default Quiz;