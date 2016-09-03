/*
Title Case a Sentence:
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/

function titleCase(str) {
  
  //return str.replace(/\w\S*/g, function(newStr){return newStr.charAt(0).toUpperCase() + newStr.substr(1).toLowerCase();});
  
  var strList = (str.toLowerCase()).split(" ");
  
  for (var i = 0; i < strList.length; i++){
    var temp = strList[i].split("");
    temp[0] = temp[0].toUpperCase();
    
    strList[i] = temp.join("");
  }
  
  return strList.join(" ");
  
}

titleCase("I'm a little tea pot");
