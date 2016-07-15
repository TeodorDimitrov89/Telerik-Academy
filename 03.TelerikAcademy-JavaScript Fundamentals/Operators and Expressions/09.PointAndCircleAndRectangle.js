"use strict";
function pointCircleRectangle(arr) {
    var x = arr[0];
    var y = arr[1];
    var isInsideCircle = Math.pow(x - 1, 2) + Math.pow(y - 1, 2) <= Math.pow(3,2);
    var isOutsideRec = (x < 2 || x > 6) && (y > 1 || y < -1);
    if (isInsideCircle && !isOutsideRec) {
        console.log('inside circle inside rectangle');
    }
    else if (isInsideCircle && isOutsideRec) {
        console.log('inside circle outside rectangle');
    }
    else if (!isInsideCircle && isOutsideRec) {
        console.log('outside circle outside rectangle');
    }
}
// (xi-x)^2 + (yi-y)^2 <= d ^2
pointCircleRectangle(['2.5', '2']);