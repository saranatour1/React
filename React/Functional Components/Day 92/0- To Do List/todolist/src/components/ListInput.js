import React, { useState } from "react";
import './ListInput.css';
import ListItem from './ListItem';
let nextId = 0;

function ListInput() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  
  // strignifying an object 
  
  //retrevieng that string as an object
 

  const addItems = () => {
    setItems([...items, { id: nextId++, title: title, seen: false }]);
    localStorage.setItem("myItems",JSON.stringify(items));
    console.log("I got these information from the local storage" , JSON.parse(localStorage.getItem("myItems")));
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
<div className="mt-12 overflow-x-hidden overflow-y-hidden">
  <form onSubmit={preventDefaultBehaviour}>
    <div className="flex items-center flex-row h-12">
      <div>
        <label htmlFor="title" className="block mb-6 text-sm font-medium text-gray-900 dark:text-white mt-4">
          Add a new Item To your to-do list:-
        </label>
      </div>
      <div className="ml-4">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="ml-4">
        <button
          type="submit"
          title="Add a task to your to-do list"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Item
        </button>
      </div>
    </div>
  </form>
  <div>
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      {items.map((item, idx) => (
        <ListItem  key={idx} item={item} toggleItem={toggleItem} deleteItem={deleteItem} />
      ))}
    </ul>
  </div>
</div>

  );
}

export default ListInput;

