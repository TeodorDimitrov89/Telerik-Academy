"use strict";
function primeCheck(number){
    let prime = true;
    if(number<2) {
        console.log(false);
        return;
    }
    for(let i=2;i<=(number/2);i++) {
        if(number%i==0) {
            prime=false;
            break;
        }
    }
    if(prime) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
primeCheck(['1']);