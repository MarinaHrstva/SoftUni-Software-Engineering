function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);
    for (let line of input) {
        let [command, index, value] = line.split(' ')
        index = Number(index);
        value = Number(value);
        if (command === 'End') {
            break;
        } else if (command === 'Shoot') {
            targets[index] -= value;
            if (targets[index] <= 0) {
                targets.splice(index, 1);
            }

        } else if (command === 'Add') {

            if (index > 0 && index < targets.length) {
                targets.splice(index, 0, value)
            } else {
                console.log('Invalid placement!');
            }

        } else if (command === 'Strike') {
            let start = index - value;
            let count = start * 2 + 1;
            if (start < 0 || index + value > targets.length) {
                console.log('Strike missed!');
            } else {
                targets.splice(start, count);
            }

        }

    }

    console.log(targets.join('|'));

}

movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
