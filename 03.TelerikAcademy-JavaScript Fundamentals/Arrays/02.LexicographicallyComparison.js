"use strict";
function Compare(args) {
    var str = args[0].split('\n');
    var firstString  = str[0],
        secondString = str[1];

    if (firstString > secondString) {
        console.log('>');
    }else if(firstString < secondString){
        console.log('<');
    }
    else {
        console.log('=');
    }
}
Compare(['hello\nhalo']);