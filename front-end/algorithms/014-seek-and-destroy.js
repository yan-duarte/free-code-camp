/*
Seek and Destroy:
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/

function destroyer(arr) {
  var varArguments = arguments;
  
  return arr.filter(function(val){
    for (var i = 1; i < varArguments.length; i++){
      if (val === varArguments[i]){
        return false;        
      } 
    }
    return val;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);