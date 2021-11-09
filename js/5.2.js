function language(lang){
  switch(lang){
    case 'mandarin' :
      return 'MOST number of native speakers!' ;
    case 'spanish' :
      return '2nd place in number of native speakers';
    case 'english' :
      return'3rd place';
    case 'hindi' :
      return 'Number 4' ;
    case 'arabic' :
      return '5th most spoken language' ;
    default:
      return 'Not in the top 5'
  }
}
console.log(language('english'))