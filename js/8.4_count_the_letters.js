const array1 = ["Hello","Good Day", "Your Welcome", "hotdog", "hamburgers"];
const letterCounter = arr => {
  answer= {};
  for(let string of array1){
    for(letter of string){
      smallLetter = letter.toLowerCase();
      if(!(smallLetter in answer)){
        answer [smallLetter]=1;
      }
      else {
        answer [smallLetter]++;
      }
    }
  }  return answer;
}
console.log(letterCounter(array1))


