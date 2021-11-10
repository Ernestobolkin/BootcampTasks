let arr1 = [1,2,3,1,1,1,4,4,4,5,5,5]
    
let filtr = arr1.filter((item,i) => arr1.indexOf(item) === i)

console.log(filtr);