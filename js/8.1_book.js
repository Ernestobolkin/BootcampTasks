const Book = {
  'book-name': 'text part 2',
  'written': 'mr.text',
  'year': '2000',
  'about': 'text fantasy',
};
function description(Book){
  return `The book ${Book['book-name']} was written by ${Book['written']} in the year ${Book['year']}`
}
  
console.log(description(Book))