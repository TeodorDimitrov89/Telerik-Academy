function solve(args) {
    var lineA, lineB, lineC, result = '';
    var A = {
        x1: Number(args[0]), y1: Number(args[1]),
        x2: Number(args[2]), y2: Number(args[3]),
        lineCreate: function () {
            lineA = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2-this.y1, 2));
            result += lineA;
            console.log(Number(result).toFixed(2));
        }
    };
    var B = {
        x3: Number(args[4]), y3: Number(args[5]),
        x4: Number(args[6]), y4: Number(args[7]),
        lineCreate: function () {
            lineB = Math.sqrt(Math.pow(this.x4 - this.x3, 2) + Math.pow(this.y4-this.y3, 2));
            result = lineB ;
            console.log(Number(result).toFixed(2));
        }
    };
    var C = {
        x5: Number(args[8]), y5: Number(args[9]),
        x6: Number(args[10]), y6: Number(args[11]),
        lineCreate: function () {
            lineC = Math.sqrt(Math.pow(this.x6 - this.x5, 2) + Math.pow(this.y6-this.y5, 2));
            result = lineC;
            console.log(Number(result).toFixed(2));
        }
    };
    A.lineCreate();
    B.lineCreate();
    C.lineCreate();
    if ((lineA + lineB > lineC) && (lineA + lineC > lineB) && (lineB + lineC > lineA)) {
        console.log('Triangle can be built');
    }
    else {
        console.log('Triangle can not be built');
    }
}

solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]);