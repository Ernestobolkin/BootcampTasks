function percentageOfWorld1(population){
  return ((population/7900)*100).toFixed(3) + '%';
}
console.log(percentageOfWorld1(1441))

// Israel 0.116
console.log(percentageOfWorld1(9.2))
// Ukerain 0.559
console.log(percentageOfWorld1(44.13))
// india 17.582
console.log(percentageOfWorld1(1389))


const percentageOfWorld2 = (population2) => ((population2/7900)*100).toFixed(3)+'%';
console.log(percentageOfWorld2(144))
console.log(percentageOfWorld2(1700))
console.log(percentageOfWorld2(1414))