import { EyeIcon, cir } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
  const { id, options, correctAnswer } = question;

  const clickHandle = (e) => {
    const selectText = e.target.textContent;

    if (selectText === correctAnswer) {
      toast.success('Right Answer');
    }
    else {
      toast.error('Wrong Answer!!!');
    }
  }

  const eyeHandle = () => toast.info(correctAnswer); 

  return (
    <div className='w-[90%] md:w-[60%]'>
      <div className='bg-white rounded-md shadow-lg my-10'>
        <div className='p-10'>
          <div className='flex gap-5 items-start justify-between'>
            <h2 className='text-3xl font-semibold text-center mb-10'>{question?.question}</h2>
            <button onClick={eyeHandle}><EyeIcon className="h-6 w-6 " /></button>
          </div>
          <ul className='text-xl space-y-5'>
            {
              options.map((option, idx) =>
                <li key={idx} className=' space-x-2'>
                  <input type="radio" id={option} name={id} value={option} />
                  <label onClick={clickHandle} htmlFor={option}>{option}</label>
                </li>
              )
            }
          </ul>
        </div>
        {/* <button className='w-full text-white bg-[#8e44ad] hover:bg-[#732d91] p-4 text-[1.1rem] font-semibold rounded-b-md'>Submit</button> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;