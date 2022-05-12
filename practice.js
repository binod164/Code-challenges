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

let humanYearsCatYearsDogYears = function(humanYears) {
  
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


// 15.write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


function stringy(size) {
  // your code here   
  let result = '';
  for(let i = 1; i <= size; i++ ){
    if(i % 2 === 0){
      result += 0;
    }else{
      result += 1;
    }
  }
  return result;
}

// 16.In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
  //your code here
  let multiples = [];
  for(let i = integer; i<=limit; i++){
    if(i%integer === 0){
      multiples.push(i);
    }
  }
  return multiples;
}


// 17.Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


function removeEveryOther(arr){
  //your code here
  let newArr =[];
  for(let i = 0;i < arr.length; i+=2){
    newArr.push(arr[i]);
  }
  return newArr;
  
}

// 18.Implement a function which multiplies two numbers.

function multiply(a,b){
  return a*b;
}

// 19.If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep = function (num){
  //your code here
  let result = "";
  for(let i = 1; i <= num; i++){
      result += i + " sheep..."
  }
  return result;
}

// 20.Write a function to split a string and convert it into an array of words.

function stringToArray(string){

	// code code code
  return string.split(" ")
}

// 21.Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  let count = 0;
  // your code here
  for(let i = 1; i<n; i++){
    if(i%2 !== 0 ){
      count +=1;
    }
  }
  return count
}
//function oddCount(n){
  // return Math.floor(n/2);
  // }

  // 22.Given a string s, find the length of the longest substring without repeating characters.

  let lengthOfLongestSubstring = function(s) {
    if(s.length === 1){
        return 1;
    }
    let str = "";
    let longestSub = "";
    for(let i = 0;i< s.length;i++){
        str = s[i];
        for(let j = i+1; j <s.length; j++){
            if(!str.includes(s[j])){
            str = str + s[j];
            }else{
                    break;
                }
            }
        if(str.length > longestSub.length){
                longestSub = str;
        }
    }
    
    return longestSub.length;
    
};

//Blind 75

// 1.Contains Duplicate.Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function(nums) {
  let newArr = [];
  for(let i=0; i<nums.length; i++){
      if(!newArr.includes(nums[i])){
          newArr.push(nums[i])
      }else{
          return true;
      }
  }
  
  return false;
};

//2.Valid Anagram.Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

let isAnagram = function(s, t) {
  if(s.length !== t.length){
      return false;
  }
  newS = s.split("").sort();
  newT = t.split("").sort();
  for(let i =0;i<s.length; i++){
      if(newS[i] !== newT[i]){
          return false;
      }
  }
  return true;
  
};

//23.Two Sum.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

let twoSum = function(nums, target) {
  for(let i =0; i < nums.length; i++){
      for(let j = i+1; j < nums.length; j++){
          if(nums[i] + nums[j] === target){
              return [i, j];
          }
      }
  }
};

// 24.Valid palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

let isPalindrome = function(s) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz0123456789"
  newS = s.toLowerCase();
  let newStr = "";
  for(let i=0; i<s.length; i++){
      if (alphabets.includes(newS[i])){
          newStr += newS[i]
      }
  }
  if(newStr.split("").reverse().join('') === newStr){
      return true;
  }else{
      return false;
  }

};

//25.Valid paranthesis.Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let isValid = function(s) {
  let newStr = ""
  let openBrackets = "{(["
  for(let i = 0; i <s.length; i++){
      if(openBrackets.includes(s[i])){
          newStr = newStr + s[i]
      }else{
          if(newStr[newStr.length-1] !== findPair(s[i])){
              return false;
          }else{
              newStr = newStr.slice(0,newStr.length-1);
          }     
      }
  }
  return newStr.length > 0? false : true;
};
  
function findPair(str){
  switch(str){
      case ")":
          return "(";
      case "}":
          return "{";
      case "]":
          return "[";
      default:
          return "";
  }
  
}

//26.Reverse Words in a String III.Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

let reverseWords = function(s) {
  let arr = s.split(" ");
  let result = arr.map(element => element.split("").reverse().join(""));
  return result.join(" ");
};

//27.First Unique Character in a String.Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

let firstUniqChar = function(s) {
  let obj = {}
  for(let i = 0; i<s.length; i++){
     if(obj[s[i]]){
        obj[s[i]]++;
     }else{
            obj[s[i]] = 1;
      }
  }
  for(let i=0; i<s.length; i++){
      if(obj[s[i]]===1){
          return i;
      }
  }
  return -1;
  
};

//28.Final Value of Variable After Performing Operations.There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

let finalValueAfterOperations = function(operations) {
  let X = 0;
  for(let i = 0; i<operations.length; i++){
      if(operations[i] === "--X" || operations[i] === "X--"){
         X = X - 1;
         }else if(operations[i] === "++X" || operations[i] === "X++" ){
             X = X +1;
         }        
  }
  return X;
};

//29.Defanging an IP Address. Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

let defangIPaddr = function(address) {
  return address.replace(/\./g, "[.]"); 
};

//30.A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

let mostWordsFound = function(sentences) {
  let maxWords = 0;
  for(let i=0; i<sentences.length; i++){
      let numOfWords = sentences[i].split(" ").length;
      if(numOfWords > maxWords){
          maxWords = numOfWords; 
      }
  }
  return maxWords;
};

//31.You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.Return the shuffled string.

let restoreString = function(s, indices) {
  let str = "";
  for(let i=0; i<s.length; i++){
      let index = indices.indexOf(i);
      str = str + s[index];
  }
  return str;
};

//32.You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.Given the string command, return the Goal Parser's interpretation of command.

let interpret = function(command) {
  return command.replaceAll("()","o").replaceAll("(al)", "al");
};

//33.Given an integer x, return true if x is palindrome integer.An integer is a palindrome when it reads the same backward as forward.For example, 121 is a palindrome while 123 is not.

let isPalindrome = function(x) {
  let str = x.toString();
  let reverse = "";
for(let i=0; i<str.length; i++){
  reverse = str[i] + reverse;
}
return str === reverse;
};

//34.Implement strStr().Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
  if(!haystack.includes(needle)){
      return -1;
  }else{
      return haystack.indexOf(needle);
  }
  
};

//35.Write a function that reverses a string. The input string is given as an array of characters s.

var reverseString = function(s) {
  return s.reverse();
};

//36.Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

let findDuplicates = function(nums) {
  let obj = {};
  let arr = []
  for(let i =0; i<nums.length; i++){
      if(obj[nums[i]]){
          obj[nums[i]]++;
      }else{
          obj[nums[i]] = 1;
      }
  }
  for(let key in obj){
     if(obj[key] > 1){
         arr.push(key);
     }
  }
  return arr;
};

//37.Fibonacci Number

var fib = function(n) {
  let arr = [0,1];
  if(n === 0 ){
      return 0;
  } else if(n === 1){
      return 1;
  }
  for(let i= 2; i<=n; i++){
      arr.push(arr[i-1] + arr[i-2]);
  }
  return arr[n];
};


//38.Remove duplicates

let str = "aaaabbbbdcjjjjjj"
//output: "abdcj"

function removeDuplicate(word){
    let uniqueItems = new Set(word);
    return [...uniqueItems].join("");
}

//OR 
function unique(str){
  let obj = {};
  let result = "";
  
  for(let i = 0; i<str.length; i++){
      if(!obj[str[i]]){
          obj[str[i]] = 1;
           result = result + str[i];
      }else{
          continue;
      }
  }
  return result;
  }
  

removeDuplicate(str);

//39.Reverse a string


let s = "Hello World"

let arr = s.split(" ");
function reverse(arr){
    return arr.split("").reverse().join("");
}

reverse(s)

//40, Length of Last Word

var lengthOfLastWord = function(s) {
  let newStr = s.trim();
  return newStr.split(" ").pop().length;
};

//41.Longest Common Prefix

var longestCommonPrefix = function(strs) {
	
  for (let i = 0; i < strs[0].length; i++) {
      for(let j = 1; j < strs.length; j++) {
          if (strs[0][i] === strs[j][i]) continue;
          return strs[0].slice(0, i)
      }
  }

  return strs[0]
}

//42.Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
  let obj = {}
  for (let i=0; i<nums.length; i++){
      if(!obj[nums[i]]){
          obj[nums[i]] = 1;
      }else{
          obj[nums[i]]++;
      }
  }
  
  for (let i=0; i<nums.length; i++){
      if(obj[nums[i]] === 1){
          return nums[i];
      }
  }
  
};


//43.Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n) {
  // Write your code here
  
for (let i = 1; i <= n; i++) {
  console.log("#".repeat(i).padStart(n));
}

}

//44.Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.
function compareTriplets(a, b) {
  // Write your code here
  let aliceCount =0;
  let bobCount =0;
  for(let i=0;i<3;i++){
  if(Number(a[i])>Number(b[i])){
      aliceCount++;
  }else if(Number(a[i])<Number(b[i])){
       bobCount++;
  }

}
return [aliceCount,bobCount];
}

//45.Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  // Write your code here
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0;i<=arr.length-1;i++){
      firstSum = firstSum + arr[i][i];
      secondSum = secondSum + arr[arr.length-i-1][i];
  }
  
  return Math.abs(firstSum -secondSum);
  
  

}

//46.There is a sequence of words in CamelCase as a string of letters, , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given , determine the number of words in .

function camelcase(s) {
  // Write your code here
  let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let count = 1;
  
  for(let i=0; i<s.length; i++){
      if(letters.includes(s[i])){
          count++;
      }     
  }
  console.log(count)
  return count;
}

//47.You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
  let maxWealth = 0;
  let wealth = 0;
  for(let i=0; i<accounts.length; i++){
      wealth = accounts[i].reduce((a,b)=>a+b,0);
      if(wealth > maxWealth){
          maxWealth = wealth;
      }
      wealth = 0;
      
  }
  return maxWealth;
};

//48.Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).Return the running sum of nums.

var runningSum = function(nums) {
  let newArr =[];
  let sum = 0;
  for(let i=0; i<nums.length; i++){
      for(let j=0; j<=i; j++){
          sum += nums[j]
      }
  newArr.push(sum);
  sum = 0;
  }
  
  return newArr;
  
};

//49.Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.Return k after placing the final result in the first k slots of nums.

var removeElement = function(nums, val) {
  let j = 0;
  for(let i=0; i<nums.length; i++){
      if(nums[i] !== val){
          nums[j] = nums[i];
          j++;
      }
  }
  return j;
};

//50.Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
var commonChars = function (words) {
  let str = words[0];
  let newStr = "";
  for(let i=1; i<words.length; i++){
      newStr = "";
      for(let j=0; j<words[i].length; j++){
          if(str.includes(words[i][j])){
              str = str.replace(words[i][j], "")
              newStr += words[i][j];
          }
          
      }
      str = newStr; 
  }
  return newStr.split("");
};


//51. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
  let obj = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10, 
      V: 5,
      I: 1
  }
  
  let total = 0;
  for(let i=0; i<s.length; i++){
      if(obj[s[i]]<obj[s[i+1]]){
          total -= obj[s[i]];
      }else{
          total += obj[s[i]];
      }
  }
  return total;
};

//52.Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

let reverseStr = function(s, k) {
  for(let i = 0; i < s.length; i+= k*2) {
    let subStr = s.slice(i, i + k);
    s = s.replace(subStr, subStr.split('').reverse().join(''))
  }
  return s;
};