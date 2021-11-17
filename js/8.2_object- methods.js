const mycountry = { 
  country: 'Israel',
  capital: 'Jerusalem',
  language: 'Hebrew',
  population: 9.2,
  neighbours:['Lebanon', 'Syria', 'Jordan'],
  describe(){
    const {country,capital,language}=this;
    return`${country} has ${this.population} million people, their mother tongue is ${language}, they have 3 neighbouring countries named ${this.neighbours} and a capital city called ${capital}`;
  },
  checkIsland(){
    this.neighbours.length === 0 
    ? (this.isIsland= true):(this.isIsland= false);
    return this.isIsland ;
  }
}
console.log(mycountry.describe(),);
console.log(mycountry.checkIsland()),3;