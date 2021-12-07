const isGreaterThen = (number) => {
  return new Promise((resolve, reject) => {
    if (number >= 10) {
      resolve(number);
    } else {
      reject(number);
    }
  });
};
let randomNum = Math.floor(Math.random()*20)
isGreaterThen(randomNum)
  .then((num) => {
    console.log("it is grather then 10");
    console.log(`${num} > 10`);
  })
  .catch((num) => {
    console.log("it is smaller then 10");
    console.log(`${num} < 10`);
  });
