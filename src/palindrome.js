// given a string, return true if the string is a palindrome and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome.
// Reasoning about the challenge
// This challenge revolves around the idea of reversing a string. If the reversed string is the same as the original input string, then you have a palindrome and your function should return true.
// Conversely, if the reversed string isn’t the same as the original input string, the latter is not a palindrome and your function is expected to return false.

const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparisong
    return str === str.split('').reverse().join('')
}

// Start by turning your input string into lower case letters
// Next, reverse the input string. You can do so by turning the string into an array using the String’s .split() method, then applying the Array’s .reverse() method and finally turning the reversed array back into a string with the Array’s .join() method. I’ve chained all these methods above so the code looks cleaner.
// Finally, compare the reversed string with the original input and return the result — which will be true or false according to whether the two are exactly the same or not.