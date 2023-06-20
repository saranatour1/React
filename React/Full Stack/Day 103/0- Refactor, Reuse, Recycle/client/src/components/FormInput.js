import React, { useState } from 'react';
import axios from 'axios';
import Display from './Display';

function FormInput() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [descreption, setDescreption] = useState("");

  const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault();
    console.log(e);
    //make a post request to create a new person
    axios.post('http://localhost:8000/api/products', {
        title,
        price,
        descreption
    })
        .then(res=> {console.log(res); })
        .catch(err=>console.log(err))
}

  return (
    <> 
        <div>
      <h3>Product Maneger </h3>
      <form  onSubmit={onSubmitHandler} >
        <div>
          <label htmlFor="title"> Title</label>
          <input type="text" onChange={e=> setTitle(e.target.value)} />
        </div>
        
        <div>
          <label htmlFor="price"> Price</label>
          <input type="number" onChange={e=> setPrice(e.target.value)} />
        </div>
        
        <div>
          <label htmlFor="descreption"> Descreption</label>
          <input type="text" onChange={e=> setDescreption(e.target.value)} />
        </div>

      <button >Submit</button>
      </form>
    </div>
    </>

  )
}

export default FormInput;