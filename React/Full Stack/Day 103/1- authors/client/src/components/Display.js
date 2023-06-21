import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


function Display({ removeFromDom, items }) {
  return (
    <> 
<div className="relative overflow-x-auto mx-auto w-6/12">
  <table className="mx-auto w-6/12 text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Edit
        </th>
        <th scope="col" className="px-6 py-3">
          Delete
        </th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, idx) => (
        <tr
          key={idx}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to={`/authors/${item._id}`}>{item.name}</Link>
          </td>
          <td className="px-6 py-4">
            <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to={`/authors/${item._id}/edit`}>Edit</Link>
          </td>
          <td className="px-6 py-4">
            <DeleteButton removeFromDom={removeFromDom} id={item._id} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>






  </>
  );
}

export default Display;
