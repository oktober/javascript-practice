/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

Caesars Cipher

* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
* Write a function which takes a ROT13 encoded string as input and returns a decoded string.
* All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

 */

function rot13(str) {
    const deciphered = [];
  
    for (let i = 0; i < str.length; i++) {
  
      // if this is a letter
      if (/[A-Z]/.test(str[i])) {
        // get its charCode, subtract 65 (for the start of the Unicode A) 
          // and add 13 (to rotate the cipher)
        const rotatedCharCode = str[i].charCodeAt() - 65 + 13;
  
        // mod 26 that number to keep it from A-Z
          // and add 65 to the final number
        const newCharCode = (rotatedCharCode % 26) + 65;
  
        // push the new letter onto array
        deciphered.push(String.fromCharCode(newCharCode));
      } else {
        // not a letter, so just push this value onto array
        deciphered.push(str[i]);
      }
  
    }
  
    return deciphered.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"), "should be FREE CODE CAMP");
  console.log(rot13("SERR CVMMN!"), "should be FREE PIZZA!");
  console.log(rot13("SERR YBIR?"), "should be FREE LOVE?");
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), "should be THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");