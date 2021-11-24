// 1. the counter line that int the if is wrong.
// 2. i used the vsc watch debagger to see
// 3. the bug is that when you want to add a number to a varibale you cant use only + on the variable. you should do += or variable = +1 or variable ++. 


// 4:
function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter +=1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini mnniny moe", "n"));
