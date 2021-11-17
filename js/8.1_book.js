const book = {
  book_name: 'text part 2',
  written: 'mr.text',
  year: 2000,
  about: 'text fantasy',
};
function description(book){
  return `The book ${book.book_name} was written by ${book.written} in the year ${book.year}`
}
  
console.log(description(book))