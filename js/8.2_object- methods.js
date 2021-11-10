const mycountry = { 
  country: 'Israel',
  capital: 'Jerusalem',
  language: 'Hebrew',
  population: '9.2',
  neighbours:['Lebanon', 'Syria', 'Jordan'],
  describe(){
    console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have 3 neighbouring countries and a capital called ${this.neighbours}`)
  },
  checkIsland(){
    this.neighbours.length === 0 
    ? (this.isIsland= true):(this.isIsland= false);
    console.log(this.isIsland);
  }
}

console.log(mycountry.describe());
console.log(mycountry.checkIsland());