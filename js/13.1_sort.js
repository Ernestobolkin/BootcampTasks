const numbers = [1, -5, 666, 2, 400, 11];

function sort(arr){
  return arr.sort((a,b)=> a -b)
};

function sort2(arr){
  return arr.sort((a,b)=> b - a)
};

console.log(sort(numbers));