"use strict";
function multiplicationSing(arr) {
    var firstNum= arr[0];
    var secondNum= arr[1];
    var thirdNum= arr[2];

    if((firstNum > 0 && secondNum > 0 && thirdNum > 0)
    ||(firstNum < 0 && secondNum < 0 && thirdNum > 0)
        || (firstNum > 0 && secondNum < 0 && thirdNum < 0)
        || (firstNum < 0 && secondNum > 0 && thirdNum < 0)) {
        console.log('+')
    }
    else if((firstNum < 0 && secondNum > 0 && thirdNum > 0)
        ||(firstNum > 0 && secondNum < 0 && thirdNum > 0)
        || (firstNum > 0 && secondNum > 0 && thirdNum < 0)
        || (firstNum < 0 && secondNum < 0 && thirdNum < 0)){
        console.log('-')
    }
    else {
        console.log('0');
    }
}
multiplicationSing(['-1', '0.5', '-5.1']);