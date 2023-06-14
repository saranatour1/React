// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";



function App() {
  const [options, setOptions] = useState([]);
  const [idOf, setId] = useState("");
  const [category, setCategory] = useState("");

  console.log(idOf, category);
  useEffect(() => {
    axios.get("https://swapi.dev/api/").then((response) => {
      setOptions(Object.keys(response.data));
    });
  }, []);

  const passValuesOfPath = (id, cat) => {
    setId(id);
    setCategory(cat);
    console.log("I got messages", id, cat);
  };

  return (
    <div className="App">
      <SearchBar options={options} onUpdate={passValuesOfPath} />
      <Routes>
        <Route path="/:cat/:id" element={<Display />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
