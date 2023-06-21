import axios from 'axios';
import React from 'react'
import styles from './DeleteButton.module.css';

function DeleteButton({removeFromDom ,id}) {


  const deletePlayer = (playerId) => {
    axios.delete(`http://localhost:8000/api/players/${playerId}`)
      .then(res => {
        removeFromDom(playerId);
      })
      .catch(err => console.error(err));
  }


  return (
    <button className={styles.button }  onClick={(e) => { deletePlayer(id) }}>
            Delete
    </button>
  )
}



export default DeleteButton;

