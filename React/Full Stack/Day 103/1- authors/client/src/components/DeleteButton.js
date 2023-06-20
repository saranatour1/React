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
    <button onClick={(e) => { deleteAuthor(id) }}>
            Delete
    </button>
  )
}



export default DeleteButton;


