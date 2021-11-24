const numbers = [1, 100, 67, -5, 6784, 356, 200];

const addNumbers = (arr, callback) => {
  let sum = 0;
  if (typeof callback === "function") {
    arr.forEach((element) => {
      sum += element;
    });
    callback(sum, arr.length);
  } else {
    console.log(`${callback} is not a function`);
  }
};

const myFunc = (element, length) => {
  console.log(`The avg is ${(element / length).toFixed(2)}`);
};

addNumbers(numbers, myFunc);
