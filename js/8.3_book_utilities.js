const book1 = {
  bookname : 'text part 2',
  author : 'mr.text',
  year : '2000',
};
const book2 = {
  bookName : "Opening skinner's box",
  author : 'Lauren Salter',
  year : '2005',
};

//3
const bookUtils = {};

bookUtils.getFirstPublisher = (book1, book2) => 
{
  return book1.year > book2.year ? book1:book2;
}
// console.log(bookUtils.getFirstPublisher(book1, book2))

//4
bookUtils.setNewEdition = (book,editionYear) =>
{
  book.Latest_Edition = editionYear;
} 
bookUtils.setNewEdition(book1,'2001')
// console.log(book1)

//5
bookUtils.setLanguage = (book,language) =>
{
  book.Language = language
} 
bookUtils.setLanguage(book2,'Hebrew')
// console.log(book2)


//6
bookUtils.setTranslation =(book,language,translator)=>
{
  book.translation = {
      language,
      translator
  };
}
bookUtils.setTranslation(book1,'English','Hebrew')
// console.log(book1)

// 7
bookUtils.setPublisher =(book,location,publisher)=>
{
  book.publisher = {
      location,
      publisher
  };
}
bookUtils.setPublisher(book1,'NY','idk')
// console.log(book1)

bookUtils.isSamePublisher = (book1, book2) => {
  return  book1.publisher === book2.publisher &&
          book1.location === book2.location;
}
// console.log(bookUtils.isSamePublisher(book1, book2))