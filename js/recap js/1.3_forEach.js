const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((element) => {
  // if (element === "apple") {
  //   const x = element[0].toUpperCase()+element.slice(1)
  //   console.log(`I am eating an ${x}`);
  // } else {
  //   console.log(`I am eating ${element}`);
  // }

  element === "apple"
    ? 
    console.log(`I am eating an ${element[0].toUpperCase()+element.slice(1)}`)
    : console.log(`I am eating ${element[0].toUpperCase()+element.slice(1)}`);
});
