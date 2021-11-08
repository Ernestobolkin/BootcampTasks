
//using numbers to undertand where is the mistake in my ifs and else
function leapyear(year) {
  if(year % 4 === 0){
    if (year % 100 === 0){
      if (year % 400 === 0){
        return('It is indeed a leap year1') 
      }else{ return('This is not a leap year2')}
    }else{ return('It is indeed a leap year3')}
  }else{ return('This is not a leap year4')}
}

console.log(leapyear(2024))

