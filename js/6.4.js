const populations = [101, 202, 433, 340];
function populationPercentages(populations){
  let percentages =[];
  for(let i = 0; i < populations.length; i++){
    let pop =((populations[i]/7900)*100);
    percentages.push([pop]);
  }
  return percentages;
}
console.log(populationPercentages(populations));