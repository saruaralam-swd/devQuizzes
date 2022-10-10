import React, { useState } from 'react';

const Question = ({ question }) => {
  const { id, options, correctAnswer, } = question;

  let correct = 0;
  let wrong = 0;

  // select answer
  const [text, setText] = useState('');
  const clickHandle = (event) => {
    const newText = (event.target.textContent);
    setText(newText);

    const answer = (text === correctAnswer ? true : false)
    if (answer) {
      correct = correct + 1;
    } else {
      wrong = wrong + 1;
    }
  };

  const getAnswer = () => {

  };

  return (
    <div className='w-[90%] md:w-[60%]'>
      <div className='bg-white rounded-md shadow-lg my-10'>
        <div className='p-10'>
          <h2 className='text-3xl font-semibold text-center mb-10'>{question?.question}</h2>
          <ul className='text-xl space-y-5'>
            {
              options.map((option, idx) =>
                <li key={idx} className='space-x-3' onClick={clickHandle}>
                  <input type="radio" name={id} id={option} value={option} />
                  <label htmlFor={option}>{option}</label>
                </li>
              )
            }
          </ul>
        </div>
        <button onClick={getAnswer} className='w-full text-white bg-[#8e44ad] hover:bg-[#732d91] p-4 text-[1.1rem] font-semibold rounded-b-md'>Submit</button>
      </div>
    </div>
  );
};

export default Question;

