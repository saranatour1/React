import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>These aren't the droids you're looking for</h1>
      <img
        src="https://media.thenerdstash.com/wp-content/uploads/2022/05/Ben-Not-The-Droids.jpg"
        alt="Obi-Wan Kenobi"
      />
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default NotFound;
