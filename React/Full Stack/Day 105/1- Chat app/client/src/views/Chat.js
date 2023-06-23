import React ,{useState ,useEffect, useRef} from 'react'
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';

function Chat({socket ,handleCloseChat}) {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);

  //to scroll to the bottom of the messages at all times
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
    socket.on('chatHistory', (data) => setMessages(data));
  }, [socket, messages]);

  
  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);


  return (
    <div className='flex flex-col h-screen  mx-auto' style={{width:'40vw'}}>

      <ChatBody 
      socket ={socket} 
      handleCloseChat={handleCloseChat} 
      messages={messages}  
      lastMessageRef={lastMessageRef}
      typingStatus={typingStatus}
      />

      <ChatFooter socket= {socket}/>
    </div>
  ) 
}

export default Chat;