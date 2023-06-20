import React, { useState } from 'react';
// removed the earlier imports 
function FormInput({ onSubmitProp, initialTitle, initialPrice, initialDescreption }) {
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [descreption, setDescreption] = useState(initialDescreption);

  const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault();
    // console.log(e);
    onSubmitProp({title, price , descreption});
}

  return (
    <> 
        <div>
      <form  onSubmit={onSubmitHandler} >
        <div>
          <label htmlFor="title"> Title</label>
          <input type="text" onChange={e=> setTitle(e.target.value)} value={title} />
        </div>
        
        <div>
          <label htmlFor="price"> Price</label>
          <input type="number" onChange={e=> setPrice(e.target.value)}  value={price}/>
        </div>
        
        <div>
          <label htmlFor="descreption"> Descreption</label>
          <input type="text" onChange={e=> setDescreption(e.target.value)} value={descreption}/>
        </div>

      <button >Submit</button>
      </form>
    </div>
    </>

  )
}

export default FormInput;