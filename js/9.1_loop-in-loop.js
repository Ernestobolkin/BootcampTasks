const listOfNeighbours = [
  ["Canada", "Mexico"],//0
  ["Spain"],//1
  ["Norway", "Sweden", "Russia"],//2
 ];

 for(let i = 0 ;i<listOfNeighbours.length;i++){
   let arr = listOfNeighbours[i]; 
  for(let j = 0 ;j<listOfNeighbours[i].length;j++)
  console.log(`Nighbour: `+listOfNeighbours[i][j])
 }  
