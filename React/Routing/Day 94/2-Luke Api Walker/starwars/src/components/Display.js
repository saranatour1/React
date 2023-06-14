import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Display() {
  const { cat, id } = useParams();
  const [result, setResult] = useState();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${cat}/${id}/`).then((response) => {
      console.log(response);
      setResult(response.data);
    });
  }, [cat, id]);

  return (
    <div>
      {result &&
        Object.entries(result).map(([key, value]) => (
          <div key={key}>
            <strong>{key}: </strong>
            {value}
          </div>
        ))}
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default Display;
