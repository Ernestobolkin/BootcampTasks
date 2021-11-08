function grade(score){
  if(score > 90){
    console.log('A')
  }else if(score > 79){
    console.log('B')
  }else if(score > 69){
    console.log('C')
  }else if(score > 64){
    console.log('D')
  }else{
    console.log('F')
  }
}
console.log(grade(64))