let scrJohn=[89,120,103];
let scrMike=[116,94,123];
let scrMary=[97,134,105];


// function
function avg(score){
  let total=0;
  for(let i=0; i<score.length;i++){
    total+= score[i];
  }
  let avgScore =Math.floor(total/score.length)
  return avgScore;
}
// end of function
let avgJohn = avg(scrJohn) //104
let avgMike = avg(scrMike)  //111
let avgMary = avg(scrMary) //112
let winner;
if(avgJohn >avgMike && avgJohn>avgMary){
  winner = 'John';
}else if(avgMike>avgJohn && avgMike>avgMary){
  winner ='Mike';
}else if(avgMary>avgMike && avgMary>avgJohn){
  winner ='Mary';
}else{ winner='Its a draw';}
console.log(winner)