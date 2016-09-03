/*
Smallest Common Multiple:
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function factorialize(num) {
    var result = 1;
    if (num > 1){
        result = num * factorialize(num-1);
    }
    return result;
}

function smallestCommons(arr) {
    arr = arr.sort(function(a,b){return a-b;});

    var max = factorialize(arr[1]);

    for (var i = 2; i <= max; i++){
        var isSCM = true;
        for (var j = arr[0]; j<=arr[1]; j++){

            if (i%j !== 0.0 && j !== i){
                isSCM = false;
            }
        }
        if (isSCM){
            return i;
        }
    }

    return 1;
}


console.log(smallestCommons([13,1]));

