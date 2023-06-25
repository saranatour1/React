import React, { useState } from 'react'
import LinkHeader from '../components/LinkHeader';
import CardComponent from '../components/CardComponent';
import SecondaryHeader from '../components/SecondaryHeader';
import FormInput from '../components/FormInput';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddPlayerPage() {
  // const [name, setName] = useState('');
  // const [position , setPosition] = useState('')
  const navigate = useNavigate();
  const [players , setPlayers] = useState([]);
  const [errors, setErrors] = useState();


  const createPlayer = person => {
    axios.post('http://localhost:8000/api/players/', person)
      .then(res => {
        setPlayers([...players, res.data]);
        setErrors([]);
        console.log(person)
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
      <LinkHeader />
      <CardComponent>
        <SecondaryHeader />
        <FormInput 
          onSubmitProp={createPlayer}
          initialName=""
          initialPosition='empty'
          errMsg={errors} />
      </CardComponent>
    </div>
  )
}

export default AddPlayerPage;