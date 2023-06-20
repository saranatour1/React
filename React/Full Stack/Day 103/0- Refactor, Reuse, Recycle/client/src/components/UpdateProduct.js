import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [descreption, setDescreption] = useState("");


  useEffect(() => {

    axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
          console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescreption(res.data.descreption);
        })

}, []);


const updateProduct = e => {
  e.preventDefault();
  console.log("Trying to update");
  axios.put(`http://localhost:8000/api/products/${id}/edit`, {
      title,
      price,
      descreption
  })
      .then(res => console.log(res))
      .catch(err => console.log(err));
}


  return (
    <div>
      <h3>update an Item </h3>
      <form  onSubmit={updateProduct} >
        <div>
          <label htmlFor="title"> Title</label>
          <input type="text" value={title} onChange={e=> setTitle(e.target.value)} />
        </div>
        
        <div>
          <label htmlFor="price"> Price</label>
          <input type="number" value={price} onChange={e=> setPrice(e.target.value)} />
        </div>
        
        <div>
          <label htmlFor="descreption"> Descreption</label>
          <input type="text" value={descreption} onChange={e=> setDescreption(e.target.value)} />
        </div>

      <button >Submit</button>
      </form>


    </div>
  )
}

export default UpdateProduct;

