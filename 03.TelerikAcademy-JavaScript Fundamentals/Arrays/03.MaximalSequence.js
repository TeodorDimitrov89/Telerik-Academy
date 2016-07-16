"use strict";
function maxSequence(arr) {
    var args = arr[0].split('\n');
    var numArray = [];
    var maxLength = 0;
    var length = 1;
    for (var i = 1; i <= Number(args[0]); i++) {
        numArray[i] = args[i];
    }
    for (var j = 0; j < numArray.length - 1; j++) {
        if(numArray[j] === numArray[j+1]) {
            length++;
        }
        else {
            length = 1;
        }
        if (length > maxLength){
            maxLength = length;
        }
    }
    console.log(maxLength);
}
maxSequence(['11\n10\n2\n1\n2\n2\n2\n2\n2\n2\n2\n1']);