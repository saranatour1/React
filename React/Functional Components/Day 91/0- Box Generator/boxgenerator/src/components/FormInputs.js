import React, { useState } from "react";

function FormInputs(props) {
  const [color, setColor] = useState("");
  const [myArray, setMyArray] = useState([]);
  const [dim, setDim] = useState(0);

  const fun1 = (e) => {
    e.preventDefault();
    props.addColor(myArray);
  };

  const addElement = () => {
    const newArray = [...myArray, [color, dim]];
    setMyArray(newArray);
  };

  return (
    <div>
      <form onSubmit={(e) => fun1(e)}>
        <input
          type="text"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          value={color}
        />
        <input
          type="number"
          onChange={(e) => {
            setDim(e.target.value);
          }}
        />
        <input
          type="submit"
          onClick={() => {
            addElement();
            setColor("");
          }}
        />
      </form>
    </div>
  );
}

export default FormInputs;
