// 1.
// vowelCount('futureproof') /*=> 5 */
// // vowelCount('Hello, World!') /*=> 3 */

// function vowelCount(string) {
//   // These are the vowels
//   const vowels = ['a', 'e', 'i', 'o', 'u']

//   // This will count the number of vowels in string
//   let counter = 0

//   for (index = 0; index < string.length; index++) {
//     for (vIndex = 0; vIndex < vowels.length; vIndex++) {
//       if (string[index] === vowels[vIndex]) {
//          counter ++;
//       }
//     }
//   }
//   console.log(counter)

//   return counter
// }
// // will return 5 

// 2. 
// we have function vowel which we pass our string to
// we will loop through the string and if there are any vowels we will increase our counter with 1 at a time
function vowelCount(word){
    let counter = 0;
    for(i=0; i<word.length; i++){
    // Comparison Operators === // strictly equal to
    //  have two comparison statements that we need to be true
    // we just need one condition to be true, in this case we use the double pipe operator.
      if(word[i] === 'a' || word[i] === 'e' || word[i] ==='i' || word[i] ==='o' || word[i] ==='u'){
        counter++;
      }
    
    }
    return counter;
    
  }
//   /* Uncomment these one by one and hit 'Run' to test your code!: */
// //   vowelCount('futureproof') /*=> 5 */
/  vowelCount('Hello, World!') /*=> 3 */
//   console.log(vowelCount('Hello, World!'))


// https://www.youtube.com/watch?v=9WtTlhRrsbs
const vowels = ['a','e','i','o','u'];

function vowelCount(testWord){
  //let testWord = [];
let vowelNum = 0;
for (let i = 0; i < testWord.length; i++)
{
  for (let j = 0; j < vowels.length; j++)
  {
    if (testWord[i] === vowels[j])
    {
      vowelNum++;
    } 
  }
}
return vowelNum;
}

// // run through test word letters
// // check if current letter is equal to vowels
//     // to do this run through vowels
//     // if they are equal add 1 to vowel count




// /* Uncomment these one by one and hit 'Run' to test your code!: */
// // vowelCount('futureproof') /*=> 5 */
// vowelCount('Hello, World!') /*=> 3 */
// console.log(vowelCount('Hello, World!'))  

const vowels = ['a','e','i','o','u'];

function vowelCount(testWord){
  //let testWord = [];
let vowelNum = 0;
for (let i = 0; i < testWord.length; i++)
{
  for (let j = 0; j < vowels.length; j++)
  {
    if (testWord[i] === vowels[j])
    {
      vowelNum++;
    } 
  }
}
return vowelNum;
}

// run through test word letters
// check if current letter is equal to vowels
    // to do this run through vowels
    // if they are equal add 1 to vowel count




/* Uncomment these one by one and hit 'Run' to test your code!: */
vowelCount('futureproof') /*=> 5 */
// vowelCount('Hello, World!') /*=> 3 */
console.log(vowelCount('futureproof'))

// https://www.codegrepper.com/code-examples/javascript/count+number+of+vowels+in+a+string+javascript

// parametar is in the bracket of function, idea is that is placeholder
// let's say there's gonna bi something in input in function and every place in this 
// function I put this parametar whenever function is called replace every instance
// of this with the argument, 
// it means we can our functions mor dynamic to accept any string



// For Loop
// A for loop declares looping instructions, with three important pieces of information separated by semicolons ;:

// The initialization defines where to begin the loop by declaring (or referencing) the iterator variable
// The stopping condition determines when to stop looping (when the expression evaluates to false)
// The iteration statement updates the iterator each time the loop is completed

// for (let i = 0; i < 4; i += 1) {
//     console.log(i);
//   };
   
//   // Output: 0, 1, 2, 3

// Looping Through Arrays
// An array’s length can be evaluated with the .length property. This is extremely helpful for looping through arrays, as the .length of the array can be used as the stopping condition in the loop.

// for (let i = 0; i < array.length; i++){
//   console.log(array[i]);
// }
 
// Output: Every item in the array
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Often this is the case when working with arrays
//  one can iterate over an array in Javascript. Using for loop.
// Referencing items in arrays is done with a numeric index, starting at zero and ending with the array length minus 1.
// . The syntax to access an array member
// As you can see the for loop statement uses three expressions: the initialization, the condition, and the final expression. The final expression is executed at the end of each loop execution. It is commonly used to increment the index.
// JavaScript arrays are used to store multiple values in a single variable.
// You access an array element by referring to the index number.
// This statement accesses the value of the first element in cars array var name = cars[0];
// Arrays use numbers to access its "elements".

// The length property returns the number of elements
// The length property is always one more than the highest array index.
// The safest way to loop through an array, is using a for loop:
// From the example above, you can read:

// Statement 1 sets a variable before the loop starts (var i = 0).

// Statement 2 defines the condition for the loop to run (i must be less than 5).

// Statement 3 increases a value (i++) each time the code block in the loop has been executed.

//  for loop starts with :
//  - create variable named i and it starts it out with the number 0
//  - then every time it reaches the bottom of the loop where the bracket is,
// it goes back to the top and runs that bit of code: i++,  increasing i by 1,
//  and then checks against that bit of code i<word.length; ,
// if i is les then word.length, it runs this code again, if not it exits a loop
// so whwtever is inside brackets {} we are doing word.length -1 times and in each loop 
// i is going to be increased by 1.
// We need something to output the results.
// In JavaScript, that's in a plain text window, we use console.log()
//  so console.log(i) - that means print output whatever is in the i variable

for (let i = 0; i < word.length; i++) {
    console.log(i)
  }


  :first-of-type
  The :first-of-type CSS pseudo-class represents the first element of its type among a group of sibling elements.
  
  /* Selects any <p> that is the first element
     of its type among its siblings */
  p:first-of-type {
    color: red;
  } 