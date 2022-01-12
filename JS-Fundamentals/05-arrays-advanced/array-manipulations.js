function arrayManipulations(array) {
    let numbers = array.shift()
        .split(' ')
    // .map(Number);


    // •	Remove {number}: remove number from the array
    // •	RemoveAt {index}: removes number at a given index
    // •	Insert {number} {index}: inserts a number at a given index


    for (let line of array) {
        let [command, num, index] = line.split(' ')
        switch (command) {
            case 'Add':
                numbers.push(num);
                break;
            case 'Remove':
                numbers = numbers.sort(a => a != num);
            case 'RemoveAt':
                numbers.splice(num, 1);
                break;
            case 'Insert':
                numbers.splice(index, 0, num);
                break;
        }

    }

    console.log(numbers.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']

)