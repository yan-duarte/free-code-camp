/*
Binary Agents:
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
*/

function binToDecimal(str){
    var arr = str.split(""),
        decimal = 0;

    for (var i = 0; i<arr.length; i++){
        decimal += arr[i]*Math.pow(2,(arr.length - i - 1));
    }
    return decimal;
}

function binaryAgent(str) {
    var arr = str.split(" "),
    arrResult = [];

    for (var i = 0 ; i < arr.length; i++){
        arrResult.push(String.fromCharCode(binToDecimal(arr[i])));
    }

    return arrResult.join("");
}

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
