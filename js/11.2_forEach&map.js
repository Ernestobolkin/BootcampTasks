const intArry = [1, 2, 3, 4, 5, 6, 7, 8, 10];

//1
const doubleValues = (arr) => {
  const result = [];
  arr.forEach((number) => {
    result.push(number * 2);
  });
  return result;
};
// console.log(doubleValues(intArry));

//2

const onlyEvenValues = (arr) => {
  let result = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      result.push(num);
    }
  });
  return result;
};

// console.log(onlyEvenValues(intArry))

//3
const array3 = [1, "abc", "ab", 5, "abcd", "a", ""];
// output: ['ac', 'ab', 'ad', 'a']

const showFirstAndLast = (arr) => {
  let result = [];
  arr.forEach((value) => {
    if (typeof value !== "string" || !value.length) {
      return;
    }

    if (value.length === 1) {
      result.push(value);
    } else {
      result.push(value[0] + value[value.length - 1]);
    }
  });
  return result;
};

// console.log(showFirstAndLast(array3));

//4

//aeiou
const vowelCount = (str) => {
  let result = {};
  const charArray = Array.from(str);
  charArray.forEach((char) => {
    if ("aeiou".includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  });
  return result;
};

// console.log(vowelCount(string))

const string = "lajhak jbgakphltmc aa uuuu unooaoiao ciby wicq asd b1";


//5
const capitalize = (str) => {
  const words = str.split(" ");
  return words.map((word) => word.toUpperCase()).join(" ");
};
console.log(capitalize(string))

//6
