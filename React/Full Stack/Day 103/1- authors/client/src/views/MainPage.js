import React, { useEffect, useState } from "react";
import Display from "../components/Display";
import axios from "axios";
import Header from "../components/Header";

function MainPage() {
  const [loaded, setLoaded] = useState(false);
  const [authors, setAuthors] = useState([]);

  // get all the previous items that were there

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/authors");
        setAuthors(response.data);
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Take out the remove from Dom in 'Display' Component
  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <div>
      <Header />
      {loaded && <Display removeFromDom={removeFromDom} items={authors} />}
    </div>
  );
}

export default MainPage;
