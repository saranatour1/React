import {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import FormInputs from './components/FormInputs';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  // const [color, setColor] = useState("");  
  const [colorArr, setColorArr] = useState([]);


  const youveGotColor = ( newMessage ) => {
    // setColor( newMessage );
    setColorArr(newMessage);
    // console.log("I am in the parent", newMessage);
}

  return (
    <div className="App">
      <FormInputs addColor ={youveGotColor}/>
      <DisplayBoxes sendColor ={colorArr}/> 

    </div>
  );
}

export default App;
