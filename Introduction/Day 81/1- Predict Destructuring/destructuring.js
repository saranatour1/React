/**
 * # 1: 
 *  The first value is pointing to the first elment that appears in the array ,
 *  So the value will be 'Tesla'
 * 
 *  while the second one disincludes the first value, pointing to the second one since no spread is avilabel 
 *  and the output becomes 'Mercedes'
 *
 */

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars //Tesla 
// const [ ,otherRandomCar ] = cars // 'Mercedes'
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

/**
 * # 2 : 
 *  console.log(name) gives a refrence name error, 
 *  console.log(otherName); //Elon 
 */

// const employee = {
//   name: 'Elon',
//   age: 47,
//   company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(employee.name); // refrence error when it's name only 
// console.log(otherName); //Elon 

/**
 * #3: 
 *  there are no relating variable called password in person , so it will be undefined.
 * 
 */

// const person = {
//   name: 'Phil Smith',
//   age: 47,
//   height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); // 12345
// console.log(hashedPassword); // there are no variables relating to this, so it is undefined


/**
 * #4: 
 * Simple  
 * 
 */

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; // the second number 
// const [,,,second] = numbers; // 4th number 
// const [,,,,,,,,third] = numbers; //9th number 
// //Predict the output
// console.log(first == second); //false 
// console.log(first == third); // true ?


/**
 * #5: 
 * Interesting.
 * 
 */

const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // 'value'
const { secondKey } = lastTest; // '[1, 5, 1, 8, 3, 3]'
const [ ,willThisWork] = secondKey;  // 5? 
//Predict the output
console.log(key); // 'value'
console.log(secondKey); // '[1, 5, 1, 8, 3, 3]'
console.log(secondKey[0]); //'1'
console.log(willThisWork);// '5' ? interesting 

