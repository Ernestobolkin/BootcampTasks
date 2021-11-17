// 1. the line that is the problem is the line where declaretion of the sum.
// 2. i used the console.log for debbuging.
// 3. the bus is that when you declare a variable for summing you need to do =0, becose when you dont the varibale is undiefinde or Not a number.

// 4:
function calcAverage (arr){
  var sum = 0 ;
  for ( var i = 0 ; i < arr .length; i ++ ){
  sum += arr [ i ];
  }
  return sum ;
  }
  console.log(calcAverage ([ 85 , 90 , 92 ]));