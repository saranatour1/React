import React from "react";

function DisplayBoxes(props) {

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {props.sendColor.map((elem, idx) => (
        <div
          key={idx}
          style={{
            width: elem[1] + "px",
            height: elem[1] + "px",
            margin: "7px",
            backgroundColor: elem[0],
          }}
        >
          {" "}
          {elem}{" "}
        </div>
      ))}
    </div>
  );
}

export default DisplayBoxes;
