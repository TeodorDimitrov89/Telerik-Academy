"use strict";
// function Compare(args) {
//     // var str = args[0].split('\n');
//     // var firstString  = str[0],
//     //     secondString = str[1];
//     //
//     // if (firstString > secondString) {
//     //     console.log('>');
//     // }else if(firstString < secondString){
//     //     console.log('<');
//     // }
//     // else {
//     //     console.log('=');
//     // }
// }
// Compare(['hello\nhalo']);


function solve(args) {
    let result = args[0].split('\n');
    let arrOne = result[0].split('');
    let arrTwo = result[1].split('');

    let smallerSize = Math.min(arrOne.length, arrTwo.length);
    let areEqual = false;

    for (let i = 0; i < smallerSize; i++) {
        if (arrOne[i] === arrTwo[i]) {
            areEqual = true;
        }
        else if (arrOne[i] > arrTwo[i]) {
            console.log(">");
            return;
        }
        else {
            console.log("<");
            return;
        }
    }
    //if come here then all checked symbols are same -> check for length
    if(areEqual) {
        if (arrOne.length > arrTwo.length) {
            console.log(">");
        }
        else if (arrOne.length < arrTwo.length) {
            console.log("<");
        } else {
            console.log("=");
        }
    }

}

solve(['hello\nhello']);