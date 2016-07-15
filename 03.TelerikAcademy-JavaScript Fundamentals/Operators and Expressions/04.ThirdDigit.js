"use strict";
function thirdDigit(arr) {
    let third = Math.floor((arr / 100) % 10);
    if(third==7) {
        console.log(true);
    }
    else {
        console.log(false +' ' + third);
    }
}
thirdDigit(['7564386720']);