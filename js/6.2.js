// 1. Using a loop, iterate through this array and console.log all of the people.
const people = ["Greg", "Mary", "Devon", "James"];
for (i of people){
  console.log(i)
}

// 2. Write the command to remove "Greg" from the array.
console.log(people.shift())

// 3. Write the command to remove "James" from the array.
console.log(people.pop())

// 4. Write the command to add "Matt" to the front of the array.
console.log(people.unshift("Matt"),people)

// 5. Write the command to add your name to the end of the array.
console.log(people.push("Ernest"),people)

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(i of people){
console.log(i);
if(i=='Mary'){
  return
  }
}

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let slice = people.slice(2,4)
console.log(slice);

// 8. Write the command that gives the indexOf where "Mary" is located.
let indx = people.indexOf('Mary')
console.log(indx)

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
let indx = people.indexOf('Foo')
console.log(indx) //-1

// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" const people = ["Greg", "Mary", "Devon", "James"]; and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
let splc = people.splice(2,2,'Elizabeth', 'Artie')
console.log(people.push("James"));
console.log(splc);
console.log(people);


