/*
Sum All Numbers in a Range:
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {
  
  var valMax = Math.max(arr[0],arr[1]);
  var valMin = Math.min(arr[0],arr[1]);
  var result = 0;
  
  for (var i = 0; i <= valMax-valMin; i++){
    result += valMin+i;
  }
  
  return result;
}

sumAll([1, 4]);
