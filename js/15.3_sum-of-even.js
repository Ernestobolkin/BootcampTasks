// function getSumOfEven(arr){
//   return arr[2] + arr[4] + arr[6] + arr[8] + arr[10]; 
//  }
//  getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
// 1. the bug is int the return of the arrays inexes. the index should start at 1 and jump to the 3 and ecetera.
// 2  use the dubagger in vsc with watch.
// 3  I you try to returen arr[2] + arr[4] + arr[6] + arr[8] + arr[10] in those indexes you will get the uneven numbers, so what i did is switch the indexes to the right place to get sum of even numbers.
// 4
function getSumOfEven(arr){
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
 }
 console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));