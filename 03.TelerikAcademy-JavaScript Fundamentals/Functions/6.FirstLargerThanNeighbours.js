function solve(args) {
    var arrLength = Number(args[0]);
    var arrNum = args[1].split(' ').map(Number);
    var counter = 0;

    for (var k = 0; k < arrLength; k++) {
        if(largerThanNeighbours(k,arrNum)) {
            console.log(k);
            break;
        }
    }
    function largerThanNeighbours(i,arrNum) {
        if ((arrNum[i] > arrNum[i - 1]) && (arrNum[i] > arrNum[i + 1])) {
            return true;
        }
        else {
            return false;
        }
    }
}

solve(['6','-26 -25 -28 31 2 27']);