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