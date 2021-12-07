const room2 = [
  "ernest",
  "omar",
  "fida",
  "svetlana",
  "shaked",
  "mati",
  "daniel",
];

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string" && arr[i].length >= 2) {
        arr[i]=arr[i].toUpperCase()
        resolve(arr);
      } else {
        reject(arr[i]);
      }
    }
  });
};

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    resolve(arr.sort());
  });
};

makeAllCaps(room2)
  .then((arr) => sortWords(arr))
  .then((arr) => console.log(arr))
  .catch((word) => {
    console.log("SOMTHING WENT WRONG");
    console.log(word);
  });
