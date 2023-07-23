// 1. Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

function countVowelsAndConsonants(str) {
  const lowerStr = str.toLowerCase();
  const vowels = "aeiou";
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of lowerStr) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (/[a-z]/.test(char)) {
      consonantCount++;
    }
  }

  return { vowelCount, consonantCount };
}

// Example usage:
const inputString = "Hello World";
const { vowelCount, consonantCount } = countVowelsAndConsonants(inputString);

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);

// palindrome

function isPalindrome(str) {
  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const length = cleanedString.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (cleanedString[i] !== cleanedString[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const inputString1 = "radar";
const inputString2 = "Hello";
const inputString3 = "A man, a plan, a canal, Panama!";

  console.log(isPalindrome(inputString1)); // Output: true
  console.log(isPalindrome(inputString2)); // Output: false
  console.log(isPalindrome(inputString3)); // Output: true

function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Async operation is done!");
    callback();
  }, 2000); // Simulating an asynchronous operation that takes 2 seconds
}

function onComplete() {
  console.log("Callback function executed!");
}

// Calling the function with the callback
doSomethingAsync(onComplete);
