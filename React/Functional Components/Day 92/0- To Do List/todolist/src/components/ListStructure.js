import React from 'react'
import ListItem from './ListItem';
// the functions are sent withing the props 
function ListStructure({ items, toggleItem, deleteItem }) {
  return (
    <div className=''>
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      {/* Map the items , and send the functions in props */}
      {items.map((item, idx) => (
        <ListItem  key={idx} item={item} toggleItem={toggleItem} deleteItem={deleteItem} />
      ))}
    </ul>
  </div>
  )
}

export default ListStructure;
