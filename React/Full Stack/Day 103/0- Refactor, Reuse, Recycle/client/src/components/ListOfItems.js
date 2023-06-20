import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function ListOfItems({items , removeFromDom}) {
  


  const deleteProduct = (prodId) => {
    axios.delete(`http://localhost:8000/api/products/${prodId}`)
        .then(res => {
            removeFromDom(prodId)
        })
        .catch(err => console.error(err));
}



  return (
    <>
        <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <Link to={`/products/${item._id}`}>{item.title}</Link>

          <Link to={`/products/${item._id}/edit`}>
              Edit
          </Link>
          <button onClick={(e)=>{deleteProduct(item._id)}}>
                        Delete
          </button>

          


        </div>
      ))}
    </div>
    </>

  );
}

export default ListOfItems;
