import React, { useState } from "react";
import "./Tabs.css";

const Tabs = (props) => {
  const tabs = props.tabs;
  const [isOpened, setIsOpened] = useState(0);

  const handleClickBtn = (Idx) => {
    setIsOpened(Idx);
  };

  return (
    <div>
      {tabs.map((elem, Idx) => (
        <button
          onClick={() => handleClickBtn(Idx)}
          style={{
            padding: "10px",
            margin: "5px",
            backgroundColor: Idx === isOpened ? "black" : "white",
            color: Idx === isOpened ? "white" : "black",
          }}
          key={Idx}
        >
          {elem.label}
        </button>
      ))}
      <p
        style={{
          border: "1px solid gray",
          width: "200px",
          height: "200px",
          margin: "1em auto",
        }}
      >
        {tabs[isOpened].content}
      </p>
    </div>
  );
};

export default Tabs;
