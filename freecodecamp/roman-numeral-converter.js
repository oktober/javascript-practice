/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

Roman Numeral Converter

* Convert the given number into a roman numeral.
* All roman numerals answers should be provided in upper-case.

 */

function convertToRoman(num) {
    const numeralConverter = {
      1000: 'M',
      900:  'CM',
      500:  'D',
      400:  'CD',
      100:  'C',
      90:   'XC',
      50:   'L',
      40:   'XL',
      10:   'X',
      9:    'IX',
      5:    'V',
      4:    'IV',
      1:    'I'
    };
    const converted = [];
  
    let arabicNumbers = Object.keys(numeralConverter);
    let highestArabic = 0;
  
    // keep checking the numeralConverter object until we get all the numbers for `num`
    while(num > 0) {
      // find the highest arabic number that matches `num` without going over
      arabicNumbers.forEach((number) => {
        if (number <= num) highestArabic = number;
      });
      // add the roman number for that number to the converted array
      converted.push(numeralConverter[highestArabic]);
      // reduce `num` by this arabic number
      num -= highestArabic;
    }
  
    // join the values in `converted` to return a string
    return converted.join('');
  }
  
  console.log(convertToRoman(2), "should be II");
  console.log(convertToRoman(3), "should be III");
  console.log(convertToRoman(4), "should be IV");
  console.log(convertToRoman(5), "should be V");
  console.log(convertToRoman(9), "should be IX");
  console.log(convertToRoman(12), "should be XII");
  console.log(convertToRoman(16), "should be XVI");
  console.log(convertToRoman(29), "should be XXIX");
  console.log(convertToRoman(44), "should be XLIV");
  console.log(convertToRoman(45), "should be XLV");
  console.log(convertToRoman(68), "should be LXVIII");
  console.log(convertToRoman(83), "should be LXXXIII");
  console.log(convertToRoman(97), "should be XCVII");
  console.log(convertToRoman(99), "should be XCIX");
  console.log(convertToRoman(400), "should be CD");
  console.log(convertToRoman(500), "should be D");
  console.log(convertToRoman(501), "should be DI");
  console.log(convertToRoman(649), "should be DCXLIX");
  console.log(convertToRoman(798), "should be DCCXCVIII");
  console.log(convertToRoman(891), "should be DCCCXCI");
  console.log(convertToRoman(1000), "should be M");
  console.log(convertToRoman(1004), "should be MIV");
  console.log(convertToRoman(1006), "should be MVI");
  console.log(convertToRoman(1023), "should be MXXIII");
  console.log(convertToRoman(2014), "should be MMXIV");
  console.log(convertToRoman(3999), "should be MMMCMXCIX");