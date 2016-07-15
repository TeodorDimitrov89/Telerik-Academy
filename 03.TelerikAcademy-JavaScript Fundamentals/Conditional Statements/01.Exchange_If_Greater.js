"use strict";
function exchangeIfGreater(number) {
    let firstNumber = number[0];  //use var in BgCoder
    let secondNumber = number[1]; //use var in BgCoder
    if(firstNumber>secondNumber) {
        console.log(secondNumber + ' ' + firstNumber);
    }
    else {
        console.log(firstNumber + ' ' + secondNumber);
    }
}
exchangeIfGreater(['5.5', '4.5']);