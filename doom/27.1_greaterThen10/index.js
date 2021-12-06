const isGreaterThen = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve();
    } else {
      reject(number);
    }
  });
};
isGreaterThen(5)
  .then(() => {
    console.log("it is grather then");
  })
  .catch((num) => {
    console.log(num);
    console.log("it is smaller then");
  });
