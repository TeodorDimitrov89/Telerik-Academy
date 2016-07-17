function solve(args) {
    var array;
    //var input = args[0];
    var sizeArr = Number(args[0]);
    var targetNum = Number(args[2]);
    array = args[1].split(' ');
    var counter = 0;
    appCount();
    function appCount() {
        for (var i = 0; i < sizeArr; i++) {
             if (Number(array[i]) === targetNum) {
                 counter++;
             }
        }
    }
    console.log(counter);
}

solve(['8','28 6 21 6 -7856 73 73 -56','73']);

