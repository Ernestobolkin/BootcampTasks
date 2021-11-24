// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//   })(1);
// })(0);

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// var module = (function () {
//   var foo = "foo";
//   function addToFoo(bam) {
//     foo = bam;
//     return foo;
//   }
//   var publicInterface = {
//     bar: function () {
//       return "bar";
//     },
//     bam: function () {
//       return addToFoo("bam");
//     },
//   };
//   return publicInterface;
// })();
// console.log(module.bar());
// console.log(module.bam());

function createIncrement() {
  let count = 0; 
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
