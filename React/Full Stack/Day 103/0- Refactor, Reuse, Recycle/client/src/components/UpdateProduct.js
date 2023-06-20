import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FormInput from './FormInput';

function UpdateProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res.data);
        setProduct(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const updateProduct = product => {
    // e.preventDefault();
    console.log('Trying to update');
    axios
      .put(`http://localhost:8000/api/products/${id}/edit`, product)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Update an Item</h3>
      <FormInput
        onSubmitProp={updateProduct}
        initialTitle={product.title}
        initialPrice={product.price}
        initialDescreption={product.descreption}
      />
    </div>
  );
}

export default UpdateProduct;
