const test = {
  te : 2,
  st : 3,
  21 : 'a'
}
const swapObjProp = obj => {
 let res = {};
 for(let key in obj){
   res[obj[key]]=key;
  }
  return res;
}

console.log(swapObjProp(test))