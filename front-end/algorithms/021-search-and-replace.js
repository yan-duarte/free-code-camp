/*
Search and Replace:
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/

function myReplace(str, before, after) {

  arrBefore = before.split("");
  arrAfter = after.split("");
  
  if (arrBefore[0] === arrBefore[0].toUpperCase()){
    arrAfter[0] = arrAfter[0].toUpperCase();
    after = arrAfter.join("");
  }
  
  //return str.split(before).join(after);
  
  return str.replace(RegExp(before,"i"), after);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");

