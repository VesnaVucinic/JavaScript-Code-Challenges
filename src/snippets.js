// 1. maxItemOfArray
// This one return the maximum number from an array.
const maxItemOfArray = (arr) => [arr].sort((a, b) => b - a).slice(0, 1)[0];
let maxItem = maxItemOfArray([3, 5, 12, 5])
// 2. areAllEqual
// This snippet checks if all the items of a array are equal.
const areAllEqual = array => array.every(item => item === array[0]);
let check1 = areAllEqual([3, 5, 2]); // false
let check2 = allEqual([3, 3, 3]); // true

// 3. averageOf
// This one returns the average number of the given numbers.
const averageOf = (numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;
let average = averageOf(5, 2, 4, 7); // 4.5

// 4. reverseString
// This snippet reverses a string.
const reverseString = str => [str].reverse().join("");
let a = reverseString("Have a nice day!"); // !yad ecin a evaH

// 5. sumOf
// This one returns the sum of the given numbers.
const sumOf = (numbers) => numbers.reduce((a, b) => a + b, 0);
let sum = sumOf(5, -3, 2, 1); // 5

// 6. findAndReplace
// This snippets find a given word in a string and replace with another one.
const findAndReplace = (string, wordToFind, wordToReplace) => string.split(wordToFind).join(wordToReplace);
let result = findAndReplace("I like banana", "banana", "apple"); // I like apple

// 7. RGBToHex
// This one convert a color in RGB mode to Hex.
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
let hex = RGBToHex(255, 255, 255); // ffffff

// 8. shuffle
// Do you want to know how any music player can shuffle playing item? This snippet will show you how.
const shuffle = ([array]) => {
  let m = array.length;
  
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
};
shuffle([5, 4, 3, 6, 20]);

// 9. removeFalseValues
// This snippet removes false values from an array, which include false, undefined, NaN, empty.
const removeFalseValues = arr => arr.filter(item => item);
let arr = removeFalseValues([3, 4, false, "", 5, true, undefined, NaN, ""]); // [3, 4, 5, true]

// 10. removeDuplicatedValues
// This one removes duplicated item from an array.
const removeDuplicatedValues = array => [new Set(array)];
let arr = removeDuplicatedValues([5, 3, 2, 5, 6, 1, 1, 6]); // [5, 3, 2, 6, 1]

// 11. getTimeFromDate
// This snippet returns time in string from a Date object.
const getTimeFromDate = date => date.toTimeString().slice(0, 8);
let time = getTimeFromDate(new Date()); // 09:46:08
