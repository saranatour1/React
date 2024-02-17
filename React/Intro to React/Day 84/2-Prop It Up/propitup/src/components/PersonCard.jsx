import React from "react";

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  return (
    <section>
      <h1>
        {" "}
        {lastName}, {firstName}{" "}
      </h1>
      <p> Age: {age} </p>
      <p> Hair Color : {hairColor}</p>
    </section>
  );
};

export default PersonCard;
