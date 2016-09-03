/*
No repeats please:
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12.
*/

function permAlone(str) {
    var arr = str.split("").sort(function(a,b){return a>b;}),
        permutations = [],
        repeated = 0;

    for (var i = 0; i < arr.length - 1; i++){
        if (arr[i] === arr[i+1]) repeated += 1;
    }

    if (repeated === arr.length-1) return 0;

    function changePosition(i1, i2) {
        var tmp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = tmp;
    }

    function makePermutations(index) {
        if (index === 1) {
            // Make sure to join the characters as we create  the permutation arrays
            permutations.push(arr.join(''));
        } else {
            for (var i = 0; i != index; ++i) {
                makePermutations(index - 1);
                changePosition(index % 2 ? 0 : i, index - 1);
            }
        }
    }

    makePermutations(arr.length);

    var permWithoutRepeated  = permutations.filter(function(string) {
        return !string.match(/(.)\1+/g);
    });

    return permWithoutRepeated.length;
}

permAlone('aab');
