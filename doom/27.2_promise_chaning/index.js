const room2 = [
  "ernest",
  "daniel",
  "omar",
  "fida",
  "svetlana",
  "shaked",
  "mati",
];

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    for(word of arr){
      if(typeof word === "string"){
        console.log("if is true");
        resolve(arr)
      }else{
        console.log("if is false");
        reject(word)
      }
    }
  });
};

const sortWords = (arr) => {
  return new Promise((resolve, reject)=>{
    resolve(arr)
  })
};

makeAllCaps(room2)
.then((arr)=>sortWords(arr))
.then((arr)=>console.log(arr))
.catch((word)=>{
  console.log("SOMTHING WENT WRONG");
  console.log(word);
})
// sortWords().then