//using numbers to undertand where is the mistake in my ifs and else
function leapyear(year) {
  if(year % 4 === 0){
    if (year % 100 === 0){
      if (year % 400 === 0){
        return `It is indeed a leap year1, ${year}`  
      }else{ return `This is not a leap year2 ${year}` }
    }else{ return `It is indeed a leap year3 ${year}` }
  }{ return `This is not a leap year4 ${year}` }
}

console.log(leapyear(2024))
console.log(leapyear(2004))
console.log(leapyear(2001))
console.log(leapyear(2100))

