const numbers = [1, 2, 3, 4, 5];

numbers.forEach((el,index,array)=>{
  array[index]= el*2;
})
console.log(numbers)