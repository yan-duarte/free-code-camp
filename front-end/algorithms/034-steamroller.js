/*
Steamroller:
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

var newArr = [];

function isArray(arr){
    if (Array.isArray(arr)){
        for (var i = 0; i < arr.length; i++){
            isArray(arr[i]);
        }
    } else {
        newArr.push(arr);
    }
}

function steamrollArray(arr) {
    // I'm a steamroller, baby
    newArr = [];
    isArray(arr);
    return newArr;
}


steamrollArray([1, [2], [3, [[4]]]]);
