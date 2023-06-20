import React, { useEffect, useState } from 'react'
import FormInput from '../components/FormInput';
import Display from '../components/Display';
import axios from 'axios';

function MainPage() {
  // lets do all the editing here? 
  
  // grab all the things that were on formInput, and transfer them here
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [descreption, setDescreption] = useState("");
  const [products, setProducts] = useState([]); // must change the above to be a Single object rather than attributes 
  const [loaded, setLoaded] = useState(false);
  
  // on Submit handler, that we will pass to the formInput 
  const createProduct = product => {
    //prevent default behavior of the submit
    // e.preventDefault();
    // console.log(e);
    //make a post request to create a new person
    axios.post('http://localhost:8000/api/products', product)
        .then(res=> setProducts([...products, res.data])) // this line is edited 
        .catch(err=>console.log(err))
    }

    // get all the previous items that were there 

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
      fetchData();
    }, []);
    
    // Take out the remove from Dom in 'Display' Component
    const removeFromDom = productId => {
      setProducts(products.filter(product => product._id !== productId));
  }

  return (
    <div>
      <h3>Product Maneger </h3>
      <FormInput
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice={0}
        initialDescreption=""
      />


      {loaded && <Display removeFromDom={removeFromDom} items={products} />}
    </div>
  )
}

export default MainPage;