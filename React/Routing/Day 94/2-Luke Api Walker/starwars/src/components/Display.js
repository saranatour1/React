import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";

function Display() {
  const { cat, id } = useParams();
  const [result, setResult] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${cat}/${id}/`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          navigate("/notfound", { replace: true });
        } else {
          throw error;
        }
      });
  }, [cat, id, navigate]);

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
