import React, { useState } from 'react';
// removed the earlier imports 
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Autocomplete, TextField } from '@mui/material';

function FormInput({ onSubmitProp, initialName , initialPosition, errMsg }) {
  const [name, setName] = useState(initialName);
  const [position , setPosition] = useState(initialPosition)
  const navigate = useNavigate();

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ name, position });
    // navigate('/');
  };

  const top100Films= [
    "Forward/Striker",
    "Midfielder",
    "Goalkeeper",
    "Defender",
    "Center-back",
    "Full-back",
    "Wing-back",
    "Central Midfielder",
    "Attacking Midfielder",
    "Defensive Midfielder",
    "Wide Midfielder",
    "Winger",
    'empty'
  ];

  return (
    <>
    <form onSubmit={onSubmitHandler} style={{width: '50vw' , margin:'1em auto'}}>
    {errMsg && errMsg.map((err, index) => <p style={{color:'#dc3545'}} key={index}>{err}</p>)}

      <Stack spacing={2} >
      <TextField id="standard-basic" label="Name" variant="standard"  onChange={e => setName(e.target.value)} defaultValue={name}/>      
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Preferred position" onChange={e => setPosition(e.target.value)}  defaultValue={position}/>}
        />

      </Stack>

      <Stack spacing={2} direction="row" style={{margin: '1em auto'}}>
      <Button variant="outlined"  onClick={() => navigate('/')}>Cacnel</Button>
      <Button variant="outlined" onClick={onSubmitHandler}>Submit</Button>
      </Stack>
    </form>


    </>
  );
}


export default FormInput;