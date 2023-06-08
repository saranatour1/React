
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName= "Doe"  hairColor="Black" age="45"/>
      <PersonCard firstName="John " lastName= "Smith"  hairColor="Brown" age="88"/>
      <PersonCard firstName="Millard " lastName= "Fillmore"  hairColor="Brown" age="50"/>
      <PersonCard firstName="Jane" lastName= "Smith"  hairColor="Black" age="62"/>

    </div>
  );
}

export default App;

