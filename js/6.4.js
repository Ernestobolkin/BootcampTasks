const populations = [101, 202, 433, 340];
function populationPercentages(arr){
  let percentages =[];
  for(let i = 0; i < arr.length; i++){
    let pop =((arr[i]/7900)*100)+ '%';
    percentages.push([pop]);
  }
  return percentages;
}
console.log(populationPercentages(populations));


//ivgeny answer!

// const populationArray = [1000, 2000, 3000, 4000];
// const WORLD_POPULATION = 10000;
// const populationPercentages = (arr) => {
//   let percentages = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(
//       `the precentage from world population is : ${
//         (arr[i] / WORLD_POPULATION) * 100
//       }`
//     );
//     // percentages.push(arr[i] / WORLD_POPULATION *100)
//   }
//   console.log('************************************');
//   arr.forEach((element) => {
//     console.log(`the precentage from world population is : ${
//       (element / WORLD_POPULATION) * 100
//     }`);
//     percentages = [...percentages ,(element / WORLD_POPULATION) * 100]
//     console.log('percentages with spread :', percentages);
//   });
//   console.log('percentages:',percentages)
// };
// populationPercentages(populationArray);
