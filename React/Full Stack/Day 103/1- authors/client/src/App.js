import './App.css';
import { Routes ,Route} from 'react-router-dom';
import MainPage from './views/MainPage';
import InfoPage from './views/InfoPage';
import AddAuthorPage from './views/AddAuthorPage';
import UpdateAuthor from './views/UpdateAuthor';




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path ="/authors/:id" element ={<InfoPage />}/>
        <Route path = '/new' element = {<AddAuthorPage />}/>
        <Route  path="/authors/:id/edit" element ={<UpdateAuthor />}/>
      </Routes>


    </div>
  );
}

export default App;
