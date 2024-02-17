import React, { useState } from "react";

const PersonCard = ({ firstName, lastName, hairColor, age: initialAge }) => {
  const [age, setAge] = useState(parseInt(initialAge, 10));

  const increaseByOne = () => {
    setAge((prevAge) => prevAge + 1);
  };

  return (
    <section className="mt-5 mx-auto">
      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
        {lastName}, {firstName}
      </h1>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Age: {age}</p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Hair Color: {hairColor}</p>
      <button
        type="button"
        className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={increaseByOne}
      >
        Birthday Button for {firstName} {lastName}.
      </button>
    </section>
  );
};

export default PersonCard;
