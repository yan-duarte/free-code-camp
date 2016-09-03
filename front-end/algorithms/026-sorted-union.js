/*
Sorted Union:
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

function uniteUnique(arr1, arr2, arr3) {
  var arrAll = [];
  
  for (var i = 0; i < arguments.length; i++){
    for (var j = 0; j < arguments[i].length; j++){
      arrAll.push(arguments[i][j]);
    }  
  }

  for (var x = 0; x < arrAll.length; x++){
    for (var y = x+1; y < arrAll.length; y++){
      if (arrAll[x] === arrAll[y]){
        arrAll.splice(y,1);
      }
    }
  }
  
  return arrAll;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
