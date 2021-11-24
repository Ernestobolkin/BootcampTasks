const numbers = [1, 100, 67, -5, 6784, 356, 200];

function greate(arr, number) {
  return arr.filter((num) => num > number);
}
console.log(greate(numbers, 200));
