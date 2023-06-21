import axios from 'axios';
import React from 'react'


function DeleteButton({removeFromDom ,id}) {


  const deleteAuthor = (authorId) => {
    axios.delete(`http://localhost:8000/api/authors/${authorId}`)
      .then(res => {
        removeFromDom(authorId);
      })
      .catch(err => console.error(err));
  }


  return (
    <button className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  px-3  py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900' onClick={(e) => { deleteAuthor(id) }}>
            Delete
    </button>
  )
}



export default DeleteButton;


