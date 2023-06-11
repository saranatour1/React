import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [firstNameMsg, setFirstNameMsg] = useState("");

    const [lastName, setLastname] = useState("");
    const [lastNameMsg, setLastNameMsg] = useState("");

    const [email, setEmail] = useState("");
    const [emailMsg , setEmailMsg] = useState("");

    const [password, setPassword ] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");

    const[message, setMessage]= useState("");


  // validating first name or last name to be more than two charecters

const validate = (e) => {
  const { id, value } = e.target; 

  if (id === 'firstName' && value.length < 2) {
    setFirstNameMsg("First name must be more than 2 characters.");
  } else{
    setFirstNameMsg("");
  }
   if (id === 'lastName' && value.length < 2) {
    setLastNameMsg("Last name must be more than 2 characters.");
  } else {
   
    setLastNameMsg("");
  }

  if(id === 'email' && value.length <2 ){
    setEmailMsg("Email Must be more than two charecters");
  }
  else{
    setEmailMsg("");
  }
};

const matchPassword = (e) => {
  const { id, value } = e.target;

  if (id === "password" && id=== "confirmPassword"  && password.length >= 8) {
    setMessage("Passwords Match!");
  } else if (id === "confirmPassword" && value === password) {
    setMessage("Passwords Match!");
    // console.log("I am here ");
  } else {
    setMessage("Keep Trying!");
  }
};





    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName , email, password };
        console.log("Welcome", newUser);
    };




    return(
  <>
        <form onSubmit={ createUser } className="flex flex-col">
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label htmlFor ="firstName" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">First Name:</label> 
            <input id="firstName" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Jane" onChange={(e) =>  {setFirstname(e.target.value); validate(e);}} />
            <p><small>{firstNameMsg}</small></p> 
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Last Name:</label> 
            <input type="text" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" id='lastName' onChange={(e) =>  {setLastname(e.target.value); validate(e); }} />
             <p><small>{lastNameMsg}</small></p> 
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center  justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Email Address:</label> 
            <input id="email" type="email" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) =>  {setEmail(e.target.value); validate(e);} } />
          <p><small>{emailMsg}</small></p> 
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Password:</label>
            <input type="password" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" onChange={(e) => {  setPassword(e.target.value); matchPassword(e); }} />
            <p><small>{message}</small></p> 
          </div>
          <div className="mb-3 w-96 mx-auto flex items-center justify-around bg-slate-200 rounded-xl h-20">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Confirm Password:</label>
            <input type="password" className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="confirmPassword" onChange={(e) => {  setConfirmPassword(e.target.value); matchPassword(e);}} />
            <p><small>{message}</small></p> 
          </div>

            <input type="submit" value="Create User" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mx-auto" />
        </form>



</>

    );
};
    
export default UserForm;
