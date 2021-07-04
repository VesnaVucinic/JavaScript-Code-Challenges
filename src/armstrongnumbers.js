// An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
function isArmstrongNumber(n) {
    let strN = n + '';
    let power = strN.length;
    let sum = 0;
    for(let i = 0; i < strN.length; i++) {
        sum += Math.pow(Number(strN[i]), power);
    }
    return sum === n;

}

// To solve this problem, we change the number to a string, figure out the power by getting the length of the number, and then use a for loop to add up the individual numbers ^ length of the number passed in.

// We then check to see if the sum is equal to the original number. If it is, it is an Armstrong number.

// https://www.educative.io/blog/level-up-javascript-coding-challenges#longest-string-in-an-array
