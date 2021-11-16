const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//a.1
function sortByabc(arr) {
  return arr.sort();
}

// console.log(sortByabc(foods));
//a.2
function sortByabcRev(arr) {
  return arr.sort().reverse();
}
// console.log(sortByabcRev(foods))

//b
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
  "sbaba",
  "sbaban",
];
//b.1
function sortByUpperCase(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}
// console.log(sortByUpperCase(foodsWithUpperCase))

//b.2
function sortByUpperCase2(arr) {
  return arr.sort((a, b) => b.localeCompare(a));
}
// console.log(sortByUpperCase2(foodsWithUpperCase));

//c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];


function sortByLength1(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength1(words))

function sortByLength2(arr) {
  return arr.sort((a, b) => b.length - a.length);
}
// console.log(sortByLength2(words))
