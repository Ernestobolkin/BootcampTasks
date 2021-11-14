// const steps = (n) => {
// const space = (" ".repeat(n));
// console.log(space.length)
// for(let i = 0; i < space.length ; i++){
//   let newstr = "#".repeat(i+1)+space
//   console.log(newstr);
//   }
// }

// console.log(steps(4))

// Ninja. same thing but witout repeat
const steps = (n) => {
  let space = "";
  for (let i = 0; i < n; i++) {
    space += "_";
  }
  // console.log(space);
  for (let j = 0; j < n; j++) {
    space = space.replace("_", "#", j);
    console.log(space);
  }
};

steps(6);

//   let newstr = "#".repeat(i+1)+space
