import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function Display({ removeFromDom, items }) {
  const [authors , setAuthors] = useState(items);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            <td>
              <Link to={`/authors/${item._id}`}>{item.name}</Link>
            </td>
            <td>
              <Link to={`/authors/${item._id}/edit`}>Edit</Link>
            </td>
            <td>
              <DeleteButton removeFromDom={removeFromDom} id={item._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  
  );
}

export default Display;
