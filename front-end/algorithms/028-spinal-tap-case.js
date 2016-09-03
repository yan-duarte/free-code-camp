/*
Spinal Tap Case:
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var arr = str.replace(/_|-/gi," ").split("");
  
  for (var i = 1; i < arr.length; i++){
    if (arr[i] === arr[i].toUpperCase() && arr[i] !== " " && arr[i-1] !== " "){
      arr.splice(i, 0, " ");
    }
  }
  
  str = arr.join("");
  
  return (str.replace(/\s/gi,"-")).toLowerCase();
}

spinalCase("AllThe-small Things");
