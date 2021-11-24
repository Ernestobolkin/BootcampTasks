const words = ["1", "2", "3", "4", "5"];

function toNumbers(arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(parseInt(element));
  });
  return newArr;
}

console.log(toNumbers(words));
