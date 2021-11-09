function length(arr) {
  const arrayLengths = [];
  for (let i = 0; i < arr.length; i++) {
    arrayLengths[i] = arr[i].length;
  }
  return arrayLengths;
}
console.log(length(["boooodas", "dasddso", "hodasddaoo","roasdadoo"]));