"use strict";
function increaseArrayMember(arr) {
    var result = [];
    for (var i = 0; i < arr[0]; i++) {
        result[i] = i*5;
        console.log(result[i]);
    }
}
increaseArrayMember(['5']);

