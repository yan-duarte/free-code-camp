/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/

function reverseString(str) {
  return ((str.split("")).reverse()).join("");
}

reverseString("Greetings from Earth");
