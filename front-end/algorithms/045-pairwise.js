/*
Pairwise:
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 ? Indices 0 + 3 = 3
9 + 11 = 20 ? Indices 1 + 2 = 3
3 + 3 = 6 ? Return 6

pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
pairwise([1, 3, 2, 4], 4) should return 1.
pairwise([1, 1, 1], 2) should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
pairwise([], 100) should return 0.
*/

function alreadyGo(val1,val2,arr){
  for (var i = 0; i < arr.length; i++){
    if (val1 === arr[i] || val2 === arr[i]) return true;
  }  
  return false;
}

function pairwise(arr, arg) {
  var sum = 0,
      arrAlreadyGo = [];
  
  for (var i = 0; i < arr.length; i++){
    for (var j = i+1; j < arr.length; j++){
      if (arr[i]+arr[j] === arg && alreadyGo(i,j, arrAlreadyGo) === false){
        sum += i+j;
        arrAlreadyGo.push(i);
        arrAlreadyGo.push(j);
      }
    }
  }
  
  return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
