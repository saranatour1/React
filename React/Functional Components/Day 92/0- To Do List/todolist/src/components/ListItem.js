import React from "react";
import './ListInput.css';
function ListItem({ item, toggleItem, deleteItem }) {
  return (
    <li className="mt-4">
      <label className={item.seen ? "strike" : ""}>
        <input
          type="checkbox"
          checked={item.seen}
          onChange={() => toggleItem(item.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-4"
        />
        {item.title}
      </label>
      <button className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3  py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  );
}

export default ListItem;
