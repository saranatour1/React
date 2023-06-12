import React from "react";
import './ListInput.css';
function ListItem({ item, toggleItem, deleteItem }) {
  return (
    <li>
      <label className={item.seen ? "strike" : ""}>
        <input
          type="checkbox"
          checked={item.seen}
          onChange={() => toggleItem(item.id)}
        />
        {item.title}
      </label>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  );
}

export default ListItem;
