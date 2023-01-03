/*
From: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

Palindrome Checker

* Return true if the given string is a palindrome. Otherwise, return false.
* A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
* Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

 */

function palindrome(str) {
    // remove all non-alphanumberic chars
    // turn everything into lower case
    const sanitizedStr = str.replace(/[^a-z0-9]/ig, '').toLowerCase();
  
    // Loop through each char in the sanitized string
      // i is our index starting at the first char of the string
      // t is our index starting at the last char of the string
      // loop until the indexes meet in the middle
    for (let i = 0, t = sanitizedStr.length-1; i <= t; i++, t-- ) {
      // if the chars at our indexes don't match, return false
      if (sanitizedStr[i] !== sanitizedStr[t]) return false;
    }
  
    // if make it all the way through loop, return true
    return true;
  
  }
  
  console.log(palindrome("eye")); // true
  console.log(palindrome("_eye")); // true
  console.log(palindrome("race car")); // true
  console.log(palindrome("not a palindrome")); // false
  console.log(palindrome("A man, a plan, a canal. Panama")); // true
  console.log(palindrome("never odd or even")); // true
  console.log(palindrome("nope")); // false
  console.log(palindrome("almostomla")); // false
  console.log(palindrome("My age is 0, 0 si ega ym.")); // true
  console.log(palindrome("1 eye for of 1 eye.")); // false
  console.log(palindrome("0_0 (: /-\ :) 0-0")); // true