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
      </div>
    </div>
  );
};

export default Quiz;