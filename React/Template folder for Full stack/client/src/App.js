import './App.css';
import { Routes ,Route} from 'react-router-dom';
import MainPage from './views/MainPage';
import InfoPage from './views/InfoPage';
import UpdateProduct from './components/UpdateProduct';




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path ="/products/:id" element ={<InfoPage />}/>
        <Route  path="/products/:id/edit" element ={<UpdateProduct />}/>
      </Routes>


    </div>
  );
}

export default App;
