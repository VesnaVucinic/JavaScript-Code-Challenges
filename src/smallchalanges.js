// Create a new function named max() which accepts two numbers as arguments. The function should return the larger of the two numbers. You'll need to use a conditional statement to test the 2 numbers to see which is the larger of the two.
function max(a, b) {
    if (a > b) {
        return a;
    } else {
      return b;
    }
}

function max(  num1, num2 ) {
    return Math.max( num1, num2 );
 }
document.write( max( 18, 9 ) );

// checking if number is even in JavaScript
var isEven = function(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

function isEven(number) {
    return number % 2 === 0;
}

// Check if a number is a whole number
Number.isInteger(23);  // true
Number.isInteger(1.5); // false
Number.isInteger("x"); // false: #

Math.floor(number) === number;
Math.floor(3.0) == 3.0 //is true, 
Math.floor(3.3) == 3.3 //is false 

function isWholeNumber(num) {
    return num === Math.round(num);
}

// Check if a string contains another string as a substring in JavaScript
var source = 'Hello World';
var target = 'llo';
 
console.log(source.includes(target));

// Split a number into its digits

// Use String, split and map :

String(number).split("").map(Number);
function splitNum(num) {
    return String(num).split("").map(Number);
}

console.log(splitNum(1523)); // [1, 5, 2, 3]
console.log(splitNum(2341)); // [2, 3, 4, 1]
console.log(splitNum(325)); // [3, 2, 5]

var num = 123456;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
console.log(realDigits);

