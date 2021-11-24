const quoatation = (name,callback) =>{
  const result = `"${name}"`;
  if(typeof callback === "function"){
    callback(result)
  }else{
    return result;
  }
}
const goodEvening = (name) =>{
  console.log(`Good Evening ${name} `)
}
quoatation('Ernest',goodEvening)