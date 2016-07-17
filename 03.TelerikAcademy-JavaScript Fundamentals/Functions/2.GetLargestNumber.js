function solve(number) {
    var args = number[0].split(' ');
    getMax(args);
    function getMax(args) {
        var firstNum = Number(args[0]);
        var secondNum = Number(args[1]);
        var thirdNum = Number(args[2]);
        if (firstNum > secondNum && firstNum > thirdNum) {
            console.log(firstNum);
        }
        else if(secondNum > firstNum && secondNum > thirdNum) {
            console.log(secondNum);
        }
        else if(thirdNum > firstNum && thirdNum > secondNum) {
            console.log(thirdNum);
        }
        else if(firstNum === secondNum && firstNum === thirdNum) {
            console.log(firstNum);
        }
        else if(secondNum > firstNum && secondNum === thirdNum) {
            console.log(secondNum);
        }
    }
}
solve(['6 19 19']);