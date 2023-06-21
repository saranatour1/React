
import './App.css';
import {Routes ,Route, useLocation, useNavigate} from 'react-router-dom';
import MainPage from './views/MainPage';
import AddPlayerPage from './views/AddPlayerPage';
import StatusPage from './views/StatusPage';
function App() {
  const location = useLocation();
  const navigate = useNavigate()

  if(location.pathname === '/' || location.pathname ==='' ){
    navigate('/players/list');
  }
  

  return (
    <div className="App">
      <Routes>
          <Route exact path='/players/list' element={<MainPage />} />
          <Route path='/players/addplayer' element={<AddPlayerPage />} />
          <Route path= '/status/game' element={<StatusPage />} />
          <Route path= '/status/game/:id' element={<StatusPage />} />
      </Routes>
    </div>
  );
}

export default App;
