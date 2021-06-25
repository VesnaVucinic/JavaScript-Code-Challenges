// A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two. For example, the first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// Understanding the challenge
// The Fibonacci challenge goes something like this: write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function
// fibonacci(3)  // --> 2

// Reasoning about the challenge
// The Fibonacci challenge involves iterating over the number of times indicated by the function’s argument and returning the entry in the Fibonacci series that you find in that position.
// Alternatively, you could try out a recursive solution, which would certainly impress the interviewer.

// iterative solution might look like:
const fibonacci = num => {
    // store the Fibonacci sequence you're going
    // to generate inside an array and
    // initialize the array with the first two
    // numbers of the sequence
    const result = [0, 1]
  
    for(let i = 2; i <= num; i++) {
      // push the sum of the two numbers
      // preceding the position of i in the result array
      // at the end of the result array
      const prevNum1 = result[i - 1]
      const prevNum2 = result[i - 2]
      result.push(prevNum1 + prevNum2)
    }
    // return the last value in the result array
    return result[num]
}

// The reason why the result array above already contains the first two numbers in the series is because each entry in the Fibonacci series is made of the sum of the two preceding numbers.
//  At the very beginning of the series there are no two numbers that you can add to produce the next number, so your loop could not possibly generate them automatically. 
// However, you know the first two numbers are always 0 and 1, so you manually initialize your result array with those two numbers.

// the recursive approach:
const fibonacci = num => {
    // if num is either 0 or 1 return num
    if(num < 2) {
      return num
    }
    // recursion here
    return fibonacci(num - 1) + fibonacci(num - 2)
}

// You keep calling fibonacci() adding up smaller and smaller numbers as arguments until you hit the base case at the top where the argument passed in is either 0 or 1.

// https://www.sitepoint.com/5-common-coding-interview-challenges/

