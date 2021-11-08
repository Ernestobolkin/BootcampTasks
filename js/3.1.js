
    // JavaScript - Declaring Functions

    // The following exercise contains the following subjects:
    //     functions
    
    // Instructions
    //      Please reformat the following function declarations to function expression.
    //      Please reformat the following function expressions to function declarations.

    // Submit the file to Hive



// From function declarations to function expressions
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
// answer 1 
const greet = function welcome(){
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
}

// answer 2
// console.log(greet())


// question
function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
// answer
const pwr = function power(a){
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
// console.log(pwr(10))

// question
function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
// answer
const plus = function add(a, b = 5){
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}
// console.log(plus(1,1))



// From function expressions to function declarations
const hello = () => "Hello!";
// answer
function gret(){
  let gret= 'Hello';
  return gret;
}
// console.log(gret())

// question
const squareRoot = a => Math.sqrt(a);
// asnwer
function square(a){
  let rootsquare=Math.sqrt(a);
  return rootsquare;
}
// console.log(square(100))



// question
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
// asnwer
function randomNum(a,b){
  let ran=Math.random()
  let sum = ran * (a - b) + b;
  return {ran, sum}
}
// console.log(randomNum(5,1))


