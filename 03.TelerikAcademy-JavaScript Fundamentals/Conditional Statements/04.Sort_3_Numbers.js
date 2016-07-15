"use strict";
function sort3Numbers(arr) {
    var firstNum = Number(arr[0]);
    var secondNum = Number(arr[1]);
    var thirdNum = Number(arr[2]);
    if(firstNum == secondNum && firstNum == thirdNum) {
        console.log(firstNum + ' ' + firstNum + ' ' + firstNum);
        return;
    }
    if(firstNum > secondNum && firstNum > thirdNum) {
        if(secondNum > thirdNum) {
            console.log(firstNum+' '+secondNum + ' ' + thirdNum)
        }
        else if(thirdNum > secondNum) {
            console.log(firstNum + ' ' + thirdNum + ' ' + secondNum)
        }
        else if(secondNum == thirdNum) {
            console.log(firstNum + ' ' + secondNum + ' ' + secondNum)
        }
    }
    else if(secondNum > firstNum && secondNum > thirdNum) {

        if(firstNum > thirdNum) {
            console.log(secondNum+' '+firstNum + ' ' + thirdNum)
        }
        else if(thirdNum > firstNum) {
            console.log(secondNum + ' ' + thirdNum + ' ' + firstNum)
        }
        else if(firstNum == thirdNum) {
            console.log(secondNum + ' ' + firstNum + ' ' + thirdNum)
        }
    }
    else if(thirdNum > firstNum && thirdNum > secondNum) {

        if(secondNum > firstNum) {
            console.log(thirdNum+' '+ secondNum + ' ' + firstNum)
        }
        else if(firstNum > secondNum) {
            console.log(thirdNum + ' ' + firstNum + ' ' + secondNum)
        }
        else if(secondNum == firstNum) {
            console.log(thirdNum + ' ' + firstNum + ' ' + firstNum)
        }
    }
}
sort3Numbers(['-2', '-2', '1']);