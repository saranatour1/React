import './App.css';
import Header from './components/Header';
import Chat from './views/Chat';
import Home from './views/Home';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000');

function App() {
  // setting the loading , and LoggedIn to false
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('userName');
    if (user !== null) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userName) => {
    localStorage.setItem('userName', userName);
    setIsLoggedIn(true); // set the login to true , when the person signs in
  };

  const handleCloseChat = () =>{
    setIsLoggedIn(false);
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <Chat socket={socket} handleCloseChat={handleCloseChat} />
      ) : (
        <Home socket={socket} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
