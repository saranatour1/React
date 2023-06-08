import React from 'react'

function UserInput() {
  return (
    <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">{}</label> 
    <input className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Jane" />
  </div>
  )
}

export default UserInput;
