import React, { useState } from "react";

function SignIn({ onLogin, socket }) {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("newUser", { userName, socketID: socket.id });
  };
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mt-10  h-56 w-9/12">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        Get Started Right Now !
      </h2>
      <p className='mb-3 text-gray-500 dark:text-gray-400'>I wan to Start chatting with the Name ..</p>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          minLength={6}
          name="username"
          id="username"
          className='class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder='My Name is ...'
        />
        <button
          className=" mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => onLogin(userName)}
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default SignIn;
