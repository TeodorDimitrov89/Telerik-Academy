"use strict";
function mMSA(array) {
    var result = [];
    var counter = 0;
    for(var i = 0;i < array.length; i++) {
        result[i] = Number(array[i]);
        counter++;
    }
    var maximo = getMax(result);
    var min = getMin(result);
    var sum = getSum(result);
    var avg = getAvg(result);
    console.log('min='+min.toFixed(2));
    console.log('max='+maximo.toFixed(2));
    console.log('sum='+sum.toFixed(2));
    console.log('avg='+avg.toFixed(2));

    function getMin(result){
        return Math.min.apply(Math,result);
    }

    function getMax(result){
        return Math.max.apply(Math,result);
    }
    function getSum(result) {
        var sum = 0;
        for(var i = 0;i < array.length; i++) {
            sum += Number(array[i]);
        }
        return sum;
    }
    function getAvg(result) {
        return  getSum(result)/result.length;
    }
}


 mMSA(['2', '-1', '4']);