/*
Pig Latin:
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/

function translatePigLatin(str) {
  var arr = str.split(""),
      consonants = [];
  
  for (var i = 0; i < arr.length; i++){
    if (arr[i] !== "a" && arr[i] !== "e" && arr[i] !== "i" && arr[i] !== "o" && arr[i] !== "u"){
      consonants.push(arr[i]);
    } else { 
      break;
    }
  }
  
  if (consonants.length === 0){
    return str.substr(consonants.length, str.length)+consonants.join("")+"way";    
  }
  else{
    return str.substr(consonants.length, str.length)+consonants.join("")+"ay";
  }
}

translatePigLatin("algorithm");
