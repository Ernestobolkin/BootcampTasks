//1
let arr1 = Array(100).fill('test');
// console.log(arr1);

//2
let arr2 = Array.from(Array(100).keys());

// console.log(arr2)

//3
let obj1 = {
  a:'one',
  b:'two',
  c:'three',
  d:'four',
  2:'testing_keys',
  10:'testing_keys2'
};
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));


//4
let names = ['Ali','Mike','john','Ben'];
// console.log(Object.assign({},names))

//5
let arr4=[1,2,3,4];
let test={a:1};
// console,console.log(Array.isArray(arr4)); //true
// console,console.log(Array.isArray(test)); //false

//6
let arr5=[1,2,3,4];
let test2= arr5.slice();
// console.log(test2)


let arr6=[1,2,3,4,5];
let neWarr6= arr6;
neWarr6.splice(0,3);
// console.log(neWarr6,arr6)