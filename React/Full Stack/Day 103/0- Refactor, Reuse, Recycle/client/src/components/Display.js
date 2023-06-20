import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListOfItems from './ListOfItems';

function Display() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
        setLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    // console.log(products.Products.filter(item => console.log(item)))
    fetchData();
  }, []);



  

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
}

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        {loaded && <ListOfItems removeFromDom ={removeFromDom} items = {products}/> }
        helloooooooo
        
     </div>
  );
}

export default Display;
