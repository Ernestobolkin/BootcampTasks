const getIDs = () =>
  new Promise((resolve, reject) => {
    if(true){
      reject("Code:404")
    }else{
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

const test = async () => {
  try{
    const ids = await getIDs();
    const recipe = await getRecipe(ids[2])
    console.log(recipe);
  }catch(error){
    console.log(error,"there is some problem");
  }
};
test()

