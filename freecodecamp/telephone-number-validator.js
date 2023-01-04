/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

Telephone Number Validator

* Return true if the passed string looks like a valid US phone number.
* The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
* For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/

function telephoneCheck(str) {
    const pattern = /^(1?\s?[1-9][0-9]{2}(\s?|-?)|1?\s?[(][1-9][0-9]{2}[)]\s?)[0-9]{3}(\s?|-?)[0-9]{4}$/;
    return pattern.test(str);
  }
  
  console.log(telephoneCheck("1 555 555 5555"), "== true");
  console.log(telephoneCheck("1 555-555-5555"), "== true");
  console.log(telephoneCheck("1 456 789 4444"), "== true");
  console.log(telephoneCheck("1 (555) 555-5555"), "== true");
  console.log(telephoneCheck("1(555)555-5555"), "== true");
  console.log(telephoneCheck("1 555)555-5555"), "== false");
  console.log(telephoneCheck("123**&!!asdf#"), "== false");
  console.log(telephoneCheck("11 555-555-5555"), "== false");
  console.log(telephoneCheck("5555555555"), "== true");
  console.log(telephoneCheck("555-555-5555"), "== true");
  console.log(telephoneCheck("(555)555-5555"), "== true");
  console.log(telephoneCheck("555-5555"), "== false");
  console.log(telephoneCheck("5555555"), "== false");
  console.log(telephoneCheck("55555555"), "== false");
  console.log(telephoneCheck("(6054756961)"), "== false");
  console.log(telephoneCheck("(555-555-5555)"), "== false");
  console.log(telephoneCheck("555)-555-5555"), "== false");
  console.log(telephoneCheck("(555)5(55?)-5555)"), "== false");
  console.log(telephoneCheck("2 757 622-7382"), "== false");
  