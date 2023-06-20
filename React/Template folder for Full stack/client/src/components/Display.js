import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListOfItems from './ListOfItems';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function Display({ removeFromDom, items }) {
  // const [products, setProducts] = useState(items);
  // const [loaded, setLoaded] = useState(false);

  // get all the products 


  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <Link to={`/products/${item._id}`}>{item.title}</Link>
          <Link to={`/products/${item._id}/edit`}>
            Edit
          </Link>
          <DeleteButton  removeFromDom ={removeFromDom} id={item._id}/>
        </div>
      ))}
    </div>
  );
}

export default Display;
