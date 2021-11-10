//1
let arr1 = new Array(100).fill({'test':'100'});
// console.log(arr1);

//2
let arr2 = Array.from(Array(100).keys());
const arrayLikeobj = { length: 100}
let arr21 = Array.from(Array, (_,index)=> index +1);
// let arr21 = Array.from(Array(100).keys());

console.log(arr21)

//3
let obj1 = {
  a:'one',
  b:'two',
  c:'three',
  d:'four',
  2:'testing_keys',
  10:'testing_keys2'
};
let arr3 =Object.values(obj1)
// console.log(arr3);
// console.log(obj1['10'],obj1.a);


//4
let names = ['Ali','Mike','john','Ben'];
let obj2 = Object.assign({},names)
// console.log(obj2)

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