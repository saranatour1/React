import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    const[message, setMessage]= useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName , email, password };
        console.log("Welcome", newUser);
    };

  const matchPassword =(e)=>{
    if(password === confirmPassword){
      return setMessage(" Passwords Match! ");
    }else{
      return setMessage("keep Trying!"); 
    }
  };


    
    return(
  <>
        <form onSubmit={ createUser } className="flex flex-col">
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">First Name:</label> 
            <input className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Jane" onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Last Name:</label> 
            <input type="text" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center  justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Email Address:</label> 
            <input type="email" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Password:</label>
            <input type="password" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { matchPassword(); setPassword(e.target.value); }} />
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Confirm Password:</label>
            <input type="password" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { matchPassword(); setConfirmPassword(e.target.value); }} />
          </div>

            <input type="submit" value="Create User" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mx-auto" />
        </form>
        <div className="mt-8 w-56 mx-auto">
          <h3 className="text-lg font-medium text-gray-900">Your Form Data:</h3>
          <div className="border rounded-lg p-4 mt-4 ">
            <p className="mb-2">
              <span className="font-medium text-gray-600">First Name:</span> {firstName}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Last Name:</span> {lastName}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Email Address:</span> {email}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Password:</span> {password}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Confirm Password:</span> {confirmPassword}
            </p>
            <p className="mt-2">{message}</p>
          </div>
        </div>


</>

    );
};
    
export default UserForm;
