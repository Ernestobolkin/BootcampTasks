/*
--Delete the wrong answers--

1. Which of the following is/are strings?

// a) 4
// b) 4.0
c) '4' 
answers is -- c
2. Which of the following is/are numbers?

a) 4
b) 4.0
// c) '4'
d) -4
answers is --  a, b, d
3. Which of the following is/are booleans?

a) true
b) false
// c) "true"
answers is -- a, b
4. What is the result of 80 + 71.2?

a) 151.2
// b) 151
// c) 8071.2
answers is --  a
5. What is the result of "80" + 71.2?

// a) 151.2
// b) 151
c) "8071.2"
answers is -- c
6. Does 100 + 30 produce a number or a string?

a) number
// b)string
answers is -- a
7. Does "100" + 30 produce a number or a string?

// a)number
b)string
answers is -- b
*/

//------Submit your answers under the question------//

//create three different ways to declare variables
let x = 2;
var c = 4;
const z = 3;
//declare a variable and reassign a value to it
let x = 10;
x = 5;
//create a variable and after that assign a string with its value being: He's got it!
let x = 123+ " "+ "He's got it";
/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
// 1
let a = 200;
let bill = "The restaurant bill is-" + a +"$"; 
// 2
let b = 3000;
let tax = "your tax this month is"+ " " +b +"$";
// 3
let sum = a+b;
let totalb= "Your total bill is" + " " + sum +"$" ;
let totalb2 =`Your total bill is ${a+b}$`
// Round the number 50.6 to its nearest integer
let x = 50.6
Math.round(x)
//Create a variable that is undefined
let a;

