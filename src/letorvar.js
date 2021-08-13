var a = 1;
let b = 1;

if(a === b) {
    var a = 2;
    let b = 2;

    console.log(a, b)
}

console.log(a);
console.log(b);
/*What's the difference between using “let” and “var”?
Scope. Variables declared with var have either global or function scope, while variables declared with let have block scope.
In the if block, we created 2 new variables. The first one, with var, has global scope, so it effectively replaces the existing a variable.
The second one, with let, has block scope, so within that block this is what b refers to. But when the block is closed, this variable is removed from memory.
Outside of the if block, b refers to the global variable declared on the 2nd line.

*/ 