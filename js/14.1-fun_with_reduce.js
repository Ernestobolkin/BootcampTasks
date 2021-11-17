const numbers = [1,2,3,4,5,6,7];
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

//sum the even numbers
const summ = (arr) => {
  return arr.reduce((sum, currVal) => {
    if(currVal %2===0){
      return sum+currVal
    }else{
      return sum;
    }
  },0);
}


//average
const average = (arr)=>{
  return arr.reduce((sum,currVal)=>{
    return sum+currVal
  })/arr.length
}
