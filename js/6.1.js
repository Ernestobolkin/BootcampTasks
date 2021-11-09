// Print with for loop all the number

const arr = [1,7,3,0,-5,7,3,9]; 
for (i of arr) {
  console.log(i);
}



// Create function “arrayLength” that return the array length (don’t use arr.length)
const arrayLength = arr =>{
  let length=0;
  for(i of arr){
    length++;
  }
  return length;
}



// 3. Create function “arraySum” , the function return the sum of all elements in array.

const sumArr= arr => {
  return arr.reduce( (a, b) => {
      return a + b;
  })
}



// 4. Create function “arrayMulti” , the function return the multiplication of all the elements in array. 
const sumArr= arr => {
  return arr.reduce( (a, b) => {
      return a * b;
  })
}
console.log(sumArr(arr))