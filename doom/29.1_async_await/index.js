const getIDs = () =>
  new Promise((resolve, reject) => {
    if (!true) {
      reject("somthing went wrong");
    } else {
      setTimeout(() => {
        resolve([532, 543, 753, 1, 5]);
      }, 1500);
    }
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

const myFunc = async () => {
  try {
    const ids = await getIDs();
    const rec = await getRecipe(ids[2]);
    console.log(rec);
  } catch (error) {
    console.log(error);
  }
};
myFunc();
console.log("hello");
// getIDs()
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log("It is an error!");
//   });
// const test = async () => {
//     const ids = await getIDs();
//     const recipe = await getRecipe(ids[2])
//     console.log(recipe);

// };
