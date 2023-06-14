// import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Variable from './components/Variable';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home />} ></Route>
            
            <Route path = "/:pathVariable/:color1/:backGroundColor" element={<Variable /> }> </Route>
            <Route path="/:pathVariable" element={<Variable />} />

        </Routes>
    </div>
  );
}

export default App;
