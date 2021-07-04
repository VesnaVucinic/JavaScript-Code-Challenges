// Given a string possibly containing three types of braces ({}, [], ()), write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.
// A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets of that same type. No bracket can be left unmatched.

const balancedbrackets = (str) => {
    const stack = [];
    let openers = ["{", "[", "("];
    let closers = ["}", "]", ")"];
    
    const dict = {
      "{" : "}",
      "[" : "]",
      "(" : ")"
    }
  
    for(let i = 0; i < str.length; i++) {
          let char = str[i];
          if(openers.includes(char)) {
              stack.push(char);
          }
          else if(closers.includes(char)) {
              //is our stack empty? 
  
              if(!stack.length) {
                  return false;
              }
              //does our popped element not match the corresponding element?
              else if(dict[stack.pop()] !== char) {
                  return false;
            }
          }
      }
      
      return stack.length === 0;
  
}