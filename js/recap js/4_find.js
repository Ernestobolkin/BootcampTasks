const numbers = [1, 2, 100, -67, -5, 6784, 356, 200];
const myFunc = (arr, x) => {
  return arr.find((num) => {
    return num > x;
  });
};
console.log(myFunc(numbers,100));
