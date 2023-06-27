import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

function Info( ) {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

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

  const deleteItem=(id) => {
    navigate('/');
    
  }
  

  return (
    
    <div>
      <h3>name :  {product.name}</h3>
      <DeleteButton removeFromDom= { () => deleteItem(id)}  id={id}/>
    </div>
  )
}

export default Info;