import React from "react";
const tasks = ["Learn React", "Climb mount everist", "Run a marathon", "Feed the dogs"];
const ToDo = () => {
  return (
    <>
      <h3>Things I need to Do</h3>
      <ul>
        {tasks.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
    </>
  );
};
export default ToDo;
