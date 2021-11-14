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
  let space= '';
for(let i = 0; i<n; i++){
  space += " ";
  }

for(let i = 0;i<space.length; i++){
  let newstr = "#".repeat(i+1)+space
  console.log(newstr);
  }
} 
console.log(steps(4))
