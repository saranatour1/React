import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const people = [
    { firstName: "Jane", lastName: "Doe", hairColor: "Black", age: 45 },
    { firstName: "John", lastName: "Smith", hairColor: "Brown", age: 88 },
    { firstName: "Millard", lastName: "Fillmore", hairColor: "Brown", age: 50 },
    { firstName: "Jane", lastName: "Smith", hairColor: "Black", age: 62 },
  ];
  return (
    <div className="App">
      {people.map((person, id) => (
        <PersonCard
          key={id}
          firstName={person.firstName}
          lastName={person.lastName}
          hairColor={person.hairColor}
          age={person.age}
        />
      ))}
    </div>
  );
}

export default App;
