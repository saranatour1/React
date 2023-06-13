import React, { useState } from "react";
import "./ListInput.css";

let nextId = 0;

// sent the additems in props 
function ListInput({addItem}) {
  //  set title 
  const [title, setTitle] = useState("");

  const preventDefaultBehaviour = (e) => {
    e.preventDefault();
    // add item , we can put the date here also if we want 
    const newItem = { id: nextId++, title: title, seen: false };
    // add items 
    addItem(newItem);
    setTitle("");
  };

  return (
    <div className="mt-12 overflow-x-hidden overflow-y-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <form onSubmit={preventDefaultBehaviour}>
        <div className="flex items-center flex-row h-12 justify-center">
          <div>
            <label
              htmlFor="title"
              className="block mb-6 text-sm font-medium text-gray-900 dark:text-white mt-4"
            >
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
    </div>
  );
}

export default ListInput;
