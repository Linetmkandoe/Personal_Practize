//Question1
//input: 
//range of numbers
//Process
//Check if a number is divisible by 3
//check if the number is divisible by 5
//check if the number is both divisible by 3 and 5
//output
//"Fizz"
//"Buzz"
//"FizzBuzz"



function fizzBuzz(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(100);

//Question
//input
//number
//process
//check if the number is a prime number
// Output If its a prime or not

//Question3
function isLeap(year){
    if(year% 400==0)
{
  console.log("leap year")
}
else if(year% 100==0)
{
  console.log("Not a leap year")
}
else if(year % 4==0)
{
  console.log("leap year")
}
else{
  console.log("Not a leap year")
}
}
isLeap(2000)

//Question5
//input
//a character
//process
//check if the character is a vowel
//output
// vowel or Constant

function checkVowel(char) {
    char = char.toLowerCase(); 
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return "Vowel";
    } else {
        return "Consonant";
    }
}
checkVowel('z')

//Question6
//input
//array
//process
//compare the numbers in the array to check whether it is a maximum number or minumum number



//Question7
//input
//array of numbers
//process
//go through the array and add the numbers
//output
//single number of the sumation of the numbers

function calculateSum(numbers){
    sum= numbers.reduce((acc,curr)=>acc+curr)
    console.log(sum)
}
calculateSum([20,2,3,4,10])

//Question8
//input
//array of numbers
//process
//check if the number exist in the array
//statement

function checkNumberInArray(array, number) {
    return array.includes(number);
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const numberToCheck = 3;
  
  if (checkNumberInArray(myArray, numberToCheck)) {
    console.log(`${numberToCheck} exists in the array.`);
  } else {
    console.log(`${numberToCheck} does not exist in the array.`);
  }

  function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;// Usage
  }
  
  
  const number = 17;
  console.log(`${number} is prime:`, isPrime(number));
  
