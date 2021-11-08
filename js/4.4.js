function divideHasSeven(n){
  for (i=1; i<=n ;i++){
    if((i%7===0) || (i.toString().includes("7"))){
      console.log('--boom--');
    }else{console.log(i)};
  } 
}
console.log(divideHasSeven(49))

















