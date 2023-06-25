import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import FormInput from '../components/FormInput';

function UpdateAuthor() {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors , setErrors] = useState();


  //get request 
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res.data);
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

// update  
const updateAuthor = author => {
  // e.preventDefault();
  console.log('Trying to update');
  axios
    .put(`http://localhost:8000/api/authors/${id}/edit`, author)
    .then(res => { console.log(res); })
    .catch(err => {
      console.log(err.response);
      if (err.response && err.response.data && err.response.data.errors) {
        const errorResponse = err.response.data.errors;
        const errorArr = Object.values(errorResponse);
        setErrors(errorArr);
        console.log(console.log(errorArr));
      } else {
        setErrors([{ message: "An error occurred while editing the author." }]);
      }
    });
};


if (!loaded) {
  return <p>Loading...</p>;
}

  return (
    <div>
      <Header /> 
      <h3>Update this author  </h3>
      <FormInput
        onSubmitProp={updateAuthor}
        initialName={author.name}
        errMsg={errors}
      />
    </div>
  )
}

export default UpdateAuthor;