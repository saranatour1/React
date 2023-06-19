import React from 'react';
import { Link } from 'react-router-dom';

function ListOfItems({items}) {
  
  const prods = items.Products ;
  


  return (
    <>
        <div>
      {prods.map((item, idx) => (
        <div key={idx}>
          <Link to={`/products/${item._id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
    </>

  );
}

export default ListOfItems;
