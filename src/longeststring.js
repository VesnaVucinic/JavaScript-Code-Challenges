// 0. Initialize and Declare Variable for Longest String
// 1. Loop through the array
// 2. Find the length of each string
// 3. Determine if that length is the largest we have seen so far.
// 4. Replace the longest/largest variable with the arr[index] as long as length is greater than the variable.
// 5. Return longest/largest string.

// OVO NE NEGO ISPOD
//ES 5 Syntax Possible Solution
function longestString1(arr) {
    var longest =""; //Step 0
    for (var i = 0; i < arr.length; i++) { // Step 1
        if (arr[i].length > longest.length) { //Step 2 & 3
            longest = arr[i]; //Step 4
        }
    }
    return longest; //Step 5
}

// ES 6 Syntax Possible Solution
const longestString2 = (arr) => {
	let longest = ''; // Step 0
	arr.forEach((item) => { // Step 1
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest; // Step 5
};
