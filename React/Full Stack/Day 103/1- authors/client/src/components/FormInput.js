import React, { useState } from 'react';
// removed the earlier imports 
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function FormInput({ onSubmitProp, initialName, errMsg }) {
  const [name, setName] = useState(initialName);
  const navigate = useNavigate();
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ name });
    // navigate('/');
  };

  return (
    <>
      <div className='block max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <form onSubmit={onSubmitHandler}>
          {errMsg && errMsg.map((err, index) => <p className='text-red-600 ' key={index}>{err}</p>)}
          <div>
            <label htmlFor="name" className=' mb-8 text-xl font-bold tracking-tight text-gray-900 dark:text-white me-5'>Name</label>
            <input type="text" onChange={e => setName(e.target.value)} value={name} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            
          </div>
          <div className=' flex justify-center align-middle mt-5' >
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => navigate('/')}>cancel</button>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Submit</button>
          </div>

        </form>
      </div>
    </>
  );
}


export default FormInput;