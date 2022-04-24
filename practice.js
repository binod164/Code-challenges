//1.Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return parseInt(bin,2);
}

//2.Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  if(ending.length < 1){
    return true;
  }
  endStr = str.slice(-ending.length)
  if(ending === endStr){
    return true;  
  }
  return false;
}

//3.Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
  let newArr = [];
  let count = 0;
  for(let i = 2; i<integer; i++){
    if(integer % i === 0){
      newArr.push(i);
      count = count + 1;
    }    
  }
  if(count < 1){
    return `${integer} is prime`
  }else{
    return newArr;
  }
};

//4.The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

function coinCombo (cents) {
  coins =[0,0,0,0];
  coins[3] = Math.floor(cents /25);
  remainingCents = cents % 25;
  coins[2] = Math.floor(remainingCents /10);
  remainingCents = remainingCents % 10;
  coins[1] = Math.floor(remainingCents /5);
  remainingCents = remainingCents % 5;
  coins[0] = Math.floor(remainingCents /1);
  remainingCents = remainingCents % 1;
  
  return coins;
}

// 5.Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  
  let years =  [0,0,0];
  years[0] = humanYears;
  if(humanYears === 1){
    years[1] = 15
    years[2] = 15   
  }else if(humanYears === 2){
    years[1] = 15 + 9;
    years[2] = 15 + 9;
  }else{
    years[1] = 15 + 9 + (4 * (humanYears -2));
    years[2] = 15 + 9 + (5 * (humanYears -2));
  }
  return years;
}

// 6.Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  let newArr = [];
  for(let i=0; i<array.length; i++){
    if(Math.sqrt(array[i]) === Math.floor(Math.sqrt(array[i]))){
      newArr.push(Math.sqrt(array[i]));
    }else{
      newArr.push(Math.pow(array[i],2));
    }
  }
  return newArr;  
}

// 7.Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


function sameCase(a, b){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  if(alphabet.includes(a.toLowerCase()) && alphabet.includes(b.toLowerCase())){
    if((a === a.toLowerCase() && b === b.toLowerCase())|| (a === a.toUpperCase() && b === b.toUpperCase())){
      return 1 
    }else{
      return 0;
    }  
  }else{
  return -1;
  }
}

// 8.Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  //code here
  let newArr = [];
  let a = n.toString().split("").reverse();
  for(let i = 0; i<a.length; i++){
    newArr.push(parseInt(a[i]));
  }
  return newArr;
}

// 9.There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let totalClassPoints = classPoints.reduce((previousValue,currentValue)=> previousValue+currentValue,yourPoints);
  let averagePoints = totalClassPoints/(classPoints.length+1);
  if(yourPoints > averagePoints){
    return true;
  }
  return false;
}

// 10.Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

function add(a,b){
  return a+b;
}

function divide(a,b){
  return a/b;
}

function multiply(a,b){
  return a*b;
}

function mod(a,b){
  return a%b;
}
 
function exponent(a,b){
  return a**b;
}
  
function subt(a,b){
  return a-b;
}

// 11.Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  //Shuffle It
  return str.split(" ").reverse().join(" ");
}


// 12.Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
  // your code here
  if(a.length > b.length){
    return b + a + b;
  }else{
    return a + b + a;
  }
}

// 13.Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}


// 14.The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

