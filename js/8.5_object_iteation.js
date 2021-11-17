const test = {
  te : 2,
  st : 3,
  21 : 'a'
}
const valuesSwapped = (obj) =>{
  const tempObj = {};
  Object.keys(obj).forEach(key => {
    tempObj[obj[key]] = key;
  });
  console.log(Object.entries(obj))
}

valuesSwapped(obj)

console.log(valuesSwapped(test))

