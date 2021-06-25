// Find the Max Value in an array using JavaScript function
function max(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];   
      }
     }
   return max;
}
   
max([4,12,3,8,0,22,56]); //output is 56


// Line one. max function is passed the array [4,12,3,8,0,22,56],

// Line two. max variable is set to the first item in the array. max is 4,

// Line three. A for loop is started which will start from 1 and keep looping for the length of the arr array.

// Line four. Checks if the current array value is larger than the max value.

// So, first time around it checks if arr[1] is greater then max. If yes, max is set to arr[1] First loop checks if (12 > 4) it is so max = 12

// Second time around it checks if arr[2] is greater than max. Second loop checks if(3 > 12) it is not so max = 12

// Third time around it checks if arr[3] is greater then max. Third loop checks if (8 > 12) it is not so max = 12

// Fourth time around it checks if arr[4] is greater then max. Fourth loop checks if (0 > 12) it is not so max = 12

// Fifth time around it checks if arr[5] is greater then max. Fifth loop checks if (22 > 12) it is so max = 22

// Sixth time around it checks if arr[6] is greater then max. Sixth loop checks if (56 > 22) it is so max = 56

// Line eight. The loop has finished and max is returned. max is 56


// Before going through the loop, your function accepts the first array element's value as a "starting"(initial) maximum. That value was 4.
// On every loop iteration, each array value is compared with initial "maximum".
// If the current value is bigger than previous maximum value - that current value overrides it and becomes the maximum.
// much easier and better way: is to use built-in Javascript objects, like Math.approach is preferable for searching min/max values.

var arr = [4,12,3,80,0,22,56];
var max = Math.max.apply(null, arr);
console.log(max); // 80

//  use JavaScript inbuilt reduce method.
var arr = [2,4,6];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max);