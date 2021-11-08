/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).


// question
function welcome() {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
}
// asnwer expressions
const implicit2 = () => {return 'Welcome to Appleseeds Bootcamp!';};
// asnwer implicit
const implicit1 = () => 'Welcome to Appleseeds Bootcamp!';

// console.log(implicit2())



// question
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
// asnwer expressions
const pwr1 = (a) => {return Math.pow(a,2)};
// asnwer implicit
const pwr2 = a => Math.pow(a,2);

// console.log(pwr2(100))


// From function expressions to IIFE functions.

// question
const squareRoot = a => Math.sqrt(a);
// asnwer IIFE
// ((b) => console.log(Math.sqrt(b)))(4);

// question
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
// asnwer IIFE
((a,b) => console.log(Math.random() * (a - b) + b))(10,5);