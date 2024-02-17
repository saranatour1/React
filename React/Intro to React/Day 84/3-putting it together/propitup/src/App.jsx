
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const persons = [
    { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
    { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
    { firstName: "Jane", lastName: "Smith", age: 62, hairColor: "Black" }
  ];

  return (
    <div className="App">
        {persons.map((person, index) => (
          <PersonCard
            key={index}
            firstName={person.firstName}
            lastName={person.lastName}
            age={person.age}
            hairColor={person.hairColor}
          />
        ))}
    </div>
  );
}

export default App;

