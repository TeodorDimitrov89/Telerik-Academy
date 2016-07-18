"use strict";
function solve(arr) {
    var newArray = arr;
    var targetNum = newArray[0];
    Array.prototype.removeByVal = function (targetNum) {
        for (var i = 0; i < this.length; i++) {
            if (targetNum === this[i]) {
                this.splice(i, 1);
            }
        }
        return this;
    };
    console.log(newArray.removeByVal(targetNum).join('\n'));
}
solve(['1', '2', '3', '2', '1', '2', '3', '2']);



//var array = ['1', '2', '3', '2', '1', '2', '3', '2'];
//var newArray = array;
//var targetNum = newArray[0];
//for (var i = 0; i < newArray.length; i++) {
//    if (targetNum === newArray[i]) {
//        newArray.splice(i, 1);
//        i--;
//    }
//
//}
//console.log(newArray.join('\n'));