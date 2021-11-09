function countryToLiveIn(language,isIsland, population,country){
  if(language === 'Russian' && isIsland === false && population <= 11 && country === 'Moscow'){
    return 'you should live in Russia Moscow'
  }else{
    return 'Moscow is not the place for you';
  } 
}

console.log(countryToLiveIn('canada',true,9.2,'israel'))