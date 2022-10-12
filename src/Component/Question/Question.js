import { EyeIcon} from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'

const Question = ({ question }) => {
  const { id, options, correctAnswer } = question;

  const Question = (question.question.replace( /(<([^>]+)>)/ig, ''));

  const clickHandle = (event) => {
    const newValue = event.target.innerText.trim();
    const newCorrectAnswer = (correctAnswer).replace(/\s+/g, ' ').trim();

    console.log(newValue);
    console.log(newCorrectAnswer);

    if (newValue === newCorrectAnswer) {
      (event.target.classList.add('bg-green-300'));
      (event.target.classList.remove('bg-slate-300'));
      toast.success('Right Answer')
    }
    else{
      (event.target.classList.add('bg-red-300'));
      (event.target.classList.remove('bg-slate-300'));
      toast.error('Wrong Answer')
    }

    // const result = (options.filter(text => (text.replace(/\s+/g, '').trim()) !== newCorrectAnswer));
    // const parent = (event.target.parentNode.parentNode);
    // const target = (event.target);
    // console.log(parent.nextSibling);
  }

  const eyeHandle = () => toast.info(correctAnswer);

  return (
    <div className='w-[90%] md:w-[60%]'>
      <div className=' rounded-md ring-2 shadow-2xl my-10'>
        <div className='  rounded-lg p-10'>
          <div className='flex gap-5 items-start justify-between'>
            <h2 className='text-2xl font-semibold text-center mb-10'>{Question}</h2>
            <button onClick={eyeHandle} className='hover:text-indigo-600'><EyeIcon className="h-6 w-6 " /></button>
          </div>
          <ul className='text-xl space-y-5' id={id}>
            {
              options.map((option, idx) =>
                <div key={idx} >
                  <button onClick={clickHandle} className=" bg-slate-300 text-left text-lg rounded-md border p-2 w-full">
                    {option}
                  </button>
                </div>
              )
            }
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;