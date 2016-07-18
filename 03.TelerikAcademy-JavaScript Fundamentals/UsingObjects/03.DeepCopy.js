"use strict";

let obj = [1,21,32,432,56,12312,8,8];
deepCopy(obj);
function deepCopy(obj) {
    if(typeof obj === 'object') {
        let newObj = Array.isArray(obj) ? [] : {};
        for (let i in obj) {
            newObj[i] = deepCopy(obj[i]);
        }
        return newObj;
    }
    else {
        return obj;
    }
}
console.log(deepCopy(obj));
