import './App.css';
import { Routes ,Route} from 'react-router-dom';
import MainPage from './views/MainPage';
import InfoPage from './views/InfoPage';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path ="/products/:id" element ={<InfoPage />}/>
      </Routes>


    </div>
  );
}

export default App;
