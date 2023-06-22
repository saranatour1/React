import React ,{useState ,useEffect} from 'react'
import io from 'socket.io-client';

function Chat() {
  const [msgs ,setMsgs] = useState([]);
  
  const[txt, setTxt] = useState('');

  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Is this running?');
    socket.on('ev1', data => console.log(data));
    socket.on('ev2', (data) => {
      console.log(data);
        setMsgs([...msgs,data]);
    })

  
    // return () => socket.disconnect(true);
  }, [msgs,socket]);

  // console.log(txt);

  const handleOnClick =(e) =>{
    e.preventDefault()

    socket.emit('message', txt);
    setTxt('');
}



  return (
    <div>
      <h3>Hello this is the chatt roooom </h3>
      <p>These are your messages</p>
      {msgs.map((msg, idx) => <p key={idx}> {msg} </p>)}
      <form onSubmit={(e) => handleOnClick(e)}>
        <input type="text" onChange={(e) => setTxt(e.target.value)} />
        <input type="button" value="Submit"  onClick={handleOnClick}/>
      </form>

    </div>
  ) 
}

export default Chat;