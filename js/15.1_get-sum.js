// function getSum(arr1, arr2) {
// const sum = 0; // cant be const, its a changeable variable becouse the function summes the numbers int hte arrays.
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }// if you want to get the result of the function you should do or console.log or return and put out of the function in the call a console.log(getSum([1, 2, 3],[5, 66, 23])) to get an answer
// }
// you need to put a ' , ' between the arrays. and you cant use the 2nd array in the function becouse its in ().
// getSum([1, 2, 3][(5, 66, 23)]);


// 4
function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3], [5, 66, 23]));
