"use strict";
function theBiggestOfThree(arr) {
    var firstNum = Number(arr[0]);
    var secondNum = Number(arr[1]);
    var thirdNum = Number(arr[2]);
    var greater;
    var greatest;
    // var maxNum = Math.max(Math.max(firstNum, secondNum, thirdNum))
    // console.log(maxNum);
    if (firstNum > secondNum) {
        greater = firstNum;
    } else {
        greater = secondNum;
    }
    if (greater > thirdNum) {
        greatest = greater;
    } else {
        greatest = thirdNum;
    }
    return console.log(greatest);

}
theBiggestOfThree(['-2', '-2', '1']);