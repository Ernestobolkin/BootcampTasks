const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives",];
const food1 = [ "Fries", "Ice-cream", "Pizza", "Olives", "Olives", "Hamburgers"];


let compare = (arr1, arr2) => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }
  return (arr.length===0) ? false : arr;
};

console.log(compare(food, food1));