import React, { useState } from 'react';
import DisplayMsg from './DisplayMsg';
import axios from 'axios';

function FetchBtn(props) {
  const [pokemons, SetPokemons] = useState([]);
  
  // axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
  // .then(response => console.table(response.data.results))
  const getPokemons = () =>  {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(response => SetPokemons(response.data.results))
    // .catch(error => console.log(error));
  };

  return (

    <div>
      <button onClick={getPokemons} >
        Fetch Pokemons 
      </button>
      <DisplayMsg pokemons ={pokemons}/>
    </div>


  )
}

export default FetchBtn;
