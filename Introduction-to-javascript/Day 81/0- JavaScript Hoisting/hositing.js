/**
 * #1 :
 *    var hello;
 *    console.log(hello); // undefined
 *    var hello = "world";
 */

console.log(hello);
var hello = "world";

/**
 * #2:
 *   the scope for the function defines a 'needle ' variable within it ,
 *   So the output shall be 'magnet' with no problems
 *   needle = 'haystack';
 *
 *   test();
 *
 *   => needle = 'magnet';
 *   console.log(needle); // output is magnet
 *
 */

var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

/**
 * #3 : the function is not called within the global scope, and so the output is 'supercool'
 *
 *  var brendan = 'super cool';
 *  => doesn't see the function, not called
 *  console.log(brendan); // super cool
 *
 */

var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}

console.log(brendan);

/**
 * #4 : the code-block is being run line by line , so the first time it outputs 'chocken'
 *
 *  the second time, th function is called , and food is re-asigned to half chicken.
 *
 * var food = 'chicken';
 *
 * console.log(food); // chicken
 *
 * eat(); //half - chicken
 *
 *
 */

var food = "chicken";
console.log(food); // chicken
eat();
function eat() {
  food = "half-chicken";
  console.log(food); //half - chicken
  var food = "gone";
}

/**
 * #5 :
 *    the previous code , gives an error as that the variable mean() is being refrenced before being defined
 *    hence it resyults in an error that the fucntion is not defined,
 *    and the variable food is not defined and results in refrrence error.
 *    after modificatiion this is the result :
 *    // chicken
 *    // fish
 *    // fish
 *    //fish
 *    line by line interpretation
 *
 *
 */

food = mean();
console.log(food); //fish
function mean() {
  food = "chicken";
  console.log(food); // chicken
  var food = "fish";
  console.log(food); //fish
  return food;
}
console.log(food); //fish

/**
 * #6 :
 * genre == undefined
 * ==> rewind()
 *
 *
 */

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre); // rock
  var genre = "r&b";
  console.log(genre); // r&b
}
console.log(genre); //disco

/**
 * #7:
 * see the commented code
 *
 */

dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo); // seatle
  var dojo = "burbank";
  console.log(dojo); // burbank
}
console.log(dojo); // san jose

/**
 * #8:
 *    an object of type const connot be re-instantiated
 *    so it will give out an error on re-assignment
 *
 */

let f = makeDojo("Chicago", 65);
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
