"use strict";
function divideBy7And5(arr) {
    if(arr%5==0 && arr%7==0) {
        console.log('true' + ' ' + arr);
    }
    else {
        console.log('false' + ' ' + arr);
    }
}
divideBy7And5(['5']);