//6.3
// function test (arr){
//   for(let i = 0; i < arr.length; i++){
//     let sum = arr[i]
//     console.log(sum.length)
//   }

// }
// console.log(test(["aaaaaa", "aaa", "aaaa","aaaaa"]));

//using while
// function test (arr){
//   let i = 0
//   while( i < arr.length){
//     let sum = arr[i]
//     console.log(sum.length)
//     i++;
//   }

// }
// console.log(test(["aaaaaa", "aaa", "aaaa","aaaaa"]));
//end of 6.4 with while

//6.4
// const populations = [101, 202, 433, 340];
// function populationPercentages(arr){
//   let percentages =[];
//   for(let i = 0; i < arr.length; i++){
//     let pop =((arr[i]/7900)*100)+ '%';
//     percentages.push([pop]);
//   }
//   return percentages;
// }
// console.log(populationPercentages(populations));

//using while 
const populations = [101, 202, 433, 340];

function populationPercentages(arr){
  let percentages =[];
  let i = 0;
  while( i < arr.length){
    let pop =((arr[i]/7900)*100)+ '%';
    percentages.push([pop]);
    i++;
  }
  return percentages;
}
console.log(populationPercentages(populations));