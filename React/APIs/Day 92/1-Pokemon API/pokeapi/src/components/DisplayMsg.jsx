import React from 'react'

function DisplayMsg(props) {
  const pokemons = props.pokemons;
  console.log(pokemons);
  return (
    <div>
      <ul>
        {pokemons.map((item, idx) => <li key={idx}> {item.name}</li> )}
      </ul>
    </div>
  )
}

export default DisplayMsg;
