function train(input) {

    let wagons = input.shift()
        .split(' ')
        .map(Number);
    let capacity = Number(input.shift());
    
    for (let line of input) {
        let [command, passengers] = line.split(' ')

        if (command === 'Add') {
            wagons.push(Number(passengers));
        } else {
            command = Number(command);
            for (let i = 0; i < wagons.length; i++) {
            if(command+wagons[i]<=capacity){
                wagons[i]+=command;
                break;
            }
                
            }

        }

    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)

// 72 54 21 12 4 75 23 10 0