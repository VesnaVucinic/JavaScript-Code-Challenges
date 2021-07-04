// Most Commonly Used Character in String
// Write a function that takes a string, and returns the character that is most commonly used in the string.

// Most Used Char Plan
// To find the character most often used in a string, we need to be able to count how many of each kind we have. We can do this using an object that has key:value pairs.

// 0. Define and Initialize an object
// 1. Map character count to that object.
// 2. Loop through the object to find the max count.
// 3. Assign new max count value to maxCharCount and new max key to maxChar.
// 4. Return maxChar

const countingChar =(str) => {
    const charCount = {}; // Step 0
    let maxCharCount = 0;
    let maxChar = "";
    for(let i=0; i < str,length; i++) { //Step 1
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }
    for(let key in charCount) { //Step 2
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key] //Step 3
            maxChar = key;
        }
    }
    return maxChar; //Step 4
}
// https://www.educative.io/blog/level-up-javascript-coding-challenges#longest-string-in-an-array