import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
  const {options, correctAnswer } = question;

  const clickHandle = (e) => {
    const selectText = e.target.textContent;

    if (selectText === correctAnswer) {
      toast('right answer');
    }
    else {
      toast('wrong answer');
    }
  }

  return (
    <div className='w-[90%] md:w-[60%]'>
      <div className='bg-white rounded-md shadow-lg my-10'>
        <div className='p-10'>
          <h2 className='text-3xl font-semibold text-center mb-10'>{question?.question}</h2>
          <ul className='text-xl space-y-5'>
            {
              options.map((option, idx) =>
                <div key={idx} onClick={clickHandle}>
                  {option}
                </div>
              )
            }
          </ul>
        </div>
        <button className='w-full text-white bg-[#8e44ad] hover:bg-[#732d91] p-4 text-[1.1rem] font-semibold rounded-b-md'>Submit</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;