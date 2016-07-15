"use strict";
function pointInACircle(arr) {
    let x = arr[0];
    let y = arr[1];
    let isInside = Math.pow(x,2) + Math.pow(y,2);
    let distance = Math.sqrt(isInside);
    if(isInside <= 4) {
        console.log('yes' + ' ' + distance.toFixed(2));
    }
    else {
        console.log('no' + ' ' + distance.toFixed(2));
    }
}
pointInACircle(['-2','0']);