const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 12,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandyProperty(candyStore, propertyName) {}
//1
function getCandy(candyStore, id) {
  const theCandys = candyStore.candies;
  return theCandys.filter((element) => element.id === id);
}

// console.log(getCandy(candyStore,"5hd7y")) // output==>[ { name: 'twix', id: '5hd7y', price: 5, amount: 4 } ]
// console.log(getCandy(candyStore,"as12f")) // output==>[ { name: 'mint gum', id: 'as12f', price: 2, amount: 2 } ]

//2
function getPrice(candyStore, id) {
  const theCandys = candyStore.candies;
  const candy = theCandys.find((element) => element.id === id);
  return `The price: ${candy.price}`;
}

// console.log(getPrice(candyStore,"5hd7y")) // price ==> 5
// console.log(getPrice(candyStore,"as12f")) // price ==> 12

// 3
function addCandy(candyStore, id, name, price) {
  const theCandys = candyStore.candies;
  const obj = { name, id, price };
  theCandys.push(obj);
}
// addCandy(candyStore, "jgk57f", "Snickers", 10);
// console.log(candyStore);

//4
function buy(candyStore, id) {
  const theCandys = candyStore.candies;
  const candy = theCandys.find((element) => element.id === id);
  candy.amount -= 1;
  candyStore.cashRegister = candyStore.cashRegister - candy.price;
}
// buy(candyStore,"as12f");
// console.log(candyStore);
