function FizzBuzz(value1, value2) {
  let returnValue = "";
  
 
  for (let i = 1; i <= 100; i++) {
    if (i % value1 == 0 && i % value2 == 0) {
      returnValue += "FizzBuzz";
    }
    else if (i % value1 == 0) {
      returnValue += "Fizz";
    }
    else if (i % value2 == 0) {
      returnValue += "Buzz"
    }
    else {
      returnValue += i + ""
    }
  }

  return returnValue;
}