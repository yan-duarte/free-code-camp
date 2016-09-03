/*
Roman Numeral Converter:
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/

function romConvert(num, arrVal, roman){
  switch (true){
    case (num >= 9 ) : roman += arrVal[0]; break;
    case (num >= 8  && num < 9 ) : roman += arrVal[1]; break;
    case (num >= 7  && num < 8 ) : roman += arrVal[2]; break;
    case (num >= 6  && num < 7 ) : roman += arrVal[3]; break;
    case (num >= 5  && num < 6 ) : roman += arrVal[4]; break;
    case (num >= 4  && num < 5 ) : roman += arrVal[5]; break;
    case (num >= 3  && num < 4 ) : roman += arrVal[6]; break;
    case (num >= 2  && num < 3 ) : roman += arrVal[7]; break;
    case (num >= 1  && num < 2 ) : roman += arrVal[8]; break;
  }
  return roman;
}

function convertToRoman(num) {
  var roman = "",
      hundred = ["CM", "DCCC", "DCC", "DC", "D", "CD", "CCC", "CC", "C"],
      tens =  ["XC", "LXXX", "LXX", "LX", "L", "XL", "XXX", "XX", "X"],
      ones =  ["IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"];
  
  for (var i = 0; i < Math.floor(num/1000); i++){
    roman += "M";
  }
  
  num = num%1000;
  roman = romConvert(Math.floor(num/100),hundred,roman);
  
  num = num%100;  
  roman = romConvert(Math.floor(num/10),tens,roman);
  
  num = num%10; 
  roman = romConvert(num,ones,roman);
  
 return roman;
}

convertToRoman(798);
