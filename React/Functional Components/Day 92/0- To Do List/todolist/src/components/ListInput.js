import React, { useState } from "react";
import './ListInput.css';
import ListItem from './ListItem';
let nextId = 0;

function ListInput() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([...items, { id: nextId++, title: title, seen: false }]);
    setTitle("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, seen: !item.seen };
        }
        return item;
      })
    );
  };

  const preventDefaultBehaviour = (e) => {
    e.preventDefault();
    addItems();
  };

  return (
    <div>
      <form onSubmit={preventDefaultBehaviour}>
        <input
          type="text"
          placeholder="What do you need to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" title="Add a task to your to-do list">
          Add Item
        </button>
      </form>
      <div>
        <ul>
        <ul>
          {items.map((item, idx) => (
            <ListItem
              key={idx}
              item={item}
              toggleItem={toggleItem}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
        </ul>
      </div>
    </div>
  );
}

export default ListInput;
