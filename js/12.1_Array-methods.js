var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// const canReadBook = library.filter(element => element.readingStatus === true)
// console.log(canReadBook)

const canReadBook= (arr)=>{
  return arr.filter(status => status.readingStatus === true)
}

console.log(canReadBook(library))