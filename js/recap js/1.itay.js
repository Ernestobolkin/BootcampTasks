// 1
const printToN = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
};
// printToN(10)

// 2
const countX = (n, t) => {
  for (let i = 1; i <= n; i++) {
    if (i % t === 0) {
      console.log(i);
    }
  }
};
// countX(100, 5);

// 3
const countEven = (number) => {
  const splitedNumber = number.toString().split("");
  let res = 0;
  splitedNumber.forEach((element) => {
    if (parseInt(element) % 2 == 0) {
      res++;
    }
  });
  console.log(res);
};
// countEven(1640);

// 4
const countEvenOnRange = (n) => {
  let count = 0;
  for (let i = 112; i < n; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  console.log(count);
};
// countEvenOnRange(548);

// 5
const printReverse = () => {
  for (let i = 100; i >= 0; i = i - 2) {
    console.log(i);
  }
};

// printReverse()

// 6
const quadratic = (a,b,c) => {

};

// quadratic()

// 7
const countABC =(sentence)=>{
  const splitWord = sentence.split("")
  
}

countABC("hello world")