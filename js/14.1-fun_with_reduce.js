const numbers = [80,96,78,100,56];
//V.1 max/min
// function red(arr) {
//   return arr.reduce((max, currVal) => {
//     if (currVal > max) {
//       return currVal;
//     }
//     return max;
//   });
// }

//V.2
function red(arr) {
  return arr.reduce((max, currVal) => Math.max(max, currVal));
}

//sum
const summ = (arr) => {
  return arr.reduce((sum, currVal) => {
    return sum + currVal;
  });
}

//average
const average = (arr)=>{
  return arr.reduce((sum,currVal)=>{
    return sum+currVal
  })/arr.length
}
