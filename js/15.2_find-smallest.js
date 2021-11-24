// 1 the problen is the if. basically all the function
// 2 vsc debuug watch
// the sintax of a>b>c is wrong.

function findSmallest(a, b, c){
  if ((a > c) && (b > c)) {
      return c;
  } else if ((a < c) && (a < b)) {
      return a;
  } else {
      return b;
  }
}
console.log(findSmallest(52, 2, 1)); 

