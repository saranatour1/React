import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// do not forget to remove auto save when working with API's :D:D:D
function SearchBar({ options, onUpdate }) {
  const [idOf, setId] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const getValues = () => {
    onUpdate(idOf, category);
    if (idOf && category) {
      navigate(`/${category}/${idOf}`, { replace: true });
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <select onChange={(e) => setCategory(e.target.value)}>
          {options.map((element, idx) => (
            <option key={idx} value={element}>
              {element}
            </option>
          ))}
        </select>
        <input type="number" onChange={(e) => setId(e.target.value)} />
        <button onClick={() => getValues()}>Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
