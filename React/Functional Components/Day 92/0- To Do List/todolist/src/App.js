// import logo from './logo.svg';
import { useState ,useEffect } from 'react';
import './App.css';
import ListInput from './components/ListInput';
import ListStructure from './components/ListStructure';
// nice ::D:D::D 
function App() {
  const [items, setItems] = useState([]);

  // I removed the functions from the childrens of the App and put them here, 
  // this way I can easily pass functions, values in props

  // when a change occurs on the local storage of myItems, at the rendering ste 
  useEffect(() => {
    if (localStorage.getItem('myItems') !== null) {
      setItems(JSON.parse(localStorage.getItem('myItems')));
    }

    console.log("I got these information from the local storage");
    console.table(  
      JSON.parse(localStorage.getItem('myItems'))
    );
  }, []);

// adding the items 
  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('myItems', JSON.stringify(updatedItems));

    console.log("I got these information from the local storage while adding the item");
    console.table(
      JSON.parse(localStorage.getItem('myItems'))
    );
  };


// toggling the items on and off
  const toggleItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, seen: !item.seen };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('myItems', JSON.stringify(updatedItems));

    console.log("I got these information from the local storage while toffling the item ");
    console.table(
      JSON.parse(localStorage.getItem('myItems'))
    );
  };

  // delete item function
  const deleteItem = (id) => {
    console.log("I got these information from the local storage before deleting the item");
    console.table(
      JSON.parse(localStorage.getItem('myItems'))
    );
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('myItems', JSON.stringify(updatedItems));

    console.log("I got these information from the local storage while deleting the item");
    console.table(
      JSON.parse(localStorage.getItem('myItems'))
    );
  };

  
  return (
    <div className="App">
      <ListInput  addItem ={addItem} />
      <ListStructure items={items}   deleteItem= {deleteItem} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
