const numbers = [1, 100, 67, -5, 6784, 356, 200];

// function greate(arr, number1,number2) {
//   return arr.filter((num) => (num > number1)&&(num<number2));
// }

function greate(arr, number1, number2) {
  return arr.filter((num) => {
    return num > number1 && num < number2;
  });
}
console.log(greate(numbers,-10,10));
