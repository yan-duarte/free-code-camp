/*
Missing letters:
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/

function fearNotLetter(str) {
  var arr = str.split("");
  var result = [];
  
  for (var i = 1; i<arr.length; i++){
    if (arr[i-1].charCodeAt() !== arr[i].charCodeAt()-1){
      result.push(String.fromCharCode(arr[i].charCodeAt()-1));
    }
  }
  
  if (result.length <= 0) {
    return undefined;
  }
    
  return result.join("");
}

fearNotLetter("abce");
