import React from 'react';
import SignIn from '../components/SignIn';


const Home = ({onLogin ,socket}) => {


  return (
    <>    
    <SignIn onLogin ={onLogin} socket ={socket}/>
    </>

  );
};

export default Home;