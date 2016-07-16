function maxIncreasingSequence(arr) {
    var args = arr[0].split('\n');
    var numArray = [];
    var maxLength = 0;
    var length = 1;
    for (var p = 1; p <= Number(args[0]); p++) {
        numArray[p] = args[p];
    }
    for (var i = 0; i < numArray.length; i++) {

        var counter = 1;
        var k = i;
        var j = i + 1;

        while (Number(numArray[k]) < Number(numArray[j]))
        {
            counter++;
            j++;
            k++;
        }
        if (counter > maxLength) {
            maxLength = counter;
        }
    }
    console.log(maxLength);
}
maxIncreasingSequence(['9\n8\n7\n2\n3\n4\n5\n6\n7\n8']);
//'11\n10\n2\n1\n2\n2\n2\n2\n2\n2\n2\n1'