import React from "react";

function Header() {
  return (
      <div className="w-4/5 md:w-3/4 sm:w-2/4 rounded overflow-hidden shadow-lg mx-auto">
        <div className="flex items-center justify-center h-20">
          <h1 className="text-3xl xs:text-xs sm:text-md font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            MERN Chat
          </h1>
        </div>
      </div>

  );
}

export default Header;
