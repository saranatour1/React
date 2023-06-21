import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Info() {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/authors/${id}`);
        setProduct(response.data);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  

  return (

    <div>
      <h3>name :  {product.name}</h3>
    </div>
  )
}

export default Info;