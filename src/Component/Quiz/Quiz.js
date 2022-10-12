import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData();
  const { questions, name } = quiz.data;

  return (
    <div className='pt-10' >
      <h1 className='text-3xl text-center font-semibold '>Quiz of <span className='text-indigo-600'>{name}</span></h1>
      <div className='flex flex-col items-center justify-center '>
        {
          questions.map(question => <Question key={question.id} question={question}></Question>)
        }
      </div>
    </div>
  );
};

export default Quiz;