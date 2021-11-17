//1
const isString = (str,callbackfunc) => {
if(typeof str ==='string'){
  callbackfunc(str)
 } else {console.log (`'${str}' not a string`)}
} 

const printString =(string) => {
  console.log(string)
}

// isString("ernest tobolkin",printString)

//2
const firstWordUpperCase = (str,callbackfunc) => {
  let word = str[0].toUpperCase()+str.slice(1);
  callbackfunc(word);
}

const dash =(string)=>{
console.log(string.replace(/ +/g,'-'))
}
firstWordUpperCase("ernest tobolkin",dash)


//3
// const firstWordUpperCase2 = (str)=> {
//   return function (string){
//     console.log(str+' '+string)
//   }
// }


// const fullname = firstWordUpperCase2('Ernest')
// fullname('Tobolkin')

