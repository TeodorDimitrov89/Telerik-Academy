"use strict";
function theBiggestOfFiveNum(arr) {
    var a = Number(arr[0]);
    var b = Number(arr[1]);
    var c = Number(arr[2]);
    var d = Number(arr[3]);
    var f = Number(arr[4]);
    if (a > b && a > c && a > d && a > f) {
        console.log(a);
    }
    else if (b > a && b > c && b > d && b > f) {
        console.log(b);
    }
    else if (c > a && c > b && c > d && c > f) {
        console.log(c);
    }
    else if (d > a && d > c && d > b && d > f) {
        console.log(d);
    }
    else {
        console.log(f);
    }
}
theBiggestOfFiveNum(['-3', '-0.5', '-1.1', '-2', '-0.1']);