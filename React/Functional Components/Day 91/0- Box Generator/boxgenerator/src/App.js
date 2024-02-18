import { useState } from 'react';
import './App.css';
import FormInputs from './components/FormInputs';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [colorArr, setColorArr] = useState([]);

  const handleColorChange = (newColors) => {
    setColorArr(newColors);
  }

  return (
    <div className="App">
      <FormInputs addColor={handleColorChange} />
      <DisplayBoxes colors={colorArr} />
    </div>
  );
}

export default App;
