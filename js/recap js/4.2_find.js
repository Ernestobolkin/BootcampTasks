const inventory =[
  {name:"apples",quantity: 2},
  {name:"bananas",quantity: 0},
  {name:"cherries",quantity: 5},
];

const myFunc = (arr,fruitName) =>{
  return arr.find((fruit)=>{
    return fruit.name === fruitName;
  })
}
console.log(myFunc(inventory,"bananas"))