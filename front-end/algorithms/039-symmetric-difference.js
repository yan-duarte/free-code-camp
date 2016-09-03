/*
Symmetric Difference:
Create a function that takes two or more arrays and returns an array of the symmetric difference (? or ?) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A ? B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C ? D = {1, 4} ? {2, 3} = {1, 2, 3, 4}).

sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
*/

function cleanRepeated(arr){
  for (var i = 0; i < arr.length; i++){
    for (var j = i+1; j < arr.length; j++){
      if (arr[i] == arr[j]){
        arr.splice(j,1);
      }
    }
  }
  return arr;
}

function symDif(arr1, arr2){
  var arrResult = [];

  for (var i = 0; i < arr1.length; i++){
    var isSym = true;
    for (var j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        isSym = false;
      } 
    }    
    if (isSym){
      arrResult.push(arr1[i]);
    }
  }
  return arrResult;
}

function sym(args) {
  var result = [];
  
  result = result.concat(symDif(arguments[0],arguments[1]));
  result = result.concat(symDif(arguments[1],arguments[0]));

  for (var i = 2; i < arguments.length; i++){
    var temp = result;
    result = [];

    result = result.concat(symDif(temp,arguments[i]));
    result = result.concat(symDif(arguments[i],temp));    
  }
       
  return cleanRepeated(result);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) ;

