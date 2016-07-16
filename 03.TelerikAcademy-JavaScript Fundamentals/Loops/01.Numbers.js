"use strict";
function number(arr) {
    var num = arr[0];
    var array1 = [];
    for(var i = 1;i <= num;i++) {
        array1[i] = i;
    }
    var result = array1.join(' ');
    console.log(result);
}
number(['5']);
