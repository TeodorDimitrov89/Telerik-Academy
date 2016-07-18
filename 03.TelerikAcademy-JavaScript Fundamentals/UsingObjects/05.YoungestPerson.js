function youngestPerson(args) {
    var people = [],
        input = args,
        step = 3;

    for (var i = 0; i < input.length; i += step) {
        people.push({
            firstname: input[i],
            lastname: input[i + 1],
            age: +input[i + 2]
        });
    }
    var youngest = people.reduce(
        function findYoungestPerson(a , b) {
            return a.age <= b.age ? a : b;
        });

    console.log(youngest.firstname + ' ' + youngest.lastname);
}

youngestPerson([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '21',
    'John', 'Doe', '4',
    'John', 'Doe', '5',
    'John', 'Doe', '1',
    'John', 'Doe', '21'
]);