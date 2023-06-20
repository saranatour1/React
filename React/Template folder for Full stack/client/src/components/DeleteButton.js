import axios from 'axios';
import React from 'react'


function DeleteButton({removeFromDom ,id}) {


  const deleteProduct = (prodId) => {
    axios.delete(`http://localhost:8000/api/products/${prodId}`)
      .then(res => {
        removeFromDom(prodId);
      })
      .catch(err => console.error(err));
  }


  return (
    <button onClick={(e) => { deleteProduct(id) }}>
            Delete
    </button>
  )
}



export default DeleteButton;


