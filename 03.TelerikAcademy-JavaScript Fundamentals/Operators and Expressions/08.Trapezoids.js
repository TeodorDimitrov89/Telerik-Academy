"use strict";
function trapezoids(arr) {
    let a = Number(arr[0]);
    let b = Number(arr[1]);
    let h = Number(arr[2]);
    let area = (a+b)*h/2;
    console.log(area.toFixed(7));
}
trapezoids(['8.5', '4.3', '2.7']);