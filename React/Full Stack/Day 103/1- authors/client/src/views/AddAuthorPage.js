import React, { useState } from 'react'
import FormInput from '../components/FormInput';
import axios from 'axios';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function AddAuthorPage() {
  const [name, setName] = useState("");
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();


  const createAuthor = person => {
    axios.post('http://localhost:8000/api/authors/', person)
      .then(res => {
        setAuthors([...authors, res.data]);
        setErrors([]);
        navigate('/');
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.name) {
          const errorResponse = err.response.data.errors.name;
          const errorArr = Object.values(errorResponse).map(error => error.message);
          setErrors(errorArr);
        } else {
          setErrors(["An error occurred while creating the author."]);
        }
      });
  };

  return (
    <div>
      <Header />
      <FormInput
        onSubmitProp={createAuthor}
        initialName=""
        errMsg={errors}
      />
    </div>
  );
}


export default AddAuthorPage;