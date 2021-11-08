// let sign = prompt("How many siblings do you have?");

// if (sign.toLowerCase() == 1) {
//   alert(`${sign} sibling!`);
// }
// else {
//   alert(`${sign} sibling!`);
// }

// let sign = parseInt(prompt("How many siblings do you have?"));
// if ((sign == 0) || (isNaN(sign) == true)){
//   alert("No siblings");
// }
// else{
//   alert(`${sign} sibling!`);
// }

let numSiblings = prompt("How many siblings do you have?");
if (numSiblings.toLowerCase() == 1) {
  alert(`${numSiblings} sibling!`);
}else if(numSiblings.toLowerCase() >1){
  alert(`${numSiblings} sibling!`);
} else{
  alert("No siblings");
}


