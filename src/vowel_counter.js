const vowels = ['a','e','i','o','u'];

function vowelCount(testWord){
  //let testWord = [];
let vowelNum = 0;
for (let i = 0; i < testWord.length; i++)
{
  for (let j = 0; j < vowels.length; j++)
  {
    if (testWord[i] === vowels[j])
    {
      vowelNum++;
    } 
  }
}
return vowelNum;
}
vowelCount('Hello, World!')