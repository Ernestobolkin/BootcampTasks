const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

whoIsStronger(hero.getStrength);

// the problem is that getStrength is not "binded" to the hero obj inside the if in line 12.
// to fix that you need to add bind(hero) inline 16. you can see below the right answer.
whoIsStronger(hero.getStrength.bind(hero));


const test = whoIsStronger(hero.getStrength.bind(hero));

test()