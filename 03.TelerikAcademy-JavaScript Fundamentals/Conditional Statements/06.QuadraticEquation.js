"use strict";
function quadraticEquation(arr) {
    var a = parseFloat(arr[0]);
    var b = parseFloat(arr[1]);
    var c =parseFloat(arr[2]);
    var d = b*b-(4*a*c);

    if(d < 0) {
        console.log('no real roots');
    }
    else if(d === 0) {
        var x = -b/(2*a);
        console.log('x1=x2='+x.toFixed(2));
    }
     else {
        var x1 = (-b+(Math.sqrt(d)))/(2*a);
        var x2 = (-b-(Math.sqrt(d)))/(2*a);
        var temp;
        if(x1 > x2) {
            temp=x1;
            x1=x2;
            x2=temp;
        }
        if(x1 < x2) {
            console.log('x1=' + x1.toFixed(2) + ';'+' ' + 'x2=' + x2.toFixed(2));
        }
    }
}
quadraticEquation(['0.2', '9.572', '0.2']);