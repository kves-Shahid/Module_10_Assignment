function calculateSum(x, y) {
  return x + y;
}

function isEVEN(n) {
  return n % 2 === 0;
}

function findMax(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

function filterOddNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

function countWords(text) {
  let words = text.trim().split(/\s+/);
  return words.length;
}

function removeDuplicates(items) {
  let unique = [];
  for (let i = 0; i < items.length; i++) {
    if (!unique.includes(items[i])) {
      unique.push(items[i]);
    }
  }
  return unique;
}

console.log("SUM OF TWO ELEMENTS: " + calculateSum(15, 25));
console.log("THIS IS AN EVEN NUMBER: " + isEVEN(7));
console.log("MAXIMUM NUMBER IS: " + findMax([10, 20, 30, 40, 50]));
console.log(
  "ODD NUMBERS ARRAY IS: " + filterOddNumbers([11, 22, 33, 44, 55, 66, 77])
);
console.log(
  "NUMBER OF WORDS IN THE SENTENCE: " +
    countWords("This is a sample sentence for testing")
);
console.log(
  "SET WITHOUT DUPLICATE NUMBERS: " +
    removeDuplicates([5, 10, 15, 10, 20, 25, 20, 30])
);
