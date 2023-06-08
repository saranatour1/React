import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <Navigation />
      <Main>
        
        <SubContents />
        <SubContents/>
        <SubContents/>
        <Advertisement />
      </Main>
      </div>
    </div>
  );
}

export default App;
