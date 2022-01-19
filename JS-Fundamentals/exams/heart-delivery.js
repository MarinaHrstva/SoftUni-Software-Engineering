function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let currentPosition = 0;
    let lastPosition = 0;

    for (let line of input) {
        let [command, step] = line.split(' ')
        step = Number(step);
        if (command === 'Jump') {
            currentPosition += step;
            if (currentPosition > neighborhood.length) {
                currentPosition = neighborhood.length - step;
            }

            if (neighborhood[currentPosition] <= 0) {
                console.log(`Place ${currentPosition} already had Valentine's day.`);
            }

            neighborhood[currentPosition] -= 2

            if (neighborhood[currentPosition] <= 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }

        } else {
            break;
        }

        lastPosition = currentPosition;

    }

    let sum = neighborhood.reduce((a, b) => a + b)
    let filtered = neighborhood.filter(el => el > 0);

    console.log(`Cupid's last position was ${lastPosition}.`);

    if (sum > 0) {
        console.log(`Cupid has failed ${filtered.length} places.`);
    } else {
        console.log('Mission was successful.');
    }

}


heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love! "])

