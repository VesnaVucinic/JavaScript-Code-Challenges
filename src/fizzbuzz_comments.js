// primer za 1 do 100
 for (let i = 1; i <= 100; i++) {
    console.log(i)
  }
  
  // 2. primer jedno ispod drugog
  for (let i = 1; i <= 100; i++) {
  
    if ( i % 3 == 0) {
      console.log("Fizz");
    }
    if ( i % 5 == 0) {
      console.log("Buzz");
    }
    if ((i % 3 == 0) && (i % 5 == 0)){
      console.log("FizzBuzz")
    }
    if ((i % 3 != 0) && (i % 5 != 0)) {
      console.log(i)
    }
  }
  
  // 3. primer jedan ispod drugog najelegantniji
  for (let i = 1; i <= 100; i++) {
    let output = ""
    if(i % 3 == 0) {output = "" + "Fizz"}
    if(i % 5 == 0) {output += "Buzz"}
  
    if(output == "") {output = i;}
    console.log(output);
  }
  
  // FizzBuzz is game between 2 people and you count up in turn  
  // 1,2,3,4, except every time there's multiple of 3 you say "Fizz" instead of the number 
  // and every time there's a multiple of 5, you say "Buzz"
  // so 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, and so on so on ........and when it's a 
  // multiple of both at 15, you say "FizzBuzz"
  // Whrie a program that outputs FizzBuzz for the number 1 to 100
  
  // If it's a multiple of 3, you do something.
  // If it's a multiple of 5 you do somenthing else.
  // If it's a multiple of both, you do a third thing.
  // and if it's neither, you do a fourth thing.
  
  // First and most obious thing create a loop. We are going to want to run through numbers 1 to 100,
  // so we create a for loop for: for (let i = 1; i <= 100; i++) {
    
  // }
  //  for loop starts with :
  //  - create variable named i and it starts it out with the number 1
  //  - then every time it reaches the bottom of the loop where the bracket is,
  // it goes back to the top and runs that bit of code: i++,  increasing i by 1,
  //  and then checks against that bit of code  i <= 100,
  // if i is les then or equal to 100, it runs this code again, if not it exits a loop
  // so whwtever is inside brackets {} we are doing 100 times and in each loop 
  // i is going to be increased by 1.
  // We need something to output the results.
  // In JavaScript, that's in a plain text window, we use console.log()
  //  so console.log(i) - that means print output whatever is in the i variable
  // test it and you will get 1 to 100 
  for (let i = 1; i <= 100; i++) {
    console.log(i)
  }
  // but we want output "Fizz", "Buzz" or "FizzBuzz"
  
  for (let i = 1; i <= 100; i++) {
  
    console.log("Fizz")
  
    console.log("Buzz")
  
    console.log(i)
  }
  // so let put that in an if statement
  for (let i = 1; i <= 100; i++) {
  
    if (             ){
    console.log("Fizz");
    }
    if (             ) {
    console.log("Buzz")
    }
    if (             ) {
    console.log(i)
    }
  }
  // if what?
  // If i is multiple of 3, we need to write "Fizz"
  // so code
  for (let i = 1; i <= 100; i++) {
  
    if (i % 3 == 0){
    console.log("Fizz");
    }
    if (             ) {
    console.log("Buzz")
    }
    if (             ) {
    console.log(i)
    }
  }
  // That persentage % sign is the modulo operator.
  // It retuns the remainder after you divide something
  // so here i % 3 it's saying divide i by 3 and return the remainder
  // if the remainder is 0, i % 3 == 0, then we know i is a multiple of 3,
  // and we run that console.log("Fizz"); code
  // and if remainder is anything else, then i is not a multiple of 3, and we skip it.
  // so now again for 5
  for (let i = 1; i <= 100; i++) {
  
    if (i % 3 == 0){
    console.log("Fizz");
    }
    if (i % 5 == 0) {
    console.log("Buzz")
    }
    if (             ) {
    console.log(i)
    }
  }
  // Now what about FizzBuzz, if it's a multiple of both 3 and 5?
  // Well that's already been done for us, right?
  // If it's a multiple og both then these tests are to going to return true,
  // and we get "Fizz" and "Buzz"
  // So the last bit: if neither of these are true just outp the number console.log(i)
  // and in this case we want that (i % 3 != 0) && (i % 5 != 0), != that means "not equal to"
  // and that means && "and"
  for (let i = 1; i <= 100; i++) {
  
    if ( i % 3 == 0) {
      console.log("Fizz");
    }
    if ( i % 5 == 0) {
      console.log("Buzz");
    }
    if ((i % 3 != 0) && (i % 5 != 0)) {
      console.log(i)
    }
  }
  // so this whole (i % 3 != 0) && (i % 5 != 0) section will only return true if both the bits in the brackets are true
  // let's run it and it's OK but what is going on with 15 That says "Fizz" and then "Buzz"
  // that two separate lines and two separate answers and that is not technically correct
  // 'cos needs to say "FizzBuzz" there. One line.
  // so we can add few more tests. Let's add a separate one for FizzBuzz there
  // if ((i % 3 == 0) && (i % 5 == 0)){
  //   console.log("FizzBuzz")
  // }
  for (let i = 1; i <= 100; i++) {
  
    if ( i % 3 == 0) {
      console.log("Fizz");
    }
    if ( i % 5 == 0) {
      console.log("Buzz");
    }
    if ((i % 3 == 0) && (i % 5 == 0)){
      console.log("FizzBuzz")
    }
    if ((i % 3 != 0) && (i % 5 != 0)) {
      console.log(i)
    }
  }
  
  // using what we 've learnd already. 
  // if both of those tests (i % 3 == 0) && (i % 5 == 0) return true, print "FizzBuzz" console.log("FizzBuzz")
  // And then let's add some moe tests in there, so they don't fire twice
  
  for (let i = 1; i <= 100; i++) {
  
    if (( i % 3 == 0) && (i % 5 != 0)) {
      console.log("Fizz");
    }
    if ((i % 3 != 0) && ( i % 5 == 0)) {
      console.log("Buzz");
    }
    if ((i % 3 == 0) && (i % 5 == 0)){
      console.log("FizzBuzz")
    }
    if ((i % 3 != 0) && (i % 5 != 0)) {
      console.log(i)
    }
  }

 // This is getting quite ugly
// Repeating yourself like this is a sign of dodgy code.
// It's clusy, it's a difficult to read and difficult to maintaim.
// So let's change it around a bit
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
      console.log("FizzBuzz");
    }
  }
  // Let's test for both being true first
  // Now we can use else statement 
  // If it's not a multiple of both, is it just a multiple of 3?
  for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
      console.log("FizzBuzz");
    }
    else if (i % 3 ==0) {
      console.log("Fizz")
    }
  }
  // and if it's not if is just a multiple of 5?
  for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
      console.log("FizzBuzz");
    }
    else if (i % 3 ==0) {
      console.log("Fizz")
    }
    else if (i % 5 ==0) {
      console.log("Buzz")
    }
  }
  // and if it's still not, then we know to just output the number.
  for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
      console.log("FizzBuzz");
    }
    else if (i % 3 ==0) {
      console.log("Fizz");
    }
    else if (i % 5 ==0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  } 

// But to me this is still dodgy.
// If someone say 'okay, now we want it work on multiples of 7, not 5,
// and that isb common sort of follow-up question for someone like this,
// you have to remember to change all the 5s.
// not a problem in section of code this small but once you start working
// on sometning big, this is really bad practice.
// Ideally, you shouldn't run the same test twice
// But, how else can be done?
// wee we ca ncreate variable output that is just an empty string
for (let i = 1; i <= 100; i++) {
    let output = "";
  }
  // A blank bit of text, nothing in it.
  // if i is multiple of 3, you add "Fizz" to that line of text
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) {output += "Fizz";}
  }
  // you don't print output anything yet you just store that for the future
  // If i is a multiple of 5, you just add "Buzz" to that line of text
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) {output += "Fizz";}
    if (i % 5 == 0) {output += "Buzz";}
  }
  // Don't replace it just add it
  // And then don't test the number again - test that string of text output == ""
  // if it's empty we know those tests were true, so just make the text the value of i.
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) {output += "Fizz";}
    if (i % 5 == 0) {output += "Buzz";}
    if (output == "") {output = i;}
    console.log(output)
  }
  // Now at the and of the loop, you output ... well, the output console.log(output)
  // and now if you need to change 7 not 5 you just need to change on one obvious place
  // if they say 'make it work on 3s, 5s, 7s, 11s and 13s'
  // you just copy and paste that line.
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) {output += "Fizz";}
    if (i % 5 == 0) {output += "Buzz";}
    if (i % 7 == 0) {output += "Fuzz";}
    if (i % 11 == 0) {output += "Bizz";}
    if (i % 13 == 0) {output += "Biff";}
    if (output == "") {output = i;}
    console.log(output)
  }