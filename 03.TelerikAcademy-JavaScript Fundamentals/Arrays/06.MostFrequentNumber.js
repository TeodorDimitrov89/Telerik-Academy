"use strict";

function mostFrequentNum(arr) {
    var args = arr[0].split('\n');
    var numArray = [];
    var element = 0;
    var count = 0;
    for (var i = 1; i <= Number(args[0]); i++) {
        numArray[i] = args[i];
    }
    for (var j = 0; j < numArray.length - 1; j++) {
        var tempNum = numArray[j];
        var tempCount = 0;

        for (var p = 0; p < numArray.length; p++)
        {
            if (numArray[p] == tempNum)
            {
                tempCount++;
            }
        }
        if (tempCount > count)
        {
            count = tempCount;
            element = tempNum;

        }
    }
    console.log(element+' '+'('+count+' '+'times)');
}
mostFrequentNum(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']);
//'11\n10\n2\n1\n2\n2\n2\n2\n2\n2\n2\n1'