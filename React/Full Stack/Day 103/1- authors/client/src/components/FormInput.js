import React, { useState } from 'react';
// removed the earlier imports 
import {useNavigate} from 'react-router-dom';
function FormInput({ onSubmitProp, initialName, errMsg }) {
  const [name, setName] = useState(initialName);
  const navigate = useNavigate();
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ name });
    // navigate('/');
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          {errMsg && errMsg.map((err, index) => <p key={index}>{err}</p>)}
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
            
          </div>
          <button onClick={() => navigate('/')}>cancel</button>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}


export default FormInput;