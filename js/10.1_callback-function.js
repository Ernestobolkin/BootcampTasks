// const isString = (str,callbackfunc) => {
// if(typeof str ==='string'){
//   callbackfunc(str)
//  } else {console.log (' not a string')}
// } 

// const printString =(string) => {
//   console.log(string)
// }

// isString("ernest tobolkin",printString)


// const firstWordUpperCase = (str,callbackfunc) => {
//   let word = str.split(' ');
//   fullword = word[0].toUpperCase()+' '+word[1];
//   callbackfunc(fullword);
// }

// const dash =(string)=>{
// console.log(string.replace(' ','-'))
// }

const firstWordUpperCase2 = (str, callbackfunction)=> {
  callbackfunction(str)
}

const callback2 = (string)=>{
console.log(string + 'Tobolkin')
}



firstWordUpperCase2('Ernest ',callback2)

