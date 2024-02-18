import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs }) => {
  const [isOpened, setIsOpened] = useState(0);

  const handleClickBtn = (idx) => {
    setIsOpened(idx);
  };

  return (
    <div>
      {tabs.map((tab, idx) => (
        <button
          onClick={() => handleClickBtn(idx)}
          className={`tab-button ${idx === isOpened ? "active" : ""}`}
          key={idx}
        >
          {tab.label}
        </button>
      ))}
      {tabs[isOpened] && (
        <p className="tab-content">
          {tabs[isOpened].content}
        </p>
      )}
    </div>
  );
};

export default Tabs;
